import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { joinSession, createCanvas } from "@github/copilot-sdk/extension";
import { createLauncher } from "./launcher.mjs";

const demos = JSON.parse(await readFile(new URL("./demos.json", import.meta.url), "utf8"));
const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const servers = new Map();
const launchers = new Map();

function getLauncher(demoId) {
    if (!Object.hasOwn(demos, demoId)) throw new Error(`Unknown demo: ${demoId}`);
    if (!launchers.has(demoId)) {
        const { promptFile, ...config } = demos[demoId];
        launchers.set(demoId, createLauncher({
            session, demoId, ...config,
            promptPath: fileURLToPath(new URL(promptFile, import.meta.url)),
        }));
    }
    return launchers.get(demoId);
}

async function startServer(demoId) {
    const launcher = getLauncher(demoId);
    const token = randomUUID();
    const base = `/${token}/`;
    let origin;
    const server = createServer(async (req, res) => {
        res.setHeader("Cache-Control", "no-store");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Referrer-Policy", "no-referrer");
        try {
            if (req.headers.host !== new URL(origin).host) {
                res.writeHead(403).end();
                return;
            }
            if (req.method === "GET" && req.url === base) {
                res.setHeader("Content-Type", "text/html; charset=utf-8");
                res.end(html);
                return;
            }
            if (req.method === "GET" && req.url === `${base}state`) {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(await launcher.preview()));
                return;
            }
            const requestUrl = new URL(req.url, origin);
            if (req.method === "POST" && requestUrl.pathname === `${base}launch`) {
                if (req.headers.origin !== origin || req.headers["x-launcher-token"] !== token) {
                    res.writeHead(403).end();
                    return;
                }
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(await launcher.launch(requestUrl.searchParams.get("task") ?? undefined)));
                return;
            }
            res.writeHead(404).end();
        } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: error.message }));
        }
    });
    await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", resolve);
    });
    origin = `http://127.0.0.1:${server.address().port}`;
    return { server, url: `${origin}${base}`, demoId };
}

const session = await joinSession({
    canvases: [
        createCanvas({
            id: "hydrafusion-prep",
            displayName: "Demo Launcher",
            description: "Launch configured demo tasks in named independent worktree sessions.",
            inputSchema: {
                type: "object",
                properties: { demo: { type: "string", enum: Object.keys(demos) } },
                additionalProperties: false,
            },
            actions: [{
                name: "preview",
                description: "Read the session plan and launcher status without creating sessions.",
                inputSchema: { type: "object", properties: {}, additionalProperties: false },
                handler: ({ instanceId }) => getLauncher(servers.get(instanceId)?.demoId || "hydrafusion").preview(),
            }],
            open: async ({ instanceId, input }) => {
                const demoId = input?.demo || "hydrafusion";
                let entry = servers.get(instanceId);
                if (entry && entry.demoId !== demoId) {
                    await new Promise((resolve) => entry.server.close(resolve));
                    servers.delete(instanceId);
                    entry = undefined;
                }
                if (!entry) {
                    entry = await startServer(demoId);
                    servers.set(instanceId, entry);
                }
                return { title: "Demo Launcher", url: entry.url };
            },
            onClose: async ({ instanceId }) => {
                const entry = servers.get(instanceId);
                if (entry) {
                    servers.delete(instanceId);
                    await new Promise((resolve) => entry.server.close(resolve));
                }
            },
        }),
    ],
});
