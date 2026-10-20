# Governance

- **id**: area.governance.repository
- **product**: GitHub Enterprise & Governance (`product.governance`)

**Capabilities in this group:** `capability.repository-rulesets`, `capability.custom-properties`, `capability.actions-allow-list`, `capability.artifact-attestations`, `capability.virtual-registry`, `capability.ai-controls`, `capability.custom-agent-rulesets`, `capability.mcp-policy-controls`

---

## Repository Rulesets

- **id**: capability.repository-rulesets

Branch/repo rules (PRs required, code scanning, required workflows) applied dynamically, including by custom-property metadata.

### Value Proposal

- **Enterprise-Scale Governance:** Apply consistent policies in a single place, applied across all repositories, ensuring compliance and security.
- **Flexible and Dynamic Policy Application:** Use custom properties or other filters to dynamically apply rulesets based on repository metadata, allowing for tailored governance that adapts to different project needs.
- **Bypass and Override Capabilities:** Allow for guided exceptions or overrides in specific cases, providing flexibility while maintaining overall governance standards.
- **Insightful Reporting and Auditing:** Gain visibility into policy enforcement and compliance status across the organization, enabling proactive management and auditing of repository governance.

### Prestaged content

- `content.octocat-ruleset` — org "OD OctoCAT Supply Ruleset".
- `content.risk-tier-property` — custom property `od_octocat_supply_risk_tier=high`.

### Shown in walkthroughs

- `walkthrough.actions.required-workflows`
- `walkthrough.governance.rulesets-custom-properties`

## Custom Properties

- **id**: capability.custom-properties

Repository metadata used to classify repos and drive dynamic policy (e.g. which rulesets apply).

### Value Proposal

- **Dynamic & Flexible Repository Metadata:** Custom properties allow organizations to classify repositories based on specific criteria, enabling more granular control over governance policies.

### Prestaged content

- `content.risk-tier-property` — `od_octocat_supply_risk_tier=high` on demo repos.

### Shown in walkthroughs

- `walkthrough.governance.rulesets-custom-properties`

## Actions Allow List

- **id**: capability.actions-allow-list

Repository/org policy that restricts which GitHub Actions may run, blocking unapproved or vulnerable actions.

### Value Proposal

- **Safe & Secure Open Source Action Usage:** Mitigates supply chain risks by preventing the use of unapproved or untrusted actions
- **Improved Governance and Auditability:** Helps with governance and auditability by providing a clear record of allowed actions

### Prestaged content

- `content.vulnerable-action` — blocked `tj-actions/branch-names@v8.2.0`.

## Artifact Attestations

- **id**: capability.artifact-attestations

Cryptographically verifiable build provenance and SBOMs generated in Actions and verified before deployment.

### Value Proposal

- Provide verifiable, tamper-proof build metadata to improve security and compliance.
- Offer a simple way to confirm an artifact's integrity before deployment.

### Prestaged content

- `content.attestation-workflow` — SBOM (SPDX 2.3) + SLSA provenance via `build-publish-containers.yml`.
- `content.verify-attestation-assets` — `demo/resources/verify-attestation.sh`, `.github/actions/verify-container-attestations`.

### Shown in walkthroughs

- `walkthrough.actions.attestations-create`
- `walkthrough.actions.attestations-verify`

## Virtual Registry / Linked Artifacts

- **id**: capability.virtual-registry

Links published artifacts to deployment context so security alerts can be prioritized by real production exposure.

### Value Proposal

- Visibility and traceability into which artifacts are deployed where, and which versions are in production, helps with compliance and auditing.
- Associating production/deployment context with alerts prioritises by real risk, reducing noise and focusing on what's exposed.

### Prestaged content

- `content.deploy-workflow` — `.github/workflows/deploy.yml` (storage/deployment records).

### Shown in walkthroughs

- `walkthrough.actions.virtual-registry`

## Copilot AI Controls (Control Plane)

- **id**: capability.ai-controls

Enterprise control plane unifying Copilot/agent policies, agent sessions, audit logs, and MCP allowlists.

### Value Proposal

- **Accelerate Innovation, Minimize Risk:** The Agent Control Plane empowers teams to move quickly with agentic automation, while enterprise owners retain control over policy, configuration, and oversight.
- **Balance Developer Freedom with Governance:** When paired with Mission Control, enterprises achieve the ideal balance—empowering developers to innovate while maintaining enterprise-grade security, compliance, and operational control.
- **Future-Ready Platform:** Lays the foundation for scaling agentic activity to thousands of specialized agents, enabling organizations to confidently adopt autonomous workflows and maximize ROI.

### Prestaged content

- `content.enterprise-ai-controls` — `github.com/enterprises/octodemo` AI Controls (installed agents, Agent Sessions, audit log, MCP policy).

### Shown in walkthroughs

- `walkthrough.governance.ai-controls-github-agents`
- `walkthrough.governance.ai-controls-copilot`

## Custom Agent Rulesets

- **id**: capability.custom-agent-rulesets

Enterprise rulesets that standardize and control where custom agents may be generated and used.

### Value Proposal

- Standardize custom agents across the enterprise with centralized configuration.
- Control custom-agent generation via rulesets — allow specific orgs/repos or disable entirely.

### Prestaged content

- `content.custom-agent-ruleset` — custom-agent ruleset in evaluate mode; `.github/agents/*.md` path.

### Shown in walkthroughs

- `walkthrough.governance.ai-controls-custom-agents`

## MCP Policy Controls

- **id**: capability.mcp-policy-controls

Enterprise-wide MCP allowlisting and registry configuration enforced across IDEs.

### Value Proposal

- Set an enterprise MCP allowlist so only validated MCP connections are permitted when developers use agents.
- Centralized policy enforcement across IDEs (VS Code today, GitHub.com coming).

### Prestaged content

- `content.mcp-allowlist` — third-party MCP registry URL configured in enterprise AI Controls.

### Shown in walkthroughs

- `walkthrough.governance.ai-controls-mcp`
