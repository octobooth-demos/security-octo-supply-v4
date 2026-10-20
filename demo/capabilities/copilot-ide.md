# Copilot in the IDE (VS Code)

- **id**: area.copilot.ide
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.copilot-agent-mode`, `capability.agent-merge`, `capability.agent-automations`

---

## Copilot Agent Mode

- **id**: capability.copilot-agent-mode

Agentic Copilot Chat inside the IDE that reads the codebase, plans, and makes multi-file changes, validating and self-healing as it goes.

### Value Proposal

- Understands an existing codebase and makes complex, multi-file changes from natural language.
- Convention-aware: reads existing patterns (Tailwind, dark mode, config, tests) and generates code that fits in.
- Generates tests, runs them, self-heals on errors, and analyses coverage.
- Reviewable like a human PR — you can inspect and adjust before accepting.

### Prestaged content

- `scenario.cart-page` — `docs/design/cart.png` + prompt used for Vision-driven generation.
- `content.improve-api-test-coverage-issue` — issue #2, used for test-coverage generation.

### Shown in walkthroughs

- `walkthrough.copilot.agent-skills-api-endpoint`
- `walkthrough.copilot.unit-test-coding-agent`
- `walkthrough.copilot.unit-test-custom-prompt`
- `walkthrough.copilot.unit-test-manual-chat`
- `walkthrough.copilot.unit-test-copilot-cli`
- `walkthrough.copilot.vision-cart-custom-prompt`
- `walkthrough.copilot.vision-cart-manual-chat`
- `walkthrough.copilot.actions-azure-deployment`
- `walkthrough.microsoft-foundry.build-the-ui`

## Agent Merge

- **id**: capability.agent-merge

An agent that automatically drives a PR toward merge-readiness by incorporating review comments, security findings, and CI/CD results.

### Value Proposal

- Automatically fixes CI/CD failures, Copilot Code Review comments, and CodeQL findings without manual intervention.
- Removes the toil so human review is genuinely valuable — not rubber-stamping formatting fixes.

### Prestaged content

- `content.tos-download-pr` — "Feature: Add ToS Download" PR.
- `scenario.cart-page` — Cart PR alternative.

### Shown in walkthroughs

- `walkthrough.copilot.msbuild-agent-merge`
