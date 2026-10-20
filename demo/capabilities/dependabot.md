# Dependabot

- **id**: area.ghas.dependabot
- **product**: GitHub Advanced Security (`product.ghas`)

**Capabilities in this group:** `capability.dependabot-alerts`, `capability.dependabot-version-updates`, `capability.dependency-review`

---

## Dependabot Alerts

- **id**: capability.dependabot-alerts

Surfaces known vulnerabilities in dependencies with advisory metadata (EPSS, CWE).

### Value Proposal

- **Swift Threat Detection & Prioritization** - Surfaces known third-party vulnerabilities the moment they are discovered, with rich advisory metadata to prioritise remediation.
- **Unified Supply-Chain Visibility** - Unifies the view of supply-chain vulnerabilities across the repository and all projects in an organization, including those in private repos, and provides a single source of truth for security teams.

### Prestaged content

- `content.axios-vuln` — axios 1.8.1 (CVE-2025-27152) in `frontend/package.json`.
- `content.vulnerable-action` — `tj-actions/branch-names@v8.2.0` (CVE-2025-54416) via patch-set.

### Shown in walkthroughs

- `walkthrough.ghas.dependabot-existing-vulns`
- `walkthrough.ghas.dependabot-vulnerable-action`

## Dependabot Version Updates

- **id**: capability.dependabot-version-updates

Automated pull requests that update outdated dependencies and base images.

### Value Proposal

- **Decrease Mental Load & Toil work** - Updates are toil work which dependabot removes entirely, decreasing the mental load of developers and security teams, and allowing them to focus on higher-value work.
- **Native GitHub Experience** - Dependabot is built into GitHub, surfacing PRs and alerts in the same place as other code changes, and integrates with existing workflows for review, validation, and merge.

### Prestaged content

- `content.outdated-alpine` — outdated Alpine versions in `frontend/Dockerfile` and API Dockerfiles.

## Dependency Review

- **id**: capability.dependency-review

A required workflow that checks dependency changes in a PR for vulnerabilities and license violations and blocks the merge.

### Value Proposal

- **Shift Supply-Chain Security Left** - Dependency Review prevents developers from introducing supply-chain vulnerabilities early and as a standard part of the PR review process, rather than relying on security teams to triage and remediate after the fact.

### Prestaged content

- `content.tos-download-pr` — PR introducing `ua-parser-js` (AGPL-3.0).
- `content.dependency-review-workflow` — required "Dependency Review" workflow.

### Shown in walkthroughs

- `walkthrough.ghas.dependency-review-license`
