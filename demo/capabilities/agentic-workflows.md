# Agentic Workflows (gh-aw)

- **id**: area.copilot.agentic-workflows
- **product**: GitHub Copilot (`product.copilot`)

**Capabilities in this group:** `capability.agentic-workflows`

---

## GitHub Agentic Workflows (gh-aw)

- **id**: capability.agentic-workflows

AI-powered GitHub Actions workflows (authored in Markdown, compiled to lock files) that reason, adapt, and act autonomously.

### Value Proposal

- **Intelligent, autonomous DevOps:** Bring the power of AI to CI/CD by having intelligence meet automation, extending what's possible with GitHub Actions
- **Built-in security and guardrails:** `safe-outputs` separate agent-compute from resource manpulation in a safe and secure way
- **Easy and efficient creation and maintenance:** 'Vibe-code' a new agentic workflow from scratch instead of hand-writing YAML by using the custom agent and CLI

### Prestaged content

- `content.auto-analyze-failures-workflow` — `.github/workflows/auto-analyze-failures.md`.
- `content.daily-activity-workflow` — `.github/workflows/daily-repo-activity-summary.md`.
- `content.issue-triage-suggestions-workflow` — `.github/workflows/issue-triage-suggestions.md`.
- `content.pr-doc-tests-workflow` — `.github/workflows/pr-doc-tests-check.md`.

### Shown in walkthroughs

- `walkthrough.copilot.agentic-workflows-create-from-scratch`
- `walkthrough.copilot.agentic-workflows-auto-analyze-failures`
- `walkthrough.copilot.agentic-workflows-daily-summary`
- `walkthrough.copilot.agentic-workflows-issue-triage-suggestions`
- `walkthrough.copilot.agentic-workflows-pr-doc-test-review`
