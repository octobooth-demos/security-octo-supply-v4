# Security Overview

- **id**: area.ghas.security-overview
- **product**: GitHub Advanced Security (`product.ghas`)

**Capabilities in this group:** `capability.security-overview-repo`, `capability.security-overview-org`, `capability.security-overview-enterprise`

---

## Repository Security Overview

- **id**: capability.security-overview-repo

Per-repository consolidated view of all active CodeQL, Dependabot, and Secret Scanning alerts on the main branch.

### Value Proposal

- **Developer-Facing Risk Snapshot:** Gives individual repo owners a single security tab to triage all alert types without switching tools.
- **Actionable at the Source:** Surfaced directly in the repository context, making it easy for developers to own and remediate their own risks.
- **Supercharged with AI:** Helps developer in cleanup motions through Copilot Autofix and capabilities to assign alerts to Copilot Cloud Agent for an easy fix.

---

## Organization Security Overview

- **id**: capability.security-overview-org

Org-level dashboard aggregating CodeQL, Dependabot, and Secret Scanning alerts across all repositories, with risk trends and remediation progress.

### Value Proposal

- **Unified Security Visibility:** Single pane of glass across all GHAS alert types for the entire organization, eliminating per-repo navigation.
- **Risk Prioritization:** Filtered views and trend data help security teams identify the most critical exposures and track remediation progress over time.
- **Evidence of Security Posture:** Demonstrate measurable improvement in security posture to auditors and leadership using trend charts and coverage metrics.

---

## Enterprise Security Overview

- **id**: capability.security-overview-enterprise

Enterprise-wide aggregation of security alerts across all organizations, enabling security leaders to track posture, coverage, and remediation at scale.

### Value Proposal

- **Cross-Org Visibility at Scale:** Roll up CodeQL, Dependabot, and Secret Scanning signals across every organization in the enterprise into a single dashboard.
- **Strategic Risk Management:** Identify which organizations or repository clusters carry the highest security debt, enabling targeted remediation investments.
- **Compliance Reporting:** Provide auditors and CISOs with a unified, up-to-date view of security coverage and open vulnerabilities across the entire software estate.
