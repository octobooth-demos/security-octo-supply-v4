# Capabilities

A **Capability** is a GitHub feature **plus its durable value** — stated once, reused everywhere. It is one of the four primitives in the demo model:

> **Capability** · **Prestaged Content** · **Scenario** · **Flow**

Capabilities are organized in a **Product → Group → Capability** hierarchy. Each *group* is a single Markdown file (a feature family); each capability is a `##` section inside it with its own `capability.*` id, durable value, prestaged content, and walkthrough links. Pure Markdown (no YAML) so authors edit easily and AI can parse the connections.

- **Product** (`product.*`) — top-level GitHub product.
- **Group / Area** (`area.<product>.*`) — a feature-family file.
- **Capability** (`capability.*`) — a single feature + value.

Each capability lists the **Prestaged Content** it uses; the full catalog of those `content.*` items lives in [`../inventory.md`](../inventory.md).

> [!NOTE]
> Cards were extracted from `demo/walkthroughs/**`. Capabilities flagged **⚠️ TBD** have no explicit value in the source — please fill it in: `capability.copilot-voice`, `capability.security-campaigns`.

## GitHub

`product.github`

### [Pull Requests](./pull-requests.md)

`area.github.pull-requests`

- **Pull Request Stacks** — `capability.github-pull-request-stacks`

## GitHub Copilot

`product.copilot`

### [Copilot in the IDE (VS Code)](./copilot-ide.md)

`area.copilot.ide`

- **Copilot Agent Mode** — `capability.copilot-agent-mode`
- **Agent Merge** — `capability.agent-merge`
- **Copilot Agent Automations** — `capability.agent-automations`

### [Copilot Cloud Agent](./copilot-coding-agent.md)

`area.copilot.coding-agent`

- **Copilot Cloud Agent (CCA)** — `capability.copilot-coding-agent`

### [Copilot CLI](./copilot-cli.md)

`area.copilot.cli`

- **Copilot CLI** — `capability.copilot-cli`
- **Copilot CLI Cloud Sessions** — `capability.copilot-cli-cloud`
- **Ralph Loop (Autonomous Iteration)** — `capability.ralph-loop`

### [GitHub Copilot App](./copilot-app.md)

`area.copilot.app`

- **GitHub Copilot App** — `capability.github-copilot-app`
- **Copilot Canvases** — `capability.copilot-canvases`

### [Copilot Code Review](./copilot-code-review.md)

`area.copilot.code-review`

- **Copilot Code Review (CCR)** — `capability.copilot-code-review`
- **Copilot Group Changes in PRs** — `capability.copilot-group-changes`

### [Copilot General](./copilot-general.md)

`area.copilot.general`

- **Copilot Plan Mode** — `capability.copilot-plan-mode`
- **Copilot Vision** — `capability.copilot-vision`
- **Copilot Subagents** — `capability.copilot-subagents`
- **Copilot Voice** — `capability.copilot-voice` ⚠️ **TBD value**
- **Copilot Custom Agents** — `capability.custom-agents`
- **Copilot Custom Instructions** — `capability.custom-instructions`
- **Copilot Custom Prompts** — `capability.custom-prompts`
- **MCP Servers** — `capability.mcp-servers`
- **Playwright MCP** — `capability.playwright-mcp`
- **Rubber Duck Review** — `capability.rubber-duck-review`
- **Agent Skills** — `capability.agent-skills`
- **Copilot Agent Hooks** — `capability.agent-hooks`
- **Mission Control** — `capability.mission-control`
- **Copilot Agent Automations** — `capability.agent-automations`
- **Copilot Plugins Marketplace** — `capability.plugins-marketplace`

### [Agentic Workflows (gh-aw)](./agentic-workflows.md)

`area.copilot.agentic-workflows`

- **GitHub Agentic Workflows (gh-aw)** — `capability.agentic-workflows`

### [Copilot Spaces](./copilot-spaces.md)

`area.copilot.spaces`

- **Copilot Spaces** — `capability.copilot-spaces`

## GitHub Advanced Security

`product.ghas`

### [Code Scanning](./code-scanning.md)

`area.ghas.code-scanning`

- **Code Scanning (CodeQL)** — `capability.code-scanning-codeql`
- **Copilot Autofix** — `capability.copilot-autofix`
- **AI Code Scanning (Preview)** — `capability.ai-code-scanning`
- **GitHub MCP Security Scanning** — `capability.github-mcp-security-scanning`
- **Security Campaigns** — `capability.security-campaigns` ⚠️ **TBD value**

### [Secret Scanning & Push Protection](./secret-scanning.md)

`area.ghas.secret-scanning`

- **Secret Scanning** — `capability.secret-scanning`
- **Push Protection** — `capability.push-protection`

### [Dependabot](./dependabot.md)

`area.ghas.dependabot`

- **Dependabot Alerts** — `capability.dependabot-alerts`
- **Dependabot Version Updates** — `capability.dependabot-version-updates`
- **Dependency Review** — `capability.dependency-review`

### [Security Overview](./security-overview.md)

`area.ghas.security-overview`

- **Repository Security Overview** — `capability.security-overview-repo`
- **Organization Security Overview** — `capability.security-overview-org`
- **Enterprise Security Overview** — `capability.security-overview-enterprise`

## GitHub Codespaces

`product.codespaces`

### [Codespaces](./codespaces.md)

`area.codespaces.core`

- **GitHub Codespaces** — `capability.codespaces`

## GitHub Actions

`product.actions`

### [GitHub Actions](./actions.md)

`area.actions.workflows`

- **Required Workflows** — `capability.required-workflows`
- **Reusable Workflows** — `capability.reusable-workflows`

## GitHub Code Quality

`product.code-quality`

### [Code Quality](./code-quality.md)

`area.code-quality.core`

- **Code Quality** — `capability.code-quality`
- **Repository Code Quality Insights** — `capability.code-quality-insights-repo`
- **Organization Code Quality Insights** — `capability.code-quality-insights-org`

## Microsoft Foundry

`product.microsoft-foundry`

### [Microsoft Foundry](./microsoft-foundry.md)

`area.microsoft-foundry.core`

- **Microsoft Foundry** — `capability.microsoft-foundry`

## GitHub Issues & Projects

`product.planning`

### [Issues & Projects](./issues-and-projects.md)

`area.planning.issues-and-projects`

- **Issues (Types, Sub-issues, Dependencies)** — `capability.issues`
- **Agent Automation Controls in GitHub Issues** — `capability.issue-agent-automation-controls`
- **Issue Fields (Org-Level Custom Metadata)** — `capability.issue-fields`
- **Projects (Boards, Fields, Views)** — `capability.projects`
- **Project Automations** — `capability.project-automations`

## GitHub Enterprise & Governance

`product.governance`

### [Repository Governance](./governance.md)

`area.governance.repository`

- **Repository Rulesets** — `capability.repository-rulesets`
- **Custom Properties** — `capability.custom-properties`
- **Actions Allow List** — `capability.actions-allow-list`
- **Artifact Attestations** — `capability.artifact-attestations`
- **Virtual Registry / Linked Artifacts** — `capability.virtual-registry`
- **Copilot AI Controls (Control Plane)** — `capability.ai-controls`
- **Custom Agent Rulesets** — `capability.custom-agent-rulesets`
- **MCP Policy Controls** — `capability.mcp-policy-controls`
