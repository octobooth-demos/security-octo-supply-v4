# Prestaged Content (Inventory)

**Prestaged Content** is an atomic, pre-baked artifact living in the OctoCAT Supply demo environment — a PR, issue, security alert, patch set, agent, workflow, design, or governance object. It is one of the four primitives in the demo model:

> **Capability** · **Prestaged Content** · **Scenario** · **Flow**

Each item has a `content.*` id and **showcases** one or more [capabilities](./capabilities/README.md). The **Showcases** links point to the capability group file that the item is used to demonstrate.

## Pull Requests & Branches

### Feature: Add ToS Download

- **id**: `content.tos-download-branch`
- **type**: branch
- **what**: `feature-add-tos-download` branch — implements Terms of Service download; the source branch for the pre-created ToS Download PR (`content.tos-download-pr`) and usable standalone (e.g. compliance assessment in Copilot Spaces).
- **showcases**: [`capability.copilot-spaces`](./capabilities/copilot-spaces.md)

### Feature: Add Cart Page

- **id**: `content.cart-page-branch`
- **type**: branch
- **what**: `feature-add-cart-page` branch — a pre-implemented shopping-cart frontend, offered as a ready alternative for demos that need a human-authored branch/PR (e.g. Copilot Group Changes).
- **showcases**: [`capability.copilot-group-changes`](./capabilities/copilot-code-review.md)

### Feature: Add ToS Download

- **id**: `content.tos-download-pr`
- **type**: pull-request
- **what**: Pre-created PR containing most of the review-findings GitHub offers - failing CI/CD checks, CodeQL- and Code Quality findings, Copilot Code Review comments, Dependency review alerts - packed on purpose to show it all.
- **showcases**: [`capability.agent-automations`](./capabilities/copilot-ide.md), [`capability.agent-merge`](./capabilities/copilot-ide.md), [`capability.ai-code-scanning`](./capabilities/code-scanning.md), [`capability.code-quality`](./capabilities/code-quality.md), [`capability.code-scanning-codeql`](./capabilities/code-scanning.md), [`capability.copilot-autofix`](./capabilities/code-scanning.md), [`capability.copilot-code-review`](./capabilities/copilot-code-review.md), [`capability.copilot-group-changes`](./capabilities/copilot-code-review.md), [`capability.dependency-review`](./capabilities/dependabot.md), [`capability.required-workflows`](./capabilities/actions.md)

### Codespaces Configuration

- **id**: `content.devcontainer-config`
- **type**: file
- **what**: Dev container configuration at `.devcontainer/devcontainer.json` enabling instant cloud-hosted development environments
- **showcases**: [`capability.codespaces`](./capabilities/codespaces.md)

## Issues & Epics

### Pre-seeded issues

- **id**: `content.seed-issues`
- **type**: issue
- **what**: issues #3,#4,#9,#10,#14 with realistic titles and pre-set field values, showcasing a typically in-progress project.
- **showcases**: [`capability.issue-fields`](./capabilities/issues-and-projects.md)

### Compliance Requirements

- **id**: `content.compliance-epic`
- **type**: issue
- **what**: "Compliance Requirements" epic with sub-issues.
- **showcases**: [`capability.issues`](./capabilities/issues-and-projects.md)

### Improve test coverage for API

- **id**: `content.improve-api-test-coverage-issue`
- **type**: issue
- **what**: "Improve test coverage for API" issue, pre-assignable to CCA.
- **showcases**: [`capability.copilot-agent-mode`](./capabilities/copilot-ide.md), [`capability.copilot-cli`](./capabilities/copilot-cli.md), [`capability.copilot-coding-agent`](./capabilities/copilot-ide.md)

### Allow downloading our terms and conditions

- **id**: `content.tos-issue`
- **type**: issue
- **what**: "Allow downloading our terms and conditions" linked to `content.tos-download-pr`.
- **showcases**: [`capability.issues`](./capabilities/issues-and-projects.md)

### Show product stock levels and low-stock warnings

- **id**: `content.product-stock-levels-issue`
- **type**: issue
- **what**: Pre-seeded feature issue describing database, API, and frontend work to implement in that order; use it to start a Copilot App orchestration session.
- **showcases**: [`capability.github-copilot-app`](./capabilities/copilot-app.md), [`capability.github-pull-request-stacks`](./capabilities/pull-requests.md), [`capability.issues`](./capabilities/issues-and-projects.md)

### Persist product stock quantities and seed demo inventory

- **id**: `content.product-stock-database-issue`
- **type**: issue
- **what**: Standalone issue for database persistence, migration, and seed data; the bottom PR layer.
- **showcases**: [`capability.github-copilot-app`](./capabilities/copilot-app.md), [`capability.github-pull-request-stacks`](./capabilities/pull-requests.md), [`capability.issues`](./capabilities/issues-and-projects.md)

### Expose product stock quantities through the API

- **id**: `content.product-stock-api-issue`
- **type**: issue
- **what**: Standalone issue for product endpoints, tests, and Swagger documentation; the API PR layer follows the database layer.
- **showcases**: [`capability.github-copilot-app`](./capabilities/copilot-app.md), [`capability.github-pull-request-stacks`](./capabilities/pull-requests.md), [`capability.issues`](./capabilities/issues-and-projects.md)

### Display product stock quantities and availability warnings

- **id**: `content.product-stock-frontend-issue`
- **type**: issue
- **what**: Standalone issue for stock quantities and low-stock/out-of-stock warnings; the frontend PR layer follows the API layer.
- **showcases**: [`capability.github-copilot-app`](./capabilities/copilot-app.md), [`capability.github-pull-request-stacks`](./capabilities/pull-requests.md), [`capability.issues`](./capabilities/issues-and-projects.md)

## Security Alerts

### Dependabot: axios CVE-2025-27152

- **id**: `content.axios-vuln`
- **type**: dependabot-alert
- **what**: axios 1.8.1 (CVE-2025-27152) in `frontend/package.json`.
- **showcases**: [`capability.dependabot-alerts`](./capabilities/dependabot.md)

### Dependabot: outdated Alpine base images

- **id**: `content.outdated-alpine`
- **type**: dependabot-alert
- **what**: outdated Alpine versions in `frontend/Dockerfile` and API Dockerfiles.
- **showcases**: [`capability.dependabot-version-updates`](./capabilities/dependabot.md)

### Secret Scanning: Slack token alert

- **id**: `content.slack-token-alert`
- **type**: secret-scanning-alert
- **what**: leaked Slack API token alert (with extended metadata).
- **showcases**: [`capability.secret-scanning`](./capabilities/secret-scanning.md)

### Dependabot: vulnerable tj-actions/branch-names

- **id**: `content.vulnerable-action`
- **type**: dependabot-alert
- **what**: `tj-actions/branch-names@v8.2.0` (CVE-2025-54416) via patch-set.
- **showcases**: [`capability.actions-allow-list`](./capabilities/governance.md), [`capability.dependabot-alerts`](./capabilities/dependabot.md)

### Code Scanning: workflow-permissions alerts

- **id**: `content.workflow-permissions-alert`
- **type**: codeql-alert
- **what**: alerts grouped via Code Scanning filters.
- **showcases**: [`capability.mission-control`](./capabilities/copilot-ide.md), [`capability.security-campaigns`](./capabilities/code-scanning.md)

## Code Scanning (CodeQL) Findings

> Intentionally vulnerable code seeded so CodeQL Code Scanning raises security alerts. Paths use `api/…` — the selected backend is rendered there in a running instance (template source in `api-nodejs/`, `api-python/`, `api-java/`). The SQL/query-injection alert appears on `main` in every backend and is the one typically assigned to Copilot Cloud Agent or fixed via Copilot Autofix. Path-injection alerts are introduced by the ToS PR (`content.tos-download-branch`). The PHP backend is not CodeQL-scanned in `.octodemo/demo/demo.ts`.

### [Node.js] CodeQL Alerts on the main branch

- **id**: `content.codeql-nodejs`
- **type**: codeql-alert
- **what**: CodeQL security alerts in the Node.js backend on `main`:
  - Uncontrolled command line (critical) — `api/src/routes/delivery.ts:205`
  - Database query built from user-controlled sources (high) — `api/src/db/sqlite.ts:52`
  - Missing rate limiting (high) — `api/src/routes/delivery.ts:195`
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md), [`capability.copilot-coding-agent`](./capabilities/copilot-coding-agent.md), [`capability.copilot-autofix`](./capabilities/code-scanning.md), [`capability.security-campaigns`](./capabilities/code-scanning.md)

### [Python] CodeQL Alerts on the main branch

- **id**: `content.codeql-python`
- **type**: codeql-alert
- **what**: SQL query built from user-controlled sources (high) — `api/src/routes/product.py:38`.
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md), [`capability.copilot-coding-agent`](./capabilities/copilot-coding-agent.md), [`capability.copilot-autofix`](./capabilities/code-scanning.md), [`capability.security-campaigns`](./capabilities/code-scanning.md)

### [Java] CodeQL Alerts on the main branch

- **id**: `content.codeql-java`
- **type**: codeql-alert
- **what**: Query built from user-controlled sources (high) — `api/src/main/java/com/octodemo/octocatsupply/service/ProductService.java:20`.
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md), [`capability.copilot-coding-agent`](./capabilities/copilot-coding-agent.md), [`capability.copilot-autofix`](./capabilities/code-scanning.md), [`capability.security-campaigns`](./capabilities/code-scanning.md)

### [Node.js] CodeQL Alerts in PR "Feature: Add ToS Download"

- **id**: `content.codeql-tos-nodejs`
- **type**: codeql-alert
- **what**: Uncontrolled data used in path expression (high) — `api/src/routes/legal.ts:88`. Introduced by the ToS PR (`content.tos-download-branch`).
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md)

### [Python] CodeQL Alerts in PR "Feature: Add ToS Download"

- **id**: `content.codeql-tos-python`
- **type**: codeql-alert
- **what**: Uncontrolled data used in path expression (high) — `api/src/routes/legal.py:82`. Introduced by the ToS PR (`content.tos-download-branch`).
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md)

### [Java] CodeQL Alerts in PR "Feature: Add ToS Download"

- **id**: `content.codeql-tos-java`
- **type**: codeql-alert
- **what**: Uncontrolled data used in path expression (high) — `api/src/main/java/com/octodemo/octocatsupply/controller/LegalController.java:95`. Introduced by the ToS PR (`content.tos-download-branch`).
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md)

## Code Quality Findings

### Code Quality Insights View

- **id**: `content.code-quality-insights-view`
- **type**: github-policies-and-settings
- **what**: Code Quality enabled on the demo repository with a populated insights dashboard showing quality grades and a category breakdown derived from the seeded findings.
- **showcases**: [`capability.code-quality-insights-repo`](./capabilities/code-quality.md), [`capability.code-quality-insights-org`](./capabilities/code-quality.md)

### Code Coverage CI Workflows

- **id**: `content.code-coverage-ci`
- **type**: actions-workflow
- **what**: CI workflows (`ci-nodejs.yml`, `ci-java.yml`, `ci-python.yml`, `ci-php.yml`) that run the backend tests, generate Cobertura coverage reports through test-framework configuration (Vitest, JaCoCo + ReportGenerator conversion, pytest-cov, PHPUnit), and upload them with `actions/upload-code-coverage`.
- **showcases**: [`capability.code-coverage`](./capabilities/code-quality.md)

### [Frontend] Code Quality Findings on the main branch

- **id**: `content.code-quality-frontend`
- **type**: codeql-alert
- **what**: Inconsistent direction of for loop (error) — `frontend/src/components/entity/product/Products.tsx:40`, `frontend/src/components/admin/AdminProducts.tsx:51`. Shared TypeScript findings in the frontend; surface under every backend that scans `javascript-typescript` (Node.js, Python, Java).
- **showcases**: [`capability.code-quality`](./capabilities/code-quality.md)

### [Node.js] Code Quality Findings on the main branch

- **id**: `content.code-quality-nodejs`
- **type**: codeql-alert
- **what**: TypeScript findings in the Node.js backend on `main`:
  - Property access on null or undefined (error) — `api/src/routes/headquarters.ts:218`
  - Inconsistent use of `new` (warning) — `api/src/routes/headquarters.ts:296`
  - Misleading indentation after control statement (warning) — `api/src/routes/supplier.ts:224`, `api/src/routes/headquarters.ts:334`
  - Unreachable statement (warning) — `api/src/routes/supplier.ts:226`, `api/src/routes/headquarters.ts:335`
  - Plus the shared `content.code-quality-frontend` findings.
- **showcases**: [`capability.code-quality`](./capabilities/code-quality.md)

### [Python] Code Quality Findings on the main branch

- **id**: `content.code-quality-python`
- **type**: codeql-alert
- **what**: Python findings in the Python backend on `main`:
  - Iterator does not return self from `__iter__` (error) — `api/src/utils/errors.py:32`
  - Missing call to superclass `__init__` (error) — `api/src/models/product.py:48`
  - Asserting a tuple (error) — `api/src/utils/sql.py:65`
  - Wrong number of arguments for format (error) — `api/src/utils/sql.py:81`
  - Redundant assignment (error) — `api/src/utils/sql.py:109`
  - Unreachable code (warning) — `api/src/utils/errors.py:91`, `:98`, `:109`
  - Raising `NotImplemented` (warning) — `api/src/utils/errors.py:85`
  - Comparison of identical values (warning) — `api/src/utils/sql.py:72`
  - Unused argument in a formatting call (warning) — `api/src/utils/sql.py:84`
  - Inconsistent equality and hashing (warning) — `api/src/models/supplier.py:38`
  - File is not always closed (warning) — `api/src/repositories/suppliers_repo.py:139`
  - Unused import (note) — `api/src/repositories/suppliers_repo.py:2-4`
  - Commented-out code (note) — `api/src/repositories/suppliers_repo.py:11`
  - Unused local variable (note) — `api/src/utils/errors.py:97`, `api/src/repositories/products_repo.py:96`
  - Testing equality to None (note) — `api/src/utils/sql.py:61`
  - Explicit returns mixed with implicit (fall-through) returns (note) — `api/src/routes/supplier.py:82`
  - Plus the shared `content.code-quality-frontend` findings.
- **showcases**: [`capability.code-quality`](./capabilities/code-quality.md)

### [Java] Code Quality Findings on the main branch

- **id**: `content.code-quality-java`
- **type**: codeql-alert
- **what**: Java findings in the Java backend on `main` (paths under `api/src/main/java/com/octodemo/octocatsupply/controller/`):
  - Container contents are never initialized (error) — `DeliveryController.java:36`
  - Container contents are never accessed (error) — `DeliveryController.java:50`
  - Iterator implementing Iterable (warning) — `BranchController.java:37`
  - Inefficient empty string test (note) — `ProductController.java:42`
  - Missing catch of NumberFormatException (note) — `ProductController.java:63`
  - Plus the shared `content.code-quality-frontend` findings.
- **showcases**: [`capability.code-quality`](./capabilities/code-quality.md)

### [Node.js] Code Quality Findings in PR "Feature: Add ToS Download"

- **id**: `content.code-quality-tos-nodejs`
- **type**: codeql-alert
- **what**: TypeScript findings introduced by the ToS PR (`content.tos-download-branch`) in the Node.js backend:
  - Unreachable statement (warning) — `api/src/repositories/userDetailsRepo.ts:58-61`
  - Identical operands (warning) — `api/src/repositories/userDetailsRepo.ts:69`
  - Unused variable, import, function or class (note) — `api/src/routes/legal.ts:34`
- **showcases**: [`capability.code-quality`](./capabilities/code-quality.md)

### [Python] Code Quality Findings in PR "Feature: Add ToS Download"

- **id**: `content.code-quality-tos-python`
- **type**: codeql-alert
- **what**: Python findings introduced by the ToS PR (`content.tos-download-branch`) in `api/src/routes/legal.py`:
  - Modification of parameter with default (error) — `api/src/routes/legal.py:129-134`
  - Returning tuples with varying lengths (note) — `api/src/routes/legal.py:147`
  - Testing equality to None (note) — `api/src/routes/legal.py:136`
  - Unused import (note) — `api/src/routes/legal.py:1`, `:6`
- **showcases**: [`capability.code-quality`](./capabilities/code-quality.md)

## Committed Secrets

### Leaked RSA key api/ca.key

- **id**: `content.ca-key-secret`
- **type**: secret-scanning-alert
- **what**: `api/ca.key` (RSA token).
- **showcases**: [`capability.secret-scanning`](./capabilities/secret-scanning.md)

## Patch Sets

### Custom instructions patch

- **id**: `content.custom-instructions-patch`
- **type**: patch-set
- **what**: "Copilot: Custom Instructions" patch set.
- **showcases**: [`capability.custom-instructions`](./capabilities/copilot-general.md)

### Inject secrets patch

- **id**: `content.inject-secrets-patch`
- **type**: patch-set
- **what**: patch-set "GHAS: Inject Secrets" adding an Anthropic API key to `logs/debug.log`.
- **showcases**: [`capability.github-mcp-security-scanning`](./capabilities/code-scanning.md), [`capability.push-protection`](./capabilities/secret-scanning.md)

### Self healing patch

- **id**: `content.self-healing-patch`
- **type**: patch-set
- **what**: patch-set "Copilot: Self-Healing DevOps" that breaks a test to trigger auto-remediation.
- **showcases**: [`capability.copilot-coding-agent`](./capabilities/copilot-ide.md)

## Custom Agents

### Api coverage looper agent

- **id**: `content.api-coverage-looper-agent`
- **type**: custom-agent
- **what**: `.github/agents/api-coverage-looper.agent.md` (fleet/looper).
- **showcases**: [`capability.copilot-cli`](./capabilities/copilot-cli.md), [`capability.copilot-subagents`](./capabilities/copilot-general.md), [`capability.ralph-loop`](./capabilities/copilot-cli.md)

### Api specialist agent

- **id**: `content.api-specialist-agent`
- **type**: custom-agent
- **what**: `.github/agents/api-specialist.md`.
- **showcases**: [`capability.custom-agents`](./capabilities/copilot-general.md)

### Api test writer agent

- **id**: `content.api-test-writer-agent`
- **type**: custom-agent
- **what**: `.github/agents/api-test-writer.agent.md`.
- **showcases**: [`capability.copilot-subagents`](./capabilities/copilot-general.md), [`capability.ralph-loop`](./capabilities/copilot-cli.md)

### Bdd specialist agent

- **id**: `content.bdd-specialist-agent`
- **type**: custom-agent
- **what**: `.github/agents/bdd-specialist.md`.
- **showcases**: [`capability.custom-agents`](./capabilities/copilot-general.md)

### Tdd agents

- **id**: `content.tdd-agents`
- **type**: custom-agent
- **what**: `.github/agents/tdd-red|green|blue.agent.md`.
- **showcases**: [`capability.custom-agents`](./capabilities/copilot-general.md)

## Agent Skills

### Advanced security skill

- **id**: `content.advanced-security-skill`
- **type**: skill
- **what**: `advanced-security@copilot-plugins`; toolsets `dependabot`, `secret_protection`.
- **showcases**: [`capability.github-mcp-security-scanning`](./capabilities/code-scanning.md)

### Api endpoint skill

- **id**: `content.api-endpoint-skill`
- **type**: skill
- **what**: `.github/skills/api-endpoint/SKILL.md` (+ references).
- **showcases**: [`capability.agent-skills`](./capabilities/copilot-general.md)

### Code review skill

- **id**: `content.code-review-skill`
- **type**: skill
- **what**: `.github/skills/code-review/SKILL.md`.
- **showcases**: [`capability.copilot-code-review`](./capabilities/copilot-code-review.md)

### Web design guidelines skill

- **id**: `content.web-design-guidelines-skill`
- **type**: skill
- **what**: third-party `vercel-labs/agent-skills` web-design-guidelines.
- **showcases**: [`capability.agent-skills`](./capabilities/copilot-general.md)

## Custom Prompts

### Demo prompts

- **id**: `content.demo-prompts`
- **type**: custom-prompt
- **what**: `.github/prompts/demo-cart-page.prompt.md`, `demo-unit-test-coverage.prompt.md`, `refine-prompt`, `demo-cca-parallel`.
- **showcases**: [`capability.custom-prompts`](./capabilities/copilot-general.md)

### Handoff prompts

- **id**: `content.handoff-prompts`
- **type**: custom-prompt
- **what**: `.github/prompts/handoff*.prompt.md`.
- **showcases**: [`capability.custom-prompts`](./capabilities/copilot-general.md)

### Order status prompt

- **id**: `content.order-status-prompt`
- **type**: custom-prompt
- **what**: prompt that makes Copilot replicate the `delivery.ts` vulnerability on `/order/status`.
- **showcases**: [`capability.code-scanning-codeql`](./capabilities/code-scanning.md)

## Instructions & Knowledge

### Api instructions

- **id**: `content.api-instructions`
- **type**: file
- **what**: `.github/instructions/api.instructions.md`.
- **showcases**: [`capability.copilot-code-review`](./capabilities/copilot-code-review.md)

### Copilot instructions

- **id**: `content.copilot-instructions`
- **type**: file
- **what**: `.github/copilot-instructions.md`.
- **showcases**: [`capability.custom-instructions`](./capabilities/copilot-general.md)

### Tao lib docs

- **id**: `content.tao-lib-docs`
- **type**: file
- **what**: `docs/tao.md` fictional internal library.
- **showcases**: [`capability.custom-instructions`](./capabilities/copilot-general.md)

## Agentic Workflows (.md)

### Auto analyze failures workflow

- **id**: `content.auto-analyze-failures-workflow`
- **type**: agentic-workflow
- **what**: `.github/workflows/auto-analyze-failures.md`.
- **showcases**: [`capability.agentic-workflows`](./capabilities/agentic-workflows.md)

### Daily activity workflow

- **id**: `content.daily-activity-workflow`
- **type**: agentic-workflow
- **what**: `.github/workflows/daily-repo-activity-summary.md`.
- **showcases**: [`capability.agentic-workflows`](./capabilities/agentic-workflows.md)

### Issue triage suggestions workflow

- **id**: `content.issue-triage-suggestions-workflow`
- **type**: agentic-workflow
- **what**: `.github/workflows/issue-triage-suggestions.md`.
- **showcases**: [`capability.agentic-workflows`](./capabilities/agentic-workflows.md), [`capability.issue-agent-automation-controls`](./capabilities/issues-and-projects.md)

### Pr doc tests workflow

- **id**: `content.pr-doc-tests-workflow`
- **type**: agentic-workflow
- **what**: `.github/workflows/pr-doc-tests-check.md`.
- **showcases**: [`capability.agentic-workflows`](./capabilities/agentic-workflows.md)

## CI / CD Workflows (.yml)

### Attestation workflow

- **id**: `content.attestation-workflow`
- **type**: actions-workflow
- **what**: SBOM (SPDX 2.3) + SLSA provenance via `build-publish-containers.yml`.
- **showcases**: [`capability.artifact-attestations`](./capabilities/governance.md)

### Build and publish workflow

- **id**: `content.build-and-publish-workflow`
- **type**: actions-workflow
- **what**: `.github/workflows/build-and-publish.yml` calling the central `build-publish-containers.yml`.
- **showcases**: [`capability.reusable-workflows`](./capabilities/actions.md)

### Dependency review workflow

- **id**: `content.dependency-review-workflow`
- **type**: actions-workflow
- **what**: Required workflow defined centrally in the [`od-octocat-supply-workflows`](https://github.com/octodemo-framework/content_octocat_supply_workflows) repository at `.github/workflows/dependency-review.yml`.
- **showcases**: [`capability.dependency-review`](./capabilities/dependabot.md), [`capability.required-workflows`](./capabilities/actions.md)

### Deploy workflow

- **id**: `content.deploy-workflow`
- **type**: actions-workflow
- **what**: `.github/workflows/deploy.yml` (storage/deployment records).
- **showcases**: [`capability.virtual-registry`](./capabilities/governance.md)

## Chatbot Resources

### Chatbot system prompt

- **id**: `content.chatbot-system-prompt`
- **type**: file
- **what**: `demo/resources/chatbot/system-prompt.md` (professional tone) and `system-prompt-casual.md` (cat-pun variant) — pasted into the Foundry agent Instructions field.
- **showcases**: [`capability.microsoft-foundry`](./capabilities/microsoft-foundry.md)

### Chatbot agent grounding

- **id**: `content.chatbot-agent-grounding`
- **type**: file
- **what**: `demo/resources/chatbot/agent-grounding.md` — full product catalog, specs, policies, FAQs, and recommendation logic uploaded as a Foundry File Search knowledge base.
- **showcases**: [`capability.microsoft-foundry`](./capabilities/microsoft-foundry.md)

## Design Mockups

### Cart design

- **id**: `content.cart-design`
- **type**: file
- **what**: `docs/design/cart.png`.
- **showcases**: [`capability.copilot-vision`](./capabilities/copilot-general.md)

### Dashboard mockup

- **id**: `content.dashboard-mockup`
- **type**: file
- **what**: `docs/design/dashboard-v1.png` annotated mockup used with `/create-issue`.
- **showcases**: [`capability.copilot-vision`](./capabilities/copilot-general.md)

### Order tracking mockup

- **id**: `content.order-tracking-mockup`
- **type**: file
- **what**: `docs/design/order-tracking-prototype.png`.
- **showcases**: [`capability.copilot-vision`](./capabilities/copilot-general.md)

## Repo Configuration

### Agent hooks config

- **id**: `content.agent-hooks-config`
- **type**: file
- **what**: `.github/hooks/hooks.json` + `checkpoint-commit.sh`.
- **showcases**: [`capability.agent-hooks`](./capabilities/copilot-general.md)

### Mcp config

- **id**: `content.mcp-config`
- **type**: file
- **what**: `.vscode/mcp.json` (Playwright, github-local, github-remote).
- **showcases**: [`capability.mcp-servers`](./capabilities/copilot-general.md)

## Org / Enterprise Governance Objects

### Custom agent ruleset

- **id**: `content.custom-agent-ruleset`
- **type**: ruleset
- **what**: custom-agent ruleset in evaluate mode; `.github/agents/*.md` path.
- **showcases**: [`capability.custom-agent-rulesets`](./capabilities/governance.md)

### Enterprise ai controls

- **id**: `content.enterprise-ai-controls`
- **type**: github-policies-and-settings
- **what**: `github.com/enterprises/octodemo` AI Controls (installed agents, Agent Sessions, audit log, MCP policy).
- **showcases**: [`capability.ai-controls`](./capabilities/governance.md)

### Mcp allowlist

- **id**: `content.mcp-allowlist`
- **type**: github-policies-and-settings
- **what**: third-party MCP registry URL configured in enterprise AI Controls.
- **showcases**: [`capability.mcp-policy-controls`](./capabilities/governance.md)

### Octocat project

- **id**: `content.octocat-project`
- **type**: project
- **what**: project board with Status/Priority/Sprint/Estimate/Squad fields and saved views.
- **showcases**: [`capability.project-automations`](./capabilities/issues-and-projects.md), [`capability.projects`](./capabilities/issues-and-projects.md)

### Octocat ruleset

- **id**: `content.octocat-ruleset`
- **type**: ruleset
- **what**: org "OD OctoCAT Supply Ruleset".
- **showcases**: [`capability.repository-rulesets`](./capabilities/governance.md), [`capability.required-workflows`](./capabilities/actions.md)

### Org issue fields

- **id**: `content.org-issue-fields`
- **type**: project
- **what**: Severity (SEV1-4), Root Cause Category, Affected Users.
- **showcases**: [`capability.issue-fields`](./capabilities/issues-and-projects.md)

### Risk tier property

- **id**: `content.risk-tier-property`
- **type**: ruleset
- **what**: custom property `od_octocat_supply_risk_tier=high`.
- **showcases**: [`capability.custom-properties`](./capabilities/governance.md), [`capability.repository-rulesets`](./capabilities/governance.md)

## Copilot Plugins & Extensibility

### Plugin marketplace

- **id**: `content.plugin-marketplace`
- **type**: repository
- **what**: Octodemo Copilot Plugin Marketplace (`demo-copilot-plugin-marketplace`).
- **showcases**: [`capability.plugins-marketplace`](./capabilities/copilot-general.md)

### Accessibility plugin

- **id**: `content.accessibility-plugin`
- **type**: custom-agent
- **what**: Accessibility plugin, installable from the `demo-copilot-plugin-marketplace` repository.
- **showcases**: [`capability.plugins-marketplace`](./capabilities/copilot-general.md)

## Copilot Spaces

### Compliance space

- **id**: `content.compliance-space`
- **type**: copilot-space
- **what**: "OD OctoCAT Supply Compliance Docs" space backed by `od-octocat-supply-compliance-docs`.
- **showcases**: [`capability.agent-automations`](./capabilities/copilot-ide.md), [`capability.copilot-spaces`](./capabilities/copilot-spaces.md)

## Canvases

### Issue readiness canvas

- **id**: `content.issue-readiness-canvas`
- **type**: custom-agent
- **what**: issue-readiness-analyzer canvas.
- **showcases**: [`capability.copilot-canvases`](./capabilities/copilot-app.md)

## Running App & Runtime

### Backend implementations

- **id**: `content.backends`
- **type**: file
- **what**: selectable backend implementations — Node.js, Python, Java, PHP, and .NET. Not showcased individually; PHP yields the best AI Code Scanning results.
- **showcases**: [`capability.ai-code-scanning`](./capabilities/code-scanning.md)

## Companion Repositories

### Reusable workflows repository

- **id**: `content.workflows-repo`
- **type**: repository
- **repo-name**: `od-octocat-supply-workflows`
- **what**: Central repository hosting shared workflows: `build-publish-containers.yml` (reusable build/publish + SLSA provenance) and `dependency-review.yml` (required workflow enforced via org ruleset). Also serves as the attestation signer repo verified by `demo/resources/verify-attestation.sh`.
- **showcases**: [`capability.reusable-workflows`](./capabilities/actions.md), [`capability.required-workflows`](./capabilities/actions.md), [`capability.artifact-attestations`](./capabilities/governance.md), [`capability.repository-rulesets`](./capabilities/governance.md)

### Compliance docs repository

- **id**: `content.compliance-repo`
- **type**: repository
- **repo-name**: `od-octocat-supply-compliance-docs`
- **what**: Security, privacy, and governance framework documents. Backs the "OD OctoCAT Supply Compliance Docs" Copilot Space (`content.compliance-space`).
- **showcases**: [`capability.copilot-spaces`](./capabilities/copilot-spaces.md)

## Verification & Helper Assets

### Verify attestation assets

- **id**: `content.verify-attestation-assets`
- **type**: file
- **what**: `demo/resources/verify-attestation.sh`, `.github/actions/verify-container-attestations`.
- **showcases**: [`capability.artifact-attestations`](./capabilities/governance.md)
