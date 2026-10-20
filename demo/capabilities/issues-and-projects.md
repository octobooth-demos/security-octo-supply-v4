# Issues & Projects

- **id**: area.planning.issues-and-projects
- **product**: GitHub Issues & Projects (`product.planning`)

**Capabilities in this group:** `capability.issues`, `capability.issue-agent-automation-controls`, `capability.issue-fields`, `capability.projects`, `capability.project-automations`

---

## Issues

- **id**: capability.issues

Issue tracking with types (Epic/Feature/Task), hierarchical sub-issues, blocking dependencies, and PR linkage.

### Value Proposal

- Organize, plan and track work easily and natively integrated
- Brings project management capabilities into GitHub

### Prestaged content

- `content.tos-issue` — "Allow downloading our terms and conditions" linked to `content.tos-download-pr`.
- `content.compliance-epic` — "Compliance Requirements" epic with sub-issues.
- `content.product-stock-levels-issue` — feature issue used to kick off orchestrated implementation as a PR stack.
- `content.product-stock-database-issue`, `content.product-stock-api-issue`, `content.product-stock-frontend-issue` — standalone task issues implemented in order for the PR stack.

### Shown in walkthroughs

- `walkthrough.copilot.on-github-epic-from-mockup`
- `walkthrough.copilot.spaces-compliance-assessment`
- `walkthrough.planning.issues-types-sub-issues`
- `walkthrough.copilot.app-pr-stacks`

## Agent Automation Controls in GitHub Issues

- **id**: capability.issue-agent-automation-controls

Review controls for issue changes proposed by agent automations, including approvals, confidence levels, and rationale.

### Value Proposal

- **Human control:** Hold suggested issue changes for review and accept or decline them individually or in bulk.
- **Confidence-based automation:** Use agent confidence and repository thresholds to decide which changes apply automatically and which require review.
- **Transparent decisions:** Record rationale for supported actions so maintainers can understand what changed and why without adding triage comments.

### Prestaged content

- `content.issue-triage-suggestions-workflow` — agentic workflow that suggests labels, issue type, and optional severity.

### Shown in walkthroughs

- `walkthrough.copilot.agentic-workflows-issue-triage-suggestions`

## Issue Fields (Org-Level Custom Metadata)

- **id**: capability.issue-fields

Organization-level custom issue fields (e.g. Severity, Root Cause, Affected Users) for consistent categorization across repos.

### Value Proposal

- Engineering orgs need consistent incident categorization.
- Org-level fields make every repo report incidents the same way — no per-repo setup, no inconsistent labeling.

### Prestaged content

- `content.org-issue-fields` — Severity (SEV1-4), Root Cause Category, Affected Users.
- `content.seed-issues` — issues #3,#4,#9,#10,#14 with realistic titles and pre-set field values, showcasing a typically in-progress project.

### Shown in walkthroughs

- `walkthrough.planning.issue-fields`

## Projects (Boards, Fields, Views)

- **id**: capability.projects

Project boards with custom fields and multiple views (backlog, sprint board, roadmap) for agile planning.

### Value Proposal

- **Integrated Planning & Tracking:** GitHub Projects provides a unified system to connect work items directly to code changes, enabling teams to track progress and link development work to requirements.
- **Workflow Customization & Organization:** It allows establishing conventions for issue templates, labeling, and project organization tailored to team workflows, enhancing clarity and efficiency.
- **Single Source of Truth:** By integrating planning and development, GitHub Projects creates a centralized source where stakeholders can monitor project status and developers can align work with goals.
- **Enhanced Collaboration & Visibility:** The platform supports collaboration through transparent tracking and linking of issues, pull requests, and project tasks, improving communication and accountability.

### Prestaged content

- `content.octocat-project` — project board with Status/Priority/Sprint/Estimate/Squad fields and saved views.

### Shown in walkthroughs

- `walkthrough.copilot.on-github-epic-from-mockup`
- `walkthrough.planning.projects`

## Project Automations

- **id**: capability.project-automations

Built-in project workflows that automate item management (auto-add, auto-archive, auto-close, on-merge).

### Value Proposal

- Automate common project-management tasks (auto-add items/sub-issues, auto-archive, auto-close, react to merges) improves efficiency and reduces manual overhead, allowing teams to focus on high-value work.

### Prestaged content

- `content.octocat-project` — default workflows enabled on the demo project.
