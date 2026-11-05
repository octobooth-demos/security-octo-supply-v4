# Secret Scanning & Push Protection

- **id**: area.ghas.secret-scanning
- **product**: GitHub Advanced Security (`product.ghas`)

**Capabilities in this group:** `capability.secret-scanning`, `capability.push-protection`

---

## Secret Scanning

- **id**: capability.secret-scanning

Detection of committed credentials across the full Git history, including AI-detected generic secrets, with rich remediation metadata.

### Value Proposal

- **Become more secure:** Prevent, detect, and remediate secret leaks - the number one cause of security incidents in software development.
- **Native Integration:** Secret Protection integrates seamlessly into developer workflows, enabling more secure software development with less disruption to velocity, and it provides tools that enable quick and efficient remediation.
- **Easy Adoption & Standardized Processes:** For security teams, Secret Protection helps eliminate the need to adopt and manage additional tools, offering increased visibility into and alignment with developer processes.
- **Proactive Prevention:** By combining proactive prevention–such as blocking secrets before they are committed–with low false-positive rates, Secret Protection minimizes the risk of unauthorized access to sensitive systems.
- **Enterprise Governance at Scale:** Scans repositories, pull requests, issue comments, wikis, discussions, gists, and Git history to help identify exposed secrets wherever they occur across the development lifecycle.

### Prestaged content

- `content.ca-key-secret` — `api/ca.key` (RSA token).
- `content.slack-token-alert` — leaked Slack API token alert (with extended metadata).

### Shown in walkthroughs

- `walkthrough.copilot.mcp-secret-scanning`
- `walkthrough.ghas.secret-scanning-existing`
- `walkthrough.ghas.secret-scanning-metadata`

## Push Protection

- **id**: capability.push-protection

Blocks commits containing detected secrets before they are pushed.

### Value Proposal

- Prevents accidental secret commits from reaching the remote in the first place.

### Prestaged content

- `content.inject-secrets-patch` — patch-set "GHAS: Inject Secrets" adding an Anthropic API key to `logs/debug.log`.

### Shown in walkthroughs

- `walkthrough.ghas.push-protection`
