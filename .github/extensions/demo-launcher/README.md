# Demo Launcher canvas

Project-scoped Copilot canvas for disposable, rendered OctoCAT Supply demo repositories. It ships with the repository; no user extension installation or extra dependencies are needed.

Open the **Demo Launcher** canvas (`hydrafusion-prep`, retained for compatibility) in a coordinating GitHub Copilot App session. A prominent heading identifies the selected demo. Click the green **Launch Subsession** button to create only that task's session. After a confirmed launch, it becomes **Relaunch Subsession**, with **Open Session** immediately to its right. Only the HydraFusion demo provides **Launch all HydraFusion subsessions**; other demos launch subsessions individually. Opening or previewing the canvas does not create sessions. Each task gets an independent worktree in the coordinator's project; it does not stack on the coordinator's branch. The default HydraFusion demo uses Autopilot mode.

The names and task prompts come from [hydrafusion-prep.prompt.md](../../prompts/hydrafusion-prep.prompt.md). Prompts render in labeled `prompt` code blocks with a **Copy prompt** button. Single currently asks to add the test command to the README docs. Names must fit the App's 40-character limit.

The GitHub-styled canvas follows the App's light/dark theme and displays file references as readable paths. Each task row links to its last confirmed launch, including sessions created before a partial failure. Launching one task preserves the other tasks' last results across reloads. Existing saved results also gain links when reopened. If the App returns no link, the canvas directs you to the session list and keeps the response under an expandable detail instead of displaying JSON.

## Adding demos

Add an entry to `demos.json` with a unique lowercase kebab-case ID and these fields:

```json
{
  "docs-demo": {
    "title": "Documentation demo",
    "promptFile": "../../prompts/docs-demo.prompt.md",
    "model": "auto",
    "mode": "autopilot",
    "description": "Launch documentation tasks in independent sessions."
  }
}
```

`promptFile` is relative to the extension's entry point. The prompt file can contain any number of uniquely named `## Session name` headings, each followed by `Prompt:` and a fenced `prompt` block, matching the existing prep prompt's format. Session names must fit the App's 40-character limit. Models must be available to the user; no alternate model is silently substituted. Supported modes are `autopilot`, `interactive`, and `plan`.

Reload extensions after changing the catalog. Open the canvas with input `{ "demo": "docs-demo" }` to select the new demo; omitted input defaults to `hydrafusion`. Each demo has separate launch results in the coordinating session's workspace. No new code or dependencies are required for additional session-based demos.

## Direct creation and fallback

The extension uses the SDK's experimental `session.rpc.tools.execute` API to invoke the App's offered `create_session` tool through its native invocation pipeline. There is no coordinating agent turn and no private App endpoint, deep link, CLI process, or manually managed worktree. The App remains responsible for session creation, model availability, permissions, and kickoff.

When the host does not offer the required `create_session` inputs, the button instead sends the selected task's preparation instructions (or the full prep prompt for all three) to the **current agent session** with `session.send`. The canvas labels this fallback explicitly. The agent must confirm what it actually created; prompt admission is not proof of creation.

Failures are shown explicitly; no other model is substituted. The latest batch's confirmations and progress are stored in the coordinator's session workspace at `files/hydrafusion-launcher.json`, not in the repo. Each deliberate click creates new sessions for the chosen task or all three; existing sessions are kept, not replaced. Buttons are disabled only while a launch is in progress and are available again after completion, failure, panel reopen, or extension reload. Concurrent submissions are rejected. A partial or ambiguous failure is not automatically retried: inspect the App session list before clicking again, because some sessions may already exist.

## Verification

```bash
node --test .github/extensions/demo-launcher/launcher.test.mjs
```

These tests use a fake App transport and do not create real sessions. The `preview` canvas action is also read-only.
