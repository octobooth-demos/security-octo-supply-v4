# GitHub Pull Requests

- **id**: area.github.pull-requests
- **product**: GitHub (`product.github`)

**Capabilities in this group:** `capability.github-pull-request-stacks`

---

## Pull Request Stacks

- **id**: capability.github-pull-request-stacks

Related pull requests can be organized into a dependency stack, making it easier to build, review, and update a larger change as a sequence of focused contributions.

### Value Proposal

- Keep dependent work reviewable in smaller, ordered pull requests instead of one large change.
- Make dependencies between pull requests visible and keep upper pull requests aligned when a lower pull request changes.
- Support incremental review and validation, with CI running against each layer of the stack.

### Prestaged content

- `content.product-stock-levels-issue` — feature issue describing database, API, and frontend work.
- `content.product-stock-database-issue`, `content.product-stock-api-issue`, `content.product-stock-frontend-issue` — standalone task issues mapped in order to the three PR stack layers.

### Shown in walkthroughs

- [Orchestrate Copilot App sessions for a pull request stack](../walkthroughs/copilot/github-copilot-app.md) — `walkthrough.copilot.app-pr-stacks`
