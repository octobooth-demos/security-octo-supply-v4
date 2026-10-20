# Code Scanning

- **id**: area.ghas.code-scanning
- **product**: GitHub Advanced Security (`product.ghas`)

**Capabilities in this group:** `capability.code-scanning-codeql`, `capability.copilot-autofix`, `capability.ai-code-scanning`, `capability.github-mcp-security-scanning`, `capability.security-campaigns`

---

## CodeQL

- **id**: capability.code-scanning-codeql

Static analysis that detects vulnerabilities in existing code and in pull requests, with default and advanced setups.

### Value Proposal

- **Early Vulnerability Detection:** GitHub Code Scanning helps developers prevent vulnerabilities by detecting them early in the development process, improving code security and developer experience.
- **Semantic Code Analysis with CodeQL:** It uses CodeQL’s semantic analysis to precisely detect vulnerabilities, track data flow, and reduce false positives, finding issues other tools may miss.
- **Centralized Security Visibility:** The solution provides a unified view of active repositories, alerts, and vulnerability types, enabling prioritization and tracking of remediation progress across the organization.

### Prestaged content

- `content.codeql-nodejs` / `content.codeql-python` / `content.codeql-java` — "Query built from user-controlled sources" (SQL injection), per backend.
- `content.tos-download-pr` — PR carrying "Uncontrolled data used in path expression" and "Missing rate limiting" alerts.
- `content.order-status-prompt` — prompt that makes Copilot replicate the `delivery.ts` vulnerability on `/order/status`.

### Shown in walkthroughs

- `walkthrough.copilot.code-review-demo-flow`
- `walkthrough.copilot.application-security`
- `walkthrough.ghas.codeql-past-vulnerabilities`
- `walkthrough.ghas.codeql-pr-protection`
- `walkthrough.ghas.codeql-live-code`
- `walkthrough.ghas.codeql-advanced-setup`
- `walkthrough.ghas.cca-uses-codeql`
- `walkthrough.ghas.assign-codeql-to-cca`

## Copilot Autofix

- **id**: capability.copilot-autofix

AI-generated remediations for code scanning alerts, built into the platform and surfaced naturally at the PR.

### Value Proposal

- Autofix is built into the platform using Copilot — it doesn't just flag the path/data-flow, it proposes the fix.
- Becomes part of the developer workflow naturally at the PR.

### Prestaged content

- `content.codeql-nodejs` (and per-backend equivalents), `content.tos-download-pr` — alerts with available autofixes.

### Shown in walkthroughs

- `walkthrough.code-quality.findings-and-fixes`
- `walkthrough.copilot.application-security`
- `walkthrough.ghas.codeql-past-vulnerabilities`
- `walkthrough.ghas.codeql-pr-protection`
- `walkthrough.ghas.codeql-live-code`
- `walkthrough.ghas.ai-code-scanning`
- `walkthrough.ghas.assign-codeql-to-cca`

## AI Code Scanning (Preview)

- **id**: capability.ai-code-scanning

AI-powered code scanning that surfaces findings beyond traditional CodeQL rules, inline in PRs (works best with the PHP backend).

### Value Proposal

- Surfaces security findings in programming languages which are not natively supported by Code-Scanning and its CodeQL rules, expanding our security offering.

### Prestaged content

- `content.tos-download-pr` — PR reviewed by the "Code scanning AI findings on PR" workflow.
- `content.backends` — selectable backend implementations (Node.js, Python, Java, PHP, .NET); PHP yields the best AI Code Scanning results.

### Shown in walkthroughs

- `walkthrough.ghas.ai-code-scanning`

## GitHub MCP Security Scanning

- **id**: capability.github-mcp-security-scanning

The GitHub Remote MCP Server's security toolsets (dependency + secret scanning) brought into Copilot Agent mode / CLI for pre-commit checks.

### Value Proposal

- Security findings are most valuable while developers are still editing — before CI or PR checks become the first line of defense.
- Identify a vulnerable dependency change and recommend a safer version against the Advisory Database without pushing first.
- Find exposed credentials in local changes (file + line) before commit, keeping secrets out of Git history.
- Keeps security feedback in the same chat-driven workflow where code is being changed.

### Prestaged content

- `content.inject-secrets-patch` — patch-set "GHAS: Inject Secrets" + `logs/debug.log`.
- `content.advanced-security-skill` — `advanced-security@copilot-plugins`; toolsets `dependabot`, `secret_protection`.

### Shown in walkthroughs

- `walkthrough.copilot.mcp-dependency-scanning`
- `walkthrough.copilot.mcp-secret-scanning`
- `walkthrough.ghas.mcp-secret-scanning`

## Security Campaigns

- **id**: capability.security-campaigns

Bulk organization of code scanning alerts into a campaign for coordinated remediation, including assignment to Coding Agents.

### Value Proposal

- Allows to bring focus into cleaning-up motions by limitting the scope of alerts
- Creates a natively integrated collaboration surfce between security-teams and developers
- Speeds up remediation by allowing to assign alerts to Coding Agents for automatic fixes

### Prestaged content

- `content.codeql-nodejs`, `content.codeql-python`, `content.codeql-java`, `content.workflow-permissions-alert` — main-branch CodeQL alerts grouped via Code Scanning filters.

### Shown in walkthroughs

- `walkthrough.ghas.assign-codeql-to-cca`
