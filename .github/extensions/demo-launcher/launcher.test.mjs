import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import { createLauncher, parseTasks, sessionLink } from "./launcher.mjs";

const promptPath = fileURLToPath(new URL("../../prompts/hydrafusion-prep.prompt.md", import.meta.url));
const source = await readFile(promptPath, "utf8");
const metadata = {
    tools: [{
        name: "create_session",
        input_schema: { properties: {
            name: { maxLength: 40 },
            workspace_type: {},
            kickoff: { properties: { model: {}, prompt: {} } },
        } },
    }],
};

async function fixture(t, overrides = {}) {
    const workspacePath = await mkdtemp(join(tmpdir(), "hydrafusion-launcher-test-"));
    t.after(() => rm(workspacePath, { recursive: true, force: true }));
    const calls = [];
    const session = {
        workspacePath,
        rpc: { tools: {
            getCurrentMetadata: async () => metadata,
            execute: async (call) => {
                calls.push(call);
                return { resultType: "success", textResultForLlm: "App confirmed creation" };
            },
            ...overrides,
        } },
        send: async (message) => {
            calls.push(message);
            return "message-1";
        },
    };
    return { calls, session, launcher: createLauncher({ session, promptPath }) };
}

test("reads three exact task prompts and handles the App name limit explicitly", () => {
    const tasks = parseTasks(source);
    assert.equal(tasks.length, 3);
    assert.equal(tasks[0].requestedName, "[HydraFusion-Single] Update Docs");
    assert.equal(tasks[0].name, "[HydraFusion-Single] Update Docs");
    assert.equal(tasks[0].prompt, "Add the test command to the README docs.");
    assert.equal(tasks[1].name, "[HydraFusion-Cascade] Add Tests");
    assert.equal(tasks[2].name, "[HydraFusion-Critique] Implement Feature");
    assert.equal(tasks[1].prompt, 'Add a test for the branch API endpoint to gracefully handle database disruptions, ensuring they return a 500 without showing details. Use the existing test framework for the backend in this repository.');
    assert.match(tasks[2].prompt, /<copilot-ref kind="file" target-id="docs\/design\/order-tracking-prototype.png"/);
    assert.ok(tasks.every(({ name }) => name.length <= 40));
    assert.throws(() => parseTasks(source, 20), /name exceeds/);
    assert.throws(() => parseTasks("No tasks"), /Expected unique task/);
});

test("preview has no side effects; direct launch submits three independent App sessions", async (t) => {
    const { calls, launcher, session } = await fixture(t);
    const preview = await launcher.preview();
    assert.equal(preview.route, "direct");
    assert.equal(preview.mode, "autopilot");
    assert.equal(preview.state.status, "idle");
    assert.equal(calls.length, 0);
    const state = await launcher.launch();
    assert.equal(state.status, "created");
    assert.equal(calls.length, 3);
    for (const [index, call] of calls.entries()) {
        assert.deepEqual(call, {
            name: "create_session",
            arguments: {
                name: preview.tasks[index].name,
                session_kind: "project",
                workspace_type: "worktree",
                coordinate_with_creator: false,
                kickoff: { model: "hydrafusion", mode: "autopilot", prompt: preview.tasks[index].prompt },
            },
        });
    }
    assert.equal((await launcher.preview()).running, false);
    assert.equal((await launcher.launch()).status, "created");
    assert.equal(calls.length, 6);
    const reloaded = createLauncher({ session, promptPath });
    assert.equal((await reloaded.preview()).running, false);
    assert.equal((await reloaded.launch()).status, "created");
    assert.equal(calls.length, 9);
});

test("missing App creation tool forwards the prep prompt once per click, without frontmatter", async (t) => {
    const { launcher, calls } = await fixture(t, { getCurrentMetadata: async () => ({ tools: [] }) });
    assert.equal((await launcher.preview()).route, "agent");
    assert.equal((await launcher.launch()).status, "forwarded");
    assert.equal(calls.length, 1);
    for (const task of parseTasks(source)) assert.ok(calls[0].prompt.includes(task.prompt));
    assert.match(calls[0].prompt, /Select hydrafusion and autopilot mode/);
    assert.equal((await launcher.launch()).status, "forwarded");
    assert.equal(calls.length, 2);
});

test("partial failures are recorded and never retried or forwarded to an agent", async (t) => {
    let count = 0;
    const { launcher, calls, session } = await fixture(t, {
        execute: async () => {
            count++;
            return count === 1 ? { resultType: "success", textResultForLlm: "Created first session" }
                : { resultType: "failure", error: "HydraFusion is unavailable" };
        },
    });
    await assert.rejects(launcher.launch(), /HydraFusion is unavailable/);
    const { state } = await launcher.preview();
    assert.equal(state.status, "error");
    assert.equal(state.sessions.length, 1);
    assert.equal(state.pending, "[HydraFusion-Cascade] Add Tests");
    assert.equal((await createLauncher({ session, promptPath }).preview()).running, false);
    assert.equal(count, 2);
    await assert.rejects(launcher.launch(), /HydraFusion is unavailable/);
    assert.equal(count, 3);
    assert.equal(calls.length, 0);
});

test("concurrent clicks cannot duplicate preparation", async (t) => {
    const { launcher } = await fixture(t);
    const first = launcher.launch();
    await assert.rejects(launcher.launch(), /already running/);
    assert.equal((await first).status, "created");
});

test("storage and transport errors surface without session creation", async (t) => {
    assert.throws(() => createLauncher({ session: {}, promptPath }), /workspace storage/);
    const { launcher, calls } = await fixture(t, {
        getCurrentMetadata: async () => { throw new Error("Transport disconnected"); },
    });
    await assert.rejects(launcher.launch(), /Transport disconnected/);
    assert.equal(calls.length, 0);
});

test("an ambiguous creation exception is visible after reload but allows deliberate re-creation", async (t) => {
    let count = 0;
    const { launcher, session } = await fixture(t, {
        execute: async () => {
            count++;
            throw new Error("Connection lost after request submission");
        },
    });
    await assert.rejects(launcher.launch(), /Connection lost/);
    const reloaded = createLauncher({ session, promptPath });
    const { state } = await reloaded.preview();
    assert.equal(state.status, "error");
    assert.equal(state.pending, "[HydraFusion-Single] Update Docs");
    assert.equal((await reloaded.preview()).running, false);
    assert.equal(count, 1);
    await assert.rejects(reloaded.launch(), /Connection lost/);
    assert.equal(count, 2);
});

test("the canvas enables re-creation after a previous batch and after each click", async () => {
    const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
    const script = html.match(/<script type="module">([\s\S]*?)<\/script>/)[1];
    let click;
    let launches = 0;
    const taskButtons = [];
    const selectedTasks = [];
    const clipboardWrites = [];
    function element() {
        return {
            dataset: {}, children: [],
            append(...children) { this.children.push(...children); },
            replaceChildren(...children) { this.children = children; },
            setAttribute(name, value) { this[name] = value; },
            addEventListener(event, handler) { this.click = handler; },
        };
    }
    const button = {
        ...element(),
        disabled: true,
        addEventListener: (event, handler) => { click = handler; },
    };
    const elements = {
        "#launch": button,
        "#status": element(),
        "#tasks": element(),
        "#bulk-actions": element(),
        "#demo-title": element(),
        "#description": element(),
    };
    await runInNewContext(`(async () => {${script}})()`, {
        document: {
            querySelector: (selector) => elements[selector],
            createElementNS: (namespaceURI, tag) => ({ ...element(), namespaceURI, tagName: tag }),
            createElement: (tag) => {
                const node = element();
                if (tag === "button") taskButtons.push(node);
                return node;
            },
            createTextNode: (text) => ({ textContent: text }),
        },
        location: { href: "http://127.0.0.1:1234/token/", pathname: "/token/" },
        URL,
        navigator: { clipboard: { writeText: async (text) => clipboardWrites.push(text) } },
        setTimeout() {},
        setInterval() {},
        fetch: async (url) => {
            const isLaunch = url.pathname.endsWith("/launch");
            if (isLaunch) {
                const selectedTask = url.searchParams.get("task");
                const activeControl = selectedTask
                    ? elements["#tasks"].children[parseTasks(source).findIndex(({ name }) => name === selectedTask)].children.at(-1).children[0]
                    : button;
                assert.equal(activeControl["aria-busy"], "true");
                assert.equal(activeControl.disabled, true);
                launches++;
                selectedTasks.push(url.searchParams.get("task"));
            }
            return {
                ok: true,
                json: async () => isLaunch ? { status: "created", sessions: [] } : {
                    route: "direct", tasks: parseTasks(source), running: false,
                    title: "HydraFusion", mode: "autopilot", description: "Demo tasks.", allowBulkLaunch: true,
                    state: { status: "created", sessions: [{
                        name: "Single - HydraFusion: README tests",
                        result: "Open ghapp://sessions/11111111-2222-3333-4444-555555555555.",
                    }] },
                },
            };
        },
    });

    assert.equal(button.disabled, false);
    const taskRow = elements["#tasks"].children[0];
    assert.equal(taskRow.children[0].children.length, 1);
    assert.equal(taskRow.children[0].children[0].textContent, "[Single] Update Docs");
    assert.equal(elements["#tasks"].children[1].children[0].children[0].textContent, "[Cascade] Add Tests");
    assert.equal(elements["#tasks"].children[2].children[0].children[0].textContent, "[Critique] Implement Feature");
    const promptCard = taskRow.children[1];
    assert.equal(promptCard.className, "prompt-card");
    const promptIcon = promptCard.children[0].children[0].children[0];
    assert.equal(promptCard.children[0].children[0].children[1].textContent, "Copilot prompt");
    assert.equal(promptIcon.class, "prompt-icon");
    assert.equal(promptIcon.namespaceURI, "http://www.w3.org/2000/svg");
    assert.equal(promptIcon.children.length, 2);
    assert.ok(promptIcon.children.every(({ namespaceURI, tagName }) => namespaceURI === promptIcon.namespaceURI && tagName === "path"));
    assert.match(html, /\.prompt-icon \{[^}]*fill: currentColor/);
    assert.equal(promptCard.children[0].children[1].textContent, "Copy prompt");
    assert.equal(promptCard.children[1].children[0].className, "language-prompt");
    assert.equal(promptCard.children[1].children[0].children[0].textContent, parseTasks(source)[0].prompt);
    await promptCard.children[0].children[1].click();
    assert.deepEqual(clipboardWrites, [parseTasks(source)[0].prompt]);
    assert.equal(promptCard.children[0].children[1].textContent, "Copied!");
    const resultContainer = taskRow.children.at(-1);
    const sessionAnchor = resultContainer.children.at(-1);
    assert.equal(sessionAnchor.href, "ghapp://sessions/11111111-2222-3333-4444-555555555555");
    assert.equal(sessionAnchor.textContent, "Open Session");
    assert.equal(elements["#status"].textContent, "");
    assert.equal(resultContainer["aria-label"], `Actions for ${parseTasks(source)[0].name}`);
    assert.equal(resultContainer.children[0].textContent, "Relaunch Subsession");
    assert.equal(resultContainer.children[0].className, "primary");
    assert.equal(button.hidden, false);
    assert.equal(elements["#demo-title"].textContent, "HydraFusion");
    assert.ok(!html.includes("Independent worktrees"));
    assert.ok(!html.includes("Direct App session creation. No coordinating agent turn."));
    assert.ok(html.indexOf("</header>") < html.indexOf('<div id="tasks"'));
    assert.ok(html.indexOf('<div id="tasks"') < html.indexOf('<div class="bulk-actions">'));
    assert.ok(!html.includes("Use a disposable demo repository."));
    assert.match(html, /button\[aria-busy="true"\]::before/);
    assert.match(html, /prefers-reduced-motion: reduce/);
    await click();
    assert.equal(button.disabled, false);
    await click();
    assert.equal(button.disabled, false);
    assert.equal(launches, 2);
    const launchButtons = taskButtons.filter(({ className }) => className === "primary");
    assert.equal(launchButtons.length, 3);
    assert.equal(launchButtons[1].textContent, "Launch Subsession");
    await launchButtons[0].click();
    assert.equal(launches, 3);
    assert.deepEqual(selectedTasks, [null, null, parseTasks(source)[0].name]);
    assert.ok(launchButtons.every(({ disabled }) => disabled === false));
    assert.ok(launchButtons.every((control) => control["aria-busy"] === "false"));
    await launchButtons[1].click();
    assert.equal(launches, 4);
    assert.equal(launchButtons[1]["aria-busy"], "false");
});

test("session links use only exact session URLs returned by the App", () => {
    const url = "ghapp://sessions/11111111-2222-3333-4444-555555555555";
    assert.equal(sessionLink(`Created session. Link to it with ${url}.`), url);
    assert.equal(sessionLink("No link returned"), undefined);
    assert.equal(sessionLink("javascript:alert(1)"), undefined);
    assert.equal(sessionLink("ghapp://sessions/not-a-session-id"), undefined);
});

test("preview adds links to saved results from older launcher versions", async (t) => {
    const { launcher, session } = await fixture(t);
    const url = "ghapp://sessions/11111111-2222-3333-4444-555555555555";
    await mkdir(join(session.workspacePath, "files"), { recursive: true });
    await writeFile(join(session.workspacePath, "files", "hydrafusion-launcher.json"), JSON.stringify({
        status: "created",
        sessions: [{ name: "Older session", result: `Created session. Link to it with ${url}.` }],
    }));
    assert.equal((await launcher.preview()).state.sessions[0].url, url);
});

test("new launch results persist the exact returned session link", async (t) => {
    const url = "ghapp://sessions/11111111-2222-3333-4444-555555555555";
    const { launcher, session } = await fixture(t, {
        execute: async () => ({ resultType: "success", textResultForLlm: `Link to it with ${url}.` }),
    });

    const result = await launcher.launch(parseTasks(source)[0].name);
    assert.equal(result.sessions[0].url, url);
    assert.equal((await createLauncher({ session, promptPath }).preview()).state.sessions[0].url, url);
});

test("individual launches preserve the latest result for each task across reloads", async (t) => {
    const { launcher, session } = await fixture(t);
    const [single, cascade] = parseTasks(source);
    await mkdir(join(session.workspacePath, "files"), { recursive: true });
    await writeFile(join(session.workspacePath, "files", "hydrafusion-launcher.json"), JSON.stringify({
        status: "created",
        sessions: [{ name: "[HydraFusion - Single] README tests", result: "Previously created" }],
    }));
    await launcher.launch();
    const second = await launcher.launch(single.name);
    assert.equal(second.sessions.length, 1);
    assert.equal(second.latestSessions.length, 3);
    const reloaded = createLauncher({ session, promptPath });
    assert.equal((await reloaded.preview()).state.latestSessions.length, 3);
    const third = await reloaded.launch(cascade.name);
    assert.equal(third.latestSessions.length, 3);
    assert.equal(third.latestSessions.filter(({ name }) => name === single.name).length, 1);
    assert.equal(third.latestSessions.filter(({ name }) => name === cascade.name).length, 1);
});

test("a selected task creates exactly one session, and invalid selections create none", async (t) => {
    const { launcher, calls } = await fixture(t);
    await assert.rejects(launcher.launch("Unknown task"), /Unknown demo task/);
    assert.equal(calls.length, 0);
    for (const task of parseTasks(source)) {
        const state = await launcher.launch(task.name);
        assert.equal(state.sessions.length, 1);
        assert.equal(calls.at(-1).arguments.name, task.name);
        assert.equal(calls.at(-1).arguments.kickoff.prompt, task.prompt);
    }
    assert.equal(calls.length, 3);
});

test("selected-task fallback forwards only that task", async (t) => {
    const { launcher, calls } = await fixture(t, { getCurrentMetadata: async () => ({ tools: [] }) });
    const [single, cascade, critique] = parseTasks(source);
    assert.equal((await launcher.launch(single.name)).status, "forwarded");
    assert.equal(calls.length, 1);
    assert.ok(calls[0].prompt.includes(single.prompt));
    assert.ok(!calls[0].prompt.includes(cascade.prompt));
    assert.ok(!calls[0].prompt.includes(critique.prompt));
    assert.match(calls[0].prompt, /only one independent App session/);
    assert.match(calls[0].prompt, /hydrafusion and autopilot/);
});

test("a different demo supports arbitrary task counts, names, models, and isolated results", async (t) => {
    const { session, calls, launcher: hydrafusion } = await fixture(t);
    const otherPrompt = join(session.workspacePath, "other.prompt.md");
    await writeFile(otherPrompt, "## Documentation demo\n\nPrompt:\n\n```prompt\nUpdate usage docs.\n```\n");
    const other = createLauncher({
        session, promptPath: otherPrompt, demoId: "docs", title: "Documentation",
        model: "auto", mode: "interactive", description: "A documentation demo.",
    });
    const preview = await other.preview();
    assert.equal(preview.tasks.length, 1);
    assert.equal(preview.title, "Documentation");
    assert.equal(preview.mode, "interactive");
    assert.equal(preview.allowBulkLaunch, false);
    await assert.rejects(other.launch(), /Bulk launch is only available/);
    assert.equal(calls.length, 0);
    await other.launch(preview.tasks[0].name);
    assert.deepEqual(calls[0].arguments.kickoff, {
        model: "auto", mode: "interactive", prompt: "Update usage docs.",
    });
    assert.equal((await hydrafusion.preview()).state.status, "idle");
    await other.launch(preview.tasks[0].name);
    assert.equal((await other.preview()).state.latestSessions.length, 1);
});
