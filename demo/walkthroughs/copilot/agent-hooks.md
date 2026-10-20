# Agent Hooks Demo

### Demo 1: Audit Logging

- **id**: walkthrough.copilot.agent-hooks-audit-logging
- **Capabilities:** [Copilot Agent Hooks](../../capabilities/copilot-general.md#copilot-agent-hooks) (`capability.agent-hooks`)
- **Contents:** [Agent hooks config](../../inventory.md) (`content.agent-hooks-config`)

1. Open `.github/hooks/hooks.json` and explain the `sessionStart`, `UserPromptSubmit` and `Stop` hook configuration.
2. Open Copilot Chat (Agent Mode) and ask a prompt like:

   ```prompt
   What frameworks are used in this project?
   ```

3. Open `.agent.log` (or run `cat .agent.log` in terminal) to show the captured timestamped entries.

### Demo 2: Automated Checkpoints

- **id**: walkthrough.copilot.agent-hooks-automated-checkpoints
- **Capabilities:** [Copilot Agent Hooks](../../capabilities/copilot-general.md#copilot-agent-hooks) (`capability.agent-hooks`), [Agent Skills](../../capabilities/copilot-general.md#agent-skills) (`capability.agent-skills`)
- **Contents:** [Agent hooks config](../../inventory.md) (`content.agent-hooks-config`), [API endpoint skill](../../inventory.md) (`content.api-endpoint-skill`)

#### Option 1: Quick Visual Demo

1. Open `.github/hooks/hooks.json`.
2. Locate the `Stop` event section and **uncomment** the `checkpoint-commit.sh` block:

   ```jsonc
   // comment this in if you want automatic commits after each agent session
   {
     "type": "command",
     "bash": ".github/hooks/checkpoint-commit.sh",
     "cwd": ".",
     "timeoutSec": 10
   }
   ```

3. Ask Copilot to make a visible change:

   ```prompt
   Add two rocket emojis 🚀🚀 to the title in the README.
   ```

4. Wait for the agent to finish.
5. Show the **Source Control** view or run `git log -1` to verify a new commit exists with the timestamp and message.

#### Option 2: Complex Workflow (With Skills)

1. Ensure the checkpoint hook is enabled (see Option 1).
2. Go through the [Agent Skills](./agent-skills.md) walkthrough to set up the `api-endpoint` skill.
3. Point out that the massive amount of generated code (Models, Routes, Tests) is neatly encapsulated in a single "checkpoint" commit, separating it from previous work.
