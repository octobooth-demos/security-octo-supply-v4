# Copilot General

- **id**: area.copilot.general
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.copilot-plan-mode`, `capability.hydrafusion`, `capability.copilot-vision`, `capability.copilot-subagents`, `capability.copilot-voice`, `capability.custom-agents`, `capability.custom-instructions`, `capability.custom-prompts`, `capability.mcp-servers`, `capability.playwright-mcp`, `capability.rubber-duck-review`, `capability.agent-skills`, `capability.agent-hooks`, `capability.mission-control`, `capability.agent-automations`, `capability.plugins-marketplace`

---

## Copilot Plan Mode

- **id**: capability.copilot-plan-mode

A Copilot Chat mode that structures and decomposes complex work into an interactive plan before any code is written.

### Value Proposal

- **Increases Context Efficiency & Agent Quality** - Structures complex work and catches architectural decisions early, before a line of code is written, improving the qualiy of downstream agents.
- **Interactive Planning** - Planning becomes a first-class, interactive artifact (to-do items with live spinners and checkmarks) rather than a throwaway markdown file.
- **Decomposes Work** - Decomposes a vague idea into structured, parallelizable workstreams ready for execution.

### Prestaged content

- `scenario.order-tracking` — design mockup used for research + decomposition into issues.
- `scenario.cart-page` — used to demo plan refinement (e.g. removing the 'purchases' part).

### Shown in walkthroughs

- `walkthrough.copilot.cca-handoff-prompt`
- `walkthrough.copilot.plan-mode`
- `walkthrough.copilot.app-research-plan`
- `walkthrough.microsoft-foundry.build-the-ui`

## HydraFusion

- **id**: capability.hydrafusion

An experimental Copilot orchestration system available in the GitHub Copilot App and Copilot CLI. HydraFusion selects the simplest execution workflow expected to meet the task's quality bar. It can use a Single, Cascade, or Critique pattern, coordinating planning, escalation, review, and implementation when the work warrants it.

### Value Proposal

- **Adaptive workflow selection** - Chooses an appropriate workflow, not merely a single model, reducing the cognitive burden of deciding how work should progress from planning through critique and implementation.
- **Built-in quality controls** - More complex work can be escalated or independently critiqued before Copilot returns the final response; straightforward tasks can still use the Single pattern.
- **One unified result** - Internal coordination is presented through model-agnostic progress such as drafting, reviewing, and repairing, while the developer receives one final answer.
- **Experimental evaluation** - The current experience is intended for evaluation and feedback. It complements, rather than replaces, human review and does not guarantee a particular quality, performance, latency, token-use, or cost outcome.

### Prestaged content

- `content.hydrafusion-prep-prompt` — App prompt for creating three independently named HydraFusion sessions.
- `content.hydrafusion-prep-canvas` — one-button App launcher for the three preparation tasks.
- `content.hydrafusion-single-prompt` — README test-command documentation prompt for the Single pattern.
- `content.hydrafusion-cascade-prompt` — database disruption test prompt for the Cascade pattern, expecting a 500 response without exposed details.
- `content.hydrafusion-critique-prompt` — order-tracking planning and implementation prompt, based on a UI design, for the Critique pattern.

### Shown in walkthroughs

- [`walkthrough.copilot.hydrafusion`](../walkthroughs/copilot/hydrafusion.md) — HydraFusion workflow orchestration in the GitHub Copilot App.

## Copilot Vision

- **id**: capability.copilot-vision

Copilot's ability to read images — design mockups, sketches, screenshots — and translate them into code or structured work items.

### Value Proposal

- Bridges PM and Engineering: a mockup's annotations and engineering notes flow straight into generated issues, reducing back-and-forth.

### Prestaged content

- `content.cart-design` — `docs/design/cart.png`.
- `content.dashboard-mockup` — `docs/design/dashboard-v1.png` annotated mockup used with `/create-issue`.
- `content.order-tracking-mockup` — `docs/design/order-tracking-prototype.png`.

### Shown in walkthroughs

- `walkthrough.copilot.cca-refine-prompt`
- `walkthrough.copilot.vision-cart-custom-prompt`
- `walkthrough.copilot.vision-cart-manual-chat`
- `walkthrough.copilot.on-github-epic-from-mockup`

## Copilot Subagents

- **id**: capability.copilot-subagents

A parent agent that invokes specialized subagents in parallel, each in its own fresh context, to keep the main context tight.

### Value Proposal

- Keep context tight through subagents and fresh iterations so the main context window stays clean.
- Run specialized agents in parallel on independent threads (e.g. one test-writer per untested route).

### Prestaged content

- `content.api-coverage-looper-agent` — `.github/agents/api-coverage-looper.agent.md`.
- `content.api-test-writer-agent` — `.github/agents/api-test-writer.agent.md`.

### Shown in walkthroughs

- `walkthrough.copilot.ralph-loop-api-coverage`

## Copilot Voice

- **id**: capability.copilot-voice

Voice interaction/dictation within Copilot App features

### Value Proposal

- Interact with Copilot more easily and naturally through dictation, speeding up especially long or complex prompts
- Makes Copilot more accessible to developers with disabilities or those who prefer voice input over typing

### Prestaged content

- Used alongside canvases and CLI Cloud demos to dictate prompts.

### Shown in walkthroughs

- `walkthrough.copilot.msbuild-canvas-issue-analyzer`
- `walkthrough.copilot.msbuild-cli-cloud`

## Copilot Custom Agents

- **id**: capability.custom-agents

Repository- or enterprise-defined agents (`.github/agents/*.md`) scoped to a single responsibility, usable with little prompting.

### Value Proposal

- Encode domain knowledge and team or project specific context and expertise into reusable agents
- Allows to turn repeated tasks and patterns into consistent, reviewable workflows
- Natively integrated and easily invokable by any Copilot surface

### Prestaged content

- `content.bdd-specialist-agent` — `.github/agents/bdd-specialist.md`.
- `content.api-specialist-agent` — `.github/agents/api-specialist.md`.
- `content.tdd-agents` — `.github/agents/tdd-red|green|blue.agent.md`.
- `scenario.tos-download` / `scenario.cart-page` — features the agents build/test.

### Shown in walkthroughs

- `walkthrough.copilot.tdd-multi-phase`
- `walkthrough.copilot.custom-agents-bdd`
- `walkthrough.copilot.custom-agents-api-specialist`
- `walkthrough.copilot.app-compliance-workflow`
- `walkthrough.copilot.ralph-loop-api-coverage`
- `walkthrough.governance.ai-controls-custom-agents`

## Copilot Custom Instructions

- **id**: capability.custom-instructions

Repository configuration (`.github/copilot-instructions.md`, `*.instructions.md`) that personalizes Copilot for internal libraries, standards, and conventions.

### Value Proposal

- Equips Copilot with the "must-know" information at each and every interaction natively and automatically
- Allows to tune all Agentic Workflows to the specifics of a project, team, or organization, creating a written contract between humans and agents
- Type once, reuse everywhere: Works cross-surface and in all Copilot Experiences - IDE, CLI, App and Code Review.

### Prestaged content

- `content.copilot-instructions` — `.github/copilot-instructions.md`.
- `content.tao-lib-docs` — `docs/tao.md` fictional internal library.
- `content.custom-instructions-patch` — "Copilot: Custom Instructions" patch set.

### Shown in walkthroughs

- `walkthrough.copilot.code-review-demo-flow`
- `walkthrough.copilot.custom-instructions`

## Copilot Custom Prompts

- **id**: capability.custom-prompts

Reusable prompt files (`.github/prompts/*.prompt.md`) that encode repeatable, standardized AI workflows invokable with `/name`.

### Value Proposal

- Codify repetitive propmts and workflows into reusable files that can be invoked by anyone in the repo

### Prestaged content

- `content.handoff-prompts` — `.github/prompts/handoff*.prompt.md`.
- `content.demo-prompts` — `.github/prompts/demo-cart-page.prompt.md`, `demo-unit-test-coverage.prompt.md`, `refine-prompt`, `demo-cca-parallel`.

### Shown in walkthroughs

- `walkthrough.copilot.cca-handoff-prompt`
- `walkthrough.copilot.cca-handoff-to-cca-prompt`
- `walkthrough.copilot.cca-refine-prompt`
- `walkthrough.copilot.cca-parallel-experiment`
- `walkthrough.copilot.custom-prompts`
- `walkthrough.ghas.codeql-live-code`

## MCP Servers

- **id**: capability.mcp-servers

Model Context Protocol support that extends Copilot with external tools (local or remote servers).

### Value Proposal

- Extend Copilot's capabilities using the open MCP server protocol - add tools and resources.
- Allows to integrate Copilot with internal- or 3rd party tools, providing tailored access to knowledge, APIs and services.
- Centralised allowlisting and configuration give teams control over which tools agents can use.

### Prestaged content

- `content.mcp-config` — `.vscode/mcp.json` (Playwright, github-local, github-remote).

### Shown in walkthroughs

- `walkthrough.copilot.plugins-marketplace`
- `walkthrough.copilot.mcp-dependency-scanning`
- `walkthrough.copilot.mcp-secret-scanning`
- `walkthrough.copilot.mcp-playwright`
- `walkthrough.copilot.mcp-github`
- `walkthrough.copilot.spaces-mcp-compliance-check`

## Playwright MCP

- **id**: capability.playwright-mcp

The Playwright MCP server is integrated by default into CCA and CCR, allowing Copilot to drive the browser and assist in Web Development scenarios.

### Value Proposal

- Built into CCA and CCR by default to allow to drive Browser-interactions more natively and wihtout effort
- Especially useful in Web development projets, where Copilot can start and inspect the app easily

### Prestaged content

- `scenario.cart-page` — Cart functionality used for Gherkin/Playwright tests.

### Shown in walkthroughs

- `walkthrough.copilot.mcp-playwright`

## Rubber Duck Review

- **id**: capability.rubber-duck-review

A review subagent that uses a different model to give a complementary perspective on a plan or change. (Build 2026)

### Value Proposal

- Multi-model choice: using a different model improves the quality of outputs by providing complementary perspectives.
- Provides a competitive differentiator for Copilot, as only few other AI coding assistants have multi-model support.

### Prestaged content

- `scenario.cart-page` — Cart Page plan reviewed by the rubber-duck subagent.

### Shown in walkthroughs

- `walkthrough.copilot.msbuild-rubber-duck-review`

## Agent Skills

- **id**: capability.agent-skills

Portable skill definitions (`.github/skills/*/SKILL.md`) that encode specific knowledge/patterns and load into context only when relevant.

### Value Proposal

- Encode institutional knowledge so code generation is consistent and bespoke, even for new developers or agents.
- Increase context efficiency as skills are only loaded on demand
- Works across all Copilot surfaces (IDE, CLI, App, Code Review) and can be shared across repos and organizations

### Prestaged content

- `content.api-endpoint-skill` — `.github/skills/api-endpoint/SKILL.md` (+ references).
- `content.web-design-guidelines-skill` — third-party `vercel-labs/agent-skills` web-design-guidelines.

### Shown in walkthroughs

- `walkthrough.copilot.agent-hooks-automated-checkpoints`
- `walkthrough.copilot.agent-skills-api-endpoint`
- `walkthrough.copilot.web-guidelines-skill`
- `walkthrough.copilot.msbuild-agentic-ccr-skills`

## Copilot Agent Hooks

- **id**: capability.agent-hooks

Lifecycle hooks (`.github/hooks/hooks.json`) that run scripts on agent events for extensibility — audit logging, auto-commits, linting and more.

### Value Proposal

- Enhances productivity and efficiency by seamlessly extending Copilot's capabilities with custom scripts
- Brings deterministic, auditable, and automated actions to agentic development

### Prestaged content

- `content.agent-hooks-config` — `.github/hooks/hooks.json` + `checkpoint-commit.sh`.

### Shown in walkthroughs

- `walkthrough.copilot.agent-hooks-audit-logging`
- `walkthrough.copilot.agent-hooks-automated-checkpoints`

## Mission Control

- **id**: capability.mission-control

A user-level hub (github.com/copilot/agents) that shows all ongoing agent tasks and lets you start, steer, and switch between sessions.

### Value Proposal

- Manage many coding agents at once — kick off, monitor live progress, and steer mid-session from a single pane.
- Provides a live view into the commands, MCP servers, and steps an agent is taking, plus the files it changed.
- Jump directly from a session to its PR or Codespace to finalise the work.

### Prestaged content

- `scenario.tos-download` and `scenario.cart-page` — issues/branches used to seed parallel agent sessions.
- `content.codeql-nodejs`, `content.workflow-permissions-alert` — CodeQL alerts assignable to agents.

### Shown in walkthroughs

- `walkthrough.copilot.mission-control-walkthrough`
- `walkthrough.copilot.custom-agents-bdd`

## Copilot Agent Automations

- **id**: capability.agent-automations

Personal, locally-executed recurring AI automations in the Copilot App that combine org knowledge (Spaces) with repo context. (Build 2026)

### Value Proposal

- **Reduced Burden to Entry**: Let anyone — PMs, compliance officers, designers — set up recurring AI-powered processes, not just developers.
- **Easy Setup and Maintenance**: Personal and local, making them secure and easy to configure compared with project-level CI/CD automations.

### Prestaged content

- `content.compliance-space` — used by the scheduled compliance-check automation.
- `content.tos-download-pr` — target for the test-coverage-review automation.

### Shown in walkthroughs

- `walkthrough.copilot.app-compliance-workflow`
- `walkthrough.copilot.msbuild-automation-unit-test-review`
- `walkthrough.copilot.msbuild-automation-issue-triage`

## Copilot Plugins Marketplace

- **id**: capability.plugins-marketplace

A marketplace to discover, install, and manage Copilot plugins/MCP extensions across VS Code and the CLI.

### Value Proposal

- Single place to discover community and first-party tools that integrate directly into the AI workflow.
- Tailor the AI assistant to a team's toolchain across both VS Code and the CLI.
- Plugins like Accessibility provide immediate, visible value by auditing UI components.

### Prestaged content

- `content.plugin-marketplace` — Octodemo Copilot Plugin Marketplace (`demo-copilot-plugin-marketplace`).
- `content.accessibility-plugin` — Accessibility plugin, installable from the `demo-copilot-plugin-marketplace` repository.

### Shown in walkthroughs

- `walkthrough.copilot.plugins-marketplace`
