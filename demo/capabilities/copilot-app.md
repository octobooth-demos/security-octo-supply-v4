# GitHub Copilot App

- **id**: area.copilot.app
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.github-copilot-app`, `capability.copilot-canvases`

---

## GitHub Copilot App

- **id**: capability.github-copilot-app

A standalone, session-based development app — 'Mission Control' for agentic work — with multi-repo sessions, a built-in terminal and browser, and no IDE required.

### Value Proposal

- **Unified Agentic Workflow:** GitHub Copilot app provides a native desktop experience that consolidates issues, pull requests, repositories, and agent sessions into a single, focused workflow, reducing context switching and accelerating progress from task to merged PR.
- **Parallel Agent Session Management:** The app enables developers to run multiple isolated agent workspaces concurrently, each backed by git worktrees, allowing safe parallel workstreams without interference.
- **Seamless Integration with GitHub Workflows:** It keeps agent-driven work connected to existing GitHub systems of record for planning, collaboration, review, validation, and merge, supporting trusted delivery workflows and governance.
- **Automated Pull Request Follow-Through:** Features like Agent Merge help reduce manual toil by autonomously managing PR lifecycle tasks such as addressing review feedback, fixing CI failures, and merging when ready.

### Prestaged content

- `content.product-stock-levels-issue` — feature issue used to kick off orchestration for layered work and a PR stack.
- `content.product-stock-database-issue`, `content.product-stock-api-issue`, `content.product-stock-frontend-issue` — standalone task issues implemented in order, each in its own app session and PR.
- `scenario.cart-page` — Path 1 simple intro feature.
- `scenario.order-tracking` — Path 2 end-to-end research/plan/parallel feature.

### Shown in walkthroughs

- `walkthrough.copilot.on-github-epic-from-mockup`
- `walkthrough.copilot.app-intro`
- `walkthrough.copilot.app-interface-tour`
- `walkthrough.copilot.app-cart-page`
- `walkthrough.copilot.app-research-plan`
- `walkthrough.copilot.app-fleet-execution`
- `walkthrough.copilot.app-review-results`
- `walkthrough.copilot.app-pr-stacks`
- `walkthrough.copilot.app-compliance-workflow`
- `walkthrough.copilot.msbuild-canvas-issue-analyzer`
- `walkthrough.copilot.msbuild-rubber-duck-review`
- `walkthrough.copilot.msbuild-agent-merge`

## Copilot Canvases

- **id**: capability.copilot-canvases

Guided, customizable UI surfaces in the GitHub Copilot App for collaborating with agents (e.g. an issue-readiness analyzer). (Build 2026)

### Value Proposal

- **Guided Collaboration with Agents:** Copilot Canvases provide a structured, visual interface for developers to interact with agents, making it easier to analyze issues, plan work, and execute tasks collaboratively.
- **Customizable Workflows for Teams:** Teams can create tailored canvases that align with their specific processes and workflows, enhancing productivity and ensuring that agentic workflows are effectively integrated into team practices.

### Prestaged content

- `scenario.cart-page` — cart-page issue analysed in the canvas.
- `content.issue-readiness-canvas` — issue-readiness-analyzer canvas.

### Shown in walkthroughs

- `walkthrough.copilot.msbuild-canvas-issue-analyzer`
