# Code Quality

- **id**: area.code-quality.core
- **product**: GitHub Code Quality (`product.code-quality`)

**Capabilities in this group:** `capability.code-quality`, `capability.code-coverage`, `capability.code-quality-insights-repo`, `capability.code-quality-insights-org`

---

## Code Quality

- **id**: capability.code-quality

Automated code-quality analysis with findings surfaced in PRs and fixable via Copilot Autofix.

### Value Proposal

- **Ensure Reliability, Maintainability, and Compliance:** Code Quality gives organizations a single GitHub-native solution to monitor, enforce, and report on code quality and compliance across every repository — helping ensure every line of code, human- or AI-generated, meets the highest standards of reliability, maintainability, and compliance.
- **AI-Powered Backlog Analysis & Autofix**: It integrates AI-powered analysis with CodeQL static analysis on the main branch repository backlog, not in pull requests; PRs surface code-quality findings and automated autofix suggestions to accelerate remediation.
- **Consistent Enforcement & Merge Gates:** Code Quality enables setting rule sets and merge gates to block pull requests that fail quality standards, supporting consistent enforcement across repositories and organizations.
- **Organization-wide Visibility & Governance:** GitHub Code Quality provides organization-wide visibility, governance, and enforcement of code quality standards, helping prevent degradation of maintainability, reliability, and coverage in codebases.
- **Simplified Tooling & Developer Experience:** The product reduces complexity by consolidating code quality tooling into a single GitHub-native solution, improving developer experience by minimizing context switching and providing integrated dashboards and reporting.

### Prestaged content

- `content.tos-download-pr` — PR carrying code-quality findings.
- `content.code-quality-frontend` — shared frontend for-loop-direction errors (surface under every backend).
- `content.code-quality-nodejs` — Node.js backend smells in `api/src/routes/` headquarters & supplier.
- `content.code-quality-python` — Python backend smells across models, repositories, utils, and routes.
- `content.code-quality-java` — Java backend smells in `DeliveryController`, `BranchController`, and `ProductController`.
- `content.code-quality-tos-nodejs` — Node.js findings introduced by the ToS PR (`userDetailsRepo.ts`, `legal.ts`).
- `content.code-quality-tos-python` — Python findings introduced by the ToS PR (`legal.py`).

### Shown in walkthroughs

- `walkthrough.code-quality.findings-and-fixes`
- `walkthrough.code-quality.findings-in-pr`

---

## Code Coverage

- **id**: capability.code-coverage

Test coverage reports uploaded from CI to GitHub Code Quality, shown on pull requests and enforceable through a rule.

### Value Proposal

- **Native Coverage Reporting:** Cobertura reports uploaded with `actions/upload-code-coverage` surface coverage directly in GitHub, replacing third-party services such as Codecov or Coveralls.
- **Coverage on Every Pull Request:** Reviewers see the coverage change against `main` and which changed lines are not covered by tests.
- **Enforceable Minimums:** The `Restrict code coverage` rule can block pull requests that drop below a coverage threshold.
- **All Backends:** Node.js, Java, Python, and PHP CI workflows each upload a report labeled `code-coverage/<backend>-api`; report formats are configured in the test frameworks (Vitest, JaCoCo, pytest-cov, PHPUnit) rather than inline CLI flags.

### Prestaged content

- `content.code-coverage-ci` — CI workflows that generate and upload Cobertura coverage reports.

### Shown in walkthroughs

- `walkthrough.code-quality.pr-coverage`

---

## Repository Code Quality Insights

- **id**: capability.code-quality-insights-repo

Per-repository dashboard surfacing a quality grade and top violations by category — giving developers and tech leads an at-a-glance health snapshot without reviewing individual alerts.

### Value Proposal

- **At-a-glance Quality Health**: A quality grade summarises the overall health of the repository so any stakeholder can understand the current state instantly without reading through individual alerts.
- **Top Issues by Category**: Insights surface the most impactful rule violations by category (reliability, maintainability, security smells), guiding prioritization of technical-debt reduction.

### Prestaged content

- `content.code-quality-insights-view` — Code Quality enabled on the demo repository with a populated insights dashboard.
- `content.code-quality-nodejs` — Node.js findings that contribute to the visible metrics.
- `content.code-quality-python` — Python findings that contribute to the visible metrics.
- `content.code-quality-java` — Java findings that contribute to the visible metrics.
- `content.code-quality-frontend` — Frontend findings that contribute to the visible metrics.

### Shown in walkthroughs

- `walkthrough.code-quality.insights-repo`

---

## Organization Code Quality Insights

- **id**: capability.code-quality-insights-org

Org-level dashboard aggregating code quality grades and metrics across all repositories, enabling engineering leaders to identify high-risk codebases and track remediation at scale.

### Value Proposal

- **Cross-Repository Quality Overview**: Roll up quality grades and top violations across all repositories into a single dashboard, eliminating per-repo navigation for engineering managers.
- **Risk Prioritisation at Scale**: Identify which repositories carry the most technical debt and allocate remediation effort where it matters most.

### Prestaged content

- `content.code-quality-insights-view` — Code Quality enabled on the demo repository; the org-level view aggregates data from this and other repositories.

### Shown in walkthroughs

- `walkthrough.code-quality.insights-org`
