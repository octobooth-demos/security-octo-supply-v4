import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

export function sessionLink(result) {
    return typeof result === "string"
        ? result.match(/\bghapp:\/\/sessions\/[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}\b/i)?.[0]
        : undefined;
}

function executionMode(name) {
    return name.match(/^\[HydraFusion(?: - |\-)(Single|Cascade|Critique)\]/)?.[1]
        || name.match(/^(Single|Cascade|Critique) - HydraFusion:/)?.[1];
}

export function parseTasks(source, maxNameLength = 40) {
    const tasks = [...source.matchAll(/^## (.+)\r?\n\r?\nPrompt:\r?\n\r?\n```prompt\r?\n([\s\S]*?)\r?\n```/gm)]
        .map(([, requestedName, prompt]) => {
            const name = requestedName;
            if (!prompt.trim()) {
                throw new Error(`Task prompt is empty: ${requestedName}`);
            }
            if (name.length > maxNameLength) {
                throw new Error(`Session name exceeds the App's ${maxNameLength}-character limit: ${name}`);
            }
            return { requestedName, name, prompt };
        });
    if (tasks.length === 0 || new Set(tasks.map(({ name }) => name)).size !== tasks.length) {
        throw new Error("Expected unique task headings followed by Prompt: and fenced prompt blocks.");
    }
    return tasks;
}

export function createLauncher({
    session, promptPath, demoId = "hydrafusion", title = "HydraFusion",
    model = "hydrafusion", mode = "autopilot",
    description = "Choose a task to start in its own worktree, or launch the full demo.",
}) {
    if (!/^[a-z0-9-]+$/.test(demoId)) throw new Error("Demo IDs must use lowercase letters, digits, and hyphens.");
    if (!["autopilot", "interactive", "plan"].includes(mode)) throw new Error("Unsupported demo session mode.");
    if (!model || typeof model !== "string") throw new Error("A demo model is required.");
    if (!session.workspacePath) {
        throw new Error("Demo Launcher requires session workspace storage for launch results.");
    }
    const statePath = join(session.workspacePath, "files", `${demoId}-launcher.json`);
    let running = false;

    async function readState() {
        try {
            return JSON.parse(await readFile(statePath, "utf8"));
        } catch (error) {
            if (error.code === "ENOENT") return { status: "idle", sessions: [] };
            throw error;
        }
    }

    async function saveState(state) {
        await mkdir(join(session.workspacePath, "files"), { recursive: true });
        await writeFile(`${statePath}.tmp`, JSON.stringify(state, null, 2), "utf8");
        await rename(`${statePath}.tmp`, statePath);
    }

    async function plan() {
        const source = await readFile(promptPath, "utf8");
        const { tools } = await session.rpc.tools.getCurrentMetadata();
        const tool = tools?.find(({ name }) => name === "create_session");
        const properties = tool?.input_schema?.properties;
        const direct = typeof session.rpc.tools.execute === "function" &&
            properties?.workspace_type && properties?.kickoff?.properties?.model &&
            properties?.kickoff?.properties?.prompt && properties?.name;
        const tasks = parseTasks(source, properties?.name?.maxLength ?? 40);
        return { tasks, route: direct ? "direct" : "agent" };
    }

    async function preview() {
        const [{ tasks, route }, state] = await Promise.all([plan(), readState()]);
        state.sessions = state.sessions.map((entry) => ({
            ...entry, url: sessionLink(entry.result),
        }));
        state.latestSessions = (state.latestSessions || state.sessions).map((entry) => ({
            ...entry, url: sessionLink(entry.result),
        }));
        return { tasks, route, state, running, model, mode, title, description, allowBulkLaunch: demoId === "hydrafusion" };
    }

    async function launch(taskName) {
        if (running) throw new Error("Preparation is already running.");
        running = true;
        let state;
        try {
            if (taskName === undefined && demoId !== "hydrafusion") {
                throw new Error("Bulk launch is only available for the HydraFusion demo. Select a subsession to launch.");
            }
            const { tasks: availableTasks, route } = await plan();
            const tasks = taskName === undefined ? availableTasks :
                availableTasks.filter(({ name }) => name === taskName);
            if (tasks.length === 0) throw new Error(`Unknown demo task: ${taskName}`);
            const previous = await readState();
            state = {
                status: "running", route, sessions: [],
                latestSessions: previous.latestSessions || previous.sessions,
            };
            // Record progress before side effects so partial failures remain visible.
            await saveState(state);
            if (route === "agent") {
                state.messageId = await session.send({
                    prompt: `Create ${tasks.length === 1 ? "only one independent App session" : `${tasks.length} independent App sessions`} with separate worktrees in this project's repository. Select ${model} and ${mode} mode before submitting each matching task. Do not implement tasks in this coordinating session or substitute another model. Explain any limitations.\n\n${tasks.map((task) => `Session name: ${task.name}\nTask prompt:\n${task.prompt}`).join("\n\n")}`,
                });
                state.status = "forwarded";
            } else {
                for (const task of tasks) {
                    state.pending = task.name;
                    await saveState(state);
                    const result = await session.rpc.tools.execute({
                        name: "create_session",
                        arguments: {
                            name: task.name,
                            session_kind: "project",
                            workspace_type: "worktree",
                            coordinate_with_creator: false,
                            kickoff: { model, mode, prompt: task.prompt },
                        },
                    });
                    if (!result || typeof result !== "object" || result.resultType !== "success") {
                        throw new Error(typeof result === "string" ? result :
                            result?.error || result?.textResultForLlm || "App did not confirm session creation.");
                    }
                    const entry = {
                        name: task.name,
                        result: result.textResultForLlm,
                        url: sessionLink(result.textResultForLlm),
                    };
                    state.sessions.push(entry);
                    state.latestSessions = state.latestSessions.filter(
                        (previousEntry) => previousEntry.name !== task.name &&
                            !(demoId === "hydrafusion" && executionMode(task.name) &&
                                executionMode(previousEntry.name) === executionMode(task.name)),
                    );
                    state.latestSessions.push(entry);
                    delete state.pending;
                    await saveState(state);
                }
                state.status = "created";
            }
            await saveState(state);
            return state;
        } catch (error) {
            if (state) {
                state.status = "error";
                state.error = error.message;
                await saveState(state);
            }
            throw error;
        } finally {
            running = false;
        }
    }

    return { preview, launch };
}
