# Copilot CLI

- **id**: area.copilot.cli
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.copilot-cli`, `capability.copilot-cli-cloud`, `capability.ralph-loop`

---

## Copilot CLI

- **id**: capability.copilot-cli

Copilot in the terminal — agentic coding outside the IDE, including parallel/fleet execution of subagents.

### Value Proposal

- Brings AI-powered coding assistance directly to the terminal, enabling developers to delegate coding tasks asynchronously while working locally, which boosts productivity and reduces context switching
- Helps developers stay in the flow by maintaining persitent context across multi-step workflows
- Enables advanced agentic orchestration, such as running multiple subagents in parallel to handle complex tasks, turning manual work into scalable workflows
- Deep GitHub integration with repos, issues and PRs, including issue-context handoff to cloud sessions.

### Prestaged content

- `content.improve-api-test-coverage-issue` — issue #2 used as the CLI task.
- `content.api-coverage-looper-agent` — `.github/agents/api-coverage-looper.agent.md` (fleet/looper).

### Shown in walkthroughs

- `walkthrough.copilot.unit-test-copilot-cli`
- `walkthrough.copilot.mcp-dependency-scanning`
- `walkthrough.copilot.mcp-secret-scanning`
- `walkthrough.copilot.msbuild-cli-cloud`
- `walkthrough.copilot.ralph-loop-cli-fleet`
- `walkthrough.ghas.mcp-secret-scanning`

## Copilot CLI Cloud Sessions

- **id**: capability.copilot-cli-cloud

Cloud-executed Copilot CLI sessions (sandboxes) that persist after the local CLI is closed, with issue-context handoff. (Build 2026 preview)

### Value Proposal

- Secure and isolated execution environments for GitHub Copilot, allowing Copilot to safely interqact with code, tols filesystem and network resources
- Will allow for a Governance- and security layer with firewalls and policies in the future, enabling organizations to more tightly control and monitor Copilot's actions
- Decouples the runtime from the developers machine, allowing agents to continue to work on tasks even after the local CLI is closed and providing elastic and scalable compute

### Prestaged content

- `scenario.cart-page` — cart-page issue/branch used as the cloud session's starting context.

### Shown in walkthroughs

- `walkthrough.copilot.msbuild-cli-cloud`

## Ralph Loop (Autonomous Iteration)

- **id**: capability.ralph-loop

A custom-agent loop that autonomously iterates over a task (e.g. raising test coverage) until a goal is met, spawning fresh subagents each pass.

### Value Proposal

- Keep context tight through fresh iterations to avoid polluting the context window.
- Complete control with the ability to stop the loop at any time.
- Hand off work to the cloud or continue in the background.

### Prestaged content

- `content.api-coverage-looper-agent` — `.github/agents/api-coverage-looper.agent.md`.
- `content.api-test-writer-agent` — `.github/agents/api-test-writer.agent.md`.
