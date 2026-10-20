# Copilot Cloud Agent

- **id**: area.copilot.coding-agent
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.copilot-coding-agent`

---

## Copilot Cloud Agent (CCA)

- **id**: capability.copilot-coding-agent

GitHub Copilot cloud agent is GitHub’s autonomous, asynchronous software engineering agent. It helps developers delegate work to Copilot so they can keep projects moving while staying in control of review, validation, and merge decisions.

### Value Proposal

- **Increase engineering capacity:** Developers can hand off routine, repetitive, or well-scoped tasks while they focus on higher-complexity work.
- **Move faster with control:** Copilot can research, plan, code, validate, and request review while keeping humans in the loop.
- **Scale agentic workflows:** Teams can automate recurring tasks such as issue triage, failing test fixes, release-note preparation, and repository maintenance.
- **Reduce context switching:** Developers can invoke or monitor the agent from the surfaces where they already work, including GitHub.com, Copilot Chat, GitHub Mobile, Raycast, Visual Studio, and the GitHub Copilot app.
- **Support enterprise adoption:** Admins have more controls for enablement, runners, secrets, variables, validation tools, and organization-level rollout.

### Prestaged content

- `scenario.cart-page` — issue + branch + design used for parallel experimentation and async handoff.
- `content.improve-api-test-coverage-issue` — "Improve test coverage for API" issue, pre-assignable to CCA.
- `content.self-healing-patch` — patch-set "Copilot: Self-Healing DevOps" that breaks a test to trigger auto-remediation.
- `content.codeql-nodejs` — "Query built from user-controlled sources" (SQL injection, per active backend), assignable to CCA.

### Shown in walkthroughs

- `walkthrough.copilot.agentic-workflows-create-from-scratch`
- `walkthrough.copilot.code-review-demo-flow`
- `walkthrough.copilot.cca-handoff-to-cca-prompt`
- `walkthrough.copilot.cca-parallel-experiment`
- `walkthrough.copilot.cca-self-healing-devops`
- `walkthrough.copilot.mission-control-walkthrough`
- `walkthrough.copilot.app-intro`
- `walkthrough.copilot.app-cart-page`
- `walkthrough.copilot.app-fleet-execution`
- `walkthrough.ghas.cca-uses-codeql`
- `walkthrough.ghas.assign-codeql-to-cca`
