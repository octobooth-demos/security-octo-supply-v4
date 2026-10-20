# GitHub MCP Security Scanning

## Prep

- **Contents:** [MCP config](../../inventory.md) (`content.mcp-config`), [Advanced security skill](../../inventory.md) (`content.advanced-security-skill`)

1. Open this repository in VS Code or Codespaces.
2. Open `.vscode/mcp.json` and confirm the `github-remote` server is configured with the `dependabot` and `secret_protection` toolsets.
3. Install the Advanced Security Copilot plugin skills in the interface you want to demo.
   1. **Agent mode:** Open Copilot Chat and install the `advanced-security@copilot-plugins` plugin from the Copilot plugin picker, or enter:

      ```prompt
      /plugin install advanced-security@copilot-plugins
      ```

   2. **Copilot CLI:** Start the CLI:

      ```bash
      copilot
      ```

      Then enter:

      ```prompt
      /plugin install advanced-security@copilot-plugins
      ```

4. Start only the `github-remote` MCP server:
   1. Open the Command Palette with `Cmd/Ctrl + Shift + P`.
   2. Select `MCP: List servers`.
   3. Select `github-remote` → `Start server`.
   4. Complete the OAuth flow if prompted.
5. Use either **Copilot Chat Agent mode** or **Copilot CLI** for the demo prompts below.

> [!IMPORTANT]
> Use `github-remote` for this walkthrough. Do not start both `github` and `github-remote` at the same time, because Copilot may choose the wrong server.

## Demos

### Demo: Dependency Scanning with GitHub Remote MCP

- **id**: walkthrough.copilot.mcp-dependency-scanning
- **Capabilities:** [MCP Servers](../../capabilities/copilot-general.md#mcp-servers) (`capability.mcp-servers`), [GitHub MCP Security Scanning](../../capabilities/code-scanning.md#github-mcp-security-scanning) (`capability.github-mcp-security-scanning`), Dependabot, [Copilot CLI](../../capabilities/copilot-cli.md#copilot-cli) (`capability.copilot-cli`)
- **Contents:** [MCP config](../../inventory.md) (`content.mcp-config`), [Advanced security skill](../../inventory.md) (`content.advanced-security-skill`)

1. Create a disposable branch or keep the current branch uncommitted.
2. Add a known-vulnerable dependency to the frontend workspace:

   ```bash
   cd frontend
   npm install lodash@4.17.20 --save
   ```

3. In Copilot Chat Agent mode or Copilot CLI, run the dependency scanning skill:

   ```prompt
   /dependency-scanning Use the GitHub Remote MCP dependency scanning tools to scan my current dependency changes for known vulnerabilities. Show the affected package, severity, advisory, and recommended fixed version before I commit.
   ```

4. Show that Copilot invokes the GitHub MCP Dependabot toolset, checks the dependency change against the GitHub Advisory Database, and summarizes the vulnerable package.
5. Ask Copilot to remediate the detected vulnerability:

   ```prompt
   Remediate the detected dependency vulnerability by updating the package to the safest non-vulnerable version. Explain which advisory is fixed and why the new version is safe.
   ```

6. Ask Copilot to scan again to verify the remediation:

   ```prompt
   /dependency-scanning Scan the dependency changes again and confirm whether the vulnerability is resolved.
   ```

7. Show the manifest and lockfile update, but do not merge this demo-only dependency change.

> [!NOTE]
> If Copilot reports that there are no dependency changes, confirm that both `frontend/package.json` and `frontend/package-lock.json` changed after the `npm install` command.

### Demo: Secret Scanning with GitHub Remote MCP

- **id**: walkthrough.copilot.mcp-secret-scanning
- **Capabilities:** [MCP Servers](../../capabilities/copilot-general.md#mcp-servers) (`capability.mcp-servers`), [GitHub MCP Security Scanning](../../capabilities/code-scanning.md#github-mcp-security-scanning) (`capability.github-mcp-security-scanning`), [Secret Scanning](../../capabilities/secret-scanning.md#secret-scanning) (`capability.secret-scanning`), [Copilot CLI](../../capabilities/copilot-cli.md#copilot-cli) (`capability.copilot-cli`)
- **Contents:** [MCP config](../../inventory.md) (`content.mcp-config`), [Advanced security skill](../../inventory.md) (`content.advanced-security-skill`), [Inject secrets patch](../../inventory.md) (`content.inject-secrets-patch`)

1. Apply the patch set `GHAS: Inject Secrets` from the [patch sets guide](../../general/patch-sets.md).
2. Confirm the patch created an uncommitted `logs/debug.log` file.
3. In Copilot Chat Agent mode or Copilot CLI, run the secret scanning skill:

   ```prompt
   /secret-scanning Use the GitHub Remote MCP secret scanning tools to scan my current uncommitted changes for exposed secrets. Show the file, line number, secret type, and the exact remediation steps I should take before I commit.
   ```

4. Show that Copilot invokes MCP secret scanning and returns the leaked secret location without needing to push first.
5. Ask Copilot to remove or redact the secret:

   ```prompt
   Remove the exposed secret safely, keep the file useful for debugging, and then scan the changed files again.
   ```

6. If needed, run the skill again explicitly:

   ```prompt
   /secret-scanning Scan the changed files again and confirm whether any exposed secrets remain.
   ```

7. Show the clean follow-up scan result.

> [!WARNING]
> AI responses and MCP tool selection can vary. If Copilot does not choose the security tool automatically, explicitly mention `GitHub Remote MCP`, `dependency scanning`, or `secret scanning` in the prompt and verify the `github-remote` server is running.

## Cleanup

1. Revert the dependency demo changes:

   ```bash
   git restore frontend/package.json frontend/package-lock.json
   ```

2. Revert or delete the injected secret demo files:

   ```bash
   git restore logs/debug.log 2>/dev/null || rm -f logs/debug.log
   ```

> [!TIP]
> Continue with the [GitHub Advanced Security walkthrough](../ghas.md) to show how the same risks are enforced later through Dependabot alerts, dependency review, push protection, and repository security alerts.
