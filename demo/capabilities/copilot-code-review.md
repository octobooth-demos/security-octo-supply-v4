# Copilot Code Review

- **id**: area.copilot.code-review
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.copilot-code-review`, `capability.copilot-group-changes`

---

## Copilot Code Review (CCR)

- **id**: capability.copilot-code-review

AI code review on pull requests that runs in Actions, uses the Code Graph plus tools (CodeQL, ESLint), and can hand findings to a Coding Agent.

### Value Proposal

- Accelerates the code review process by automatically generating detailed, context-aware review comments,
- Integrates seamlessly with existing pull request workflows, reducing manual effort and enabling faster feedback cycle
- Enhances collaboration by providing consistent and objective insights, supporting teams in maintaining high standards and reducing review bottlenecks
- Leverages AI to understand code context deeply, allowing it to suggest improvements that align with project conventions and best practices

### Prestaged content

- `content.tos-download-pr` — "Feature: Add ToS Download" PR (primary review target).
- `scenario.cart-page` — `feature-cart-page` branch/PR alternative.
- `content.code-review-skill` — `.github/skills/code-review/SKILL.md`.
- `content.api-instructions` — `.github/instructions/api.instructions.md`.

### Shown in walkthroughs

- `walkthrough.copilot.code-review-demo-flow`
- `walkthrough.copilot.app-review-results`
- `walkthrough.copilot.msbuild-agentic-ccr-skills`
- `walkthrough.copilot.msbuild-ccr-medium-tier`

## Copilot Group Changes in PRs

- **id**: capability.copilot-group-changes

Copilot automatically groups related file changes in a pull request into logical sections.

### Value Proposal

- Make large PRs easier to review and understand by allowing developers to review related changes together in a focused way, rather than being overwhelmed by a long list of individual file changes

### Prestaged content

- `content.cart-page-branch` — `feature-add-cart-page` branch.
- `content.tos-download-pr` — alternative via a fake commit on the ToS PR.

### Shown in walkthroughs

- `walkthrough.copilot.code-review-group-changes`
