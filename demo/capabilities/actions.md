# GitHub Actions

- **id**: area.actions.workflows
- **product**: GitHub Actions (`product.actions`)

**Capabilities in this group:** `capability.required-workflows`, `capability.reusable-workflows`

---

## Required Workflows

- **id**: capability.required-workflows

Organization/enterprise-enforced workflows that must pass on targeted repositories, defined via rulesets.

### Value Proposal

- Enforce generalized checks across many repositories from a central place — the workflow can live in another repo or even another org in the same enterprise.

### Prestaged content

- `content.octocat-ruleset` — "OD OctoCAT Supply Ruleset".
- `content.dependency-review-workflow` — Required workflow defined centrally in the [`od-octocat-supply-workflows`](https://github.com/octodemo-framework/content_octocat_supply_workflows) repository at `.github/workflows/dependency-review.yml`.
- `content.tos-download-pr` — PR that the required check runs on.

### Shown in walkthroughs

- `walkthrough.actions.required-workflows`
- `walkthrough.ghas.dependency-review-license`

## Reusable Workflows

- **id**: capability.reusable-workflows

Centrally-defined workflows referenced by many repositories to standardize CI/CD.

### Value Proposal

- Streamline common CI/CD tasks across an org or enterprise.
- Enforce consistency, reduce duplication, and improve maintainability across many projects.
- Allows for an innersourcing model to CI/CD

### Prestaged content

- `content.build-and-publish-workflow` — `.github/workflows/build-and-publish.yml` calling the central `build-publish-containers.yml`.

### Shown in walkthroughs

- `walkthrough.actions.reusable-workflows`
