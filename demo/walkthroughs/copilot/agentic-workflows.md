# **GitHub Agentic Workflows Demo**

This demo walks through GitHub Agentic Workflows (`gh-aw`) - AI-powered automation that runs directly in GitHub Actions.

## Authoring Workflows

- **Capabilities:** [GitHub Agentic Workflows (gh-aw)](../../capabilities/agentic-workflows.md#github-agentic-workflows-gh-aw) (`capability.agentic-workflows`), [Copilot Cloud Agent (CCA)](../../capabilities/copilot-ide.md#copilot-coding-agent-cca) (`capability.copilot-coding-agent`)

> [!IMPORTANT]
> **Golden Rule:** Users should never edit the markdown workflow files directly. Always use Copilot Cloud Agent (CCA) to create or modify workflows. Of course, power users may edit the files manually, but the golden path is to use the agentic workflow custom agent to update workflows.

The primary reference for authoring workflows is: [Creating Workflows](https://github.github.io/gh-aw/setup/creating-workflows/)

### Creating New Workflows

Use CCA to "vibe-code" your workflows:

1. Open the repo and navigate to the Agents tab
2. Describe the workflow you want to create and format the prompt like this:

3. Enter the following prompt:

   ```prompt
   Create a workflow for GitHub Agentic Workflows using https://github.com/github/gh-aw/blob/main/create.md
   The purpose of the workflow is to <x>
   ```

   where `<x>` describes the goal of the workflow in natural language.
4. Let the agent cook!

### Updating Existing Workflows

To update or convert traditional YAML workflows to agentic workflows:

1. Open the repo and navigate to the Agents tab
2. Select the **agentic-workflows** custom agent
3. Describe the changes or conversion needed
4. The agent will update the workflow while preserving intent

> [!TIP] You can show the "old" YML auto analyze workflow and then show the updated agentic workflow to highlight the differences in structure and capabilities. The agentic workflow was created by asking the agent to convert the YAML workflow to an agentic workflow.

### Key Concepts

#### Custom Front matter - e.g. Schedule Jittering

Agentic workflow markdown file have custom frontmatter properties that look similar to Actions properties. There are differences though: for example, `schedule: daily` runs at a **random time** each day. This "jittering" prevents multiple workflows from executing simultaneously and overwhelming resources.

```yaml
on:
  schedule: daily  # Runs at a random time each day
```

#### Secure Sandbox and Permissions

Agentic workflows run in a **secure sandbox** with minimal default permissions:

- **Network isolation**: Only explicitly allowed domains can be accessed
- **Read-only by default**: Write permissions must be explicitly granted
- **Tool restrictions**: Only specified tools and commands are available

Example permission block:

```yaml
permissions:
  contents: read
  issues: read
  pull-requests: read
network:
  allowed:
    - node  # Allow npm registry access
```

#### Safe Outputs

Safe outputs are a security feature that restricts what actions the agent can take. Instead of having full write access, agents declare specific outputs they can produce:

```yaml
safe-outputs:
  create-issue:
    title-prefix: "[auto] "  # All created issues must have this prefix
    max: 1                    # Only one issue per run
  assign-to-agent:
    allowed: [copilot]        # Can only assign to Copilot
  noop:                       # Allow "no operation" output
```

Refer to the [Safe Outputs documentation](https://github.github.io/gh-aw/reference/safe-outputs/) for complete details.

---

## Demo Scenarios

### Demo: Review Agent Suggestions in GitHub Issues

- **id**: walkthrough.copilot.agentic-workflows-issue-triage-suggestions
- **Capabilities:** [GitHub Agentic Workflows (gh-aw)](../../capabilities/agentic-workflows.md#github-agentic-workflows-gh-aw) (`capability.agentic-workflows`), [Agent Automation Controls in GitHub Issues](../../capabilities/issues-and-projects.md#agent-automation-controls-in-github-issues) (`capability.issue-agent-automation-controls`)
- **Contents:** [Issue triage suggestions workflow](../../inventory.md) (`content.issue-triage-suggestions-workflow`)
- **Prep:** The `Issue Triage Suggestions` workflow is configured to run when an issue is opened.

1. Open the repository's **Issues** tab and create an issue with this title:

   ```text
   Checkout button does not respond on mobile
   ```

   Use this body:

   ```markdown
   ## Problem

   On the React checkout page, tapping **Place order** on a mobile viewport does nothing. No confirmation appears and the order is not submitted.

   ## Reproduction

   - Open the frontend at a 390px viewport.
   - Add a product to the cart.
   - Open checkout and tap **Place order**.

   ## Expected

   The order is submitted and the confirmation screen appears.
   ```

2. Submit the issue and wait for the **Issue Triage Suggestions** workflow to complete.
3. Open the issue's suggestions panel and review the proposed `bug` and `frontend` labels, `Bug` issue type, and optional `Severity` value.
4. Compare the rationale and confidence attached to each suggestion, then accept or reject the changes individually or in bulk.
5. Search for `has:suggestions` in Issues to show how maintainers can find suggestions awaiting review.

> [!NOTE]
> Suggestions remain pending until a maintainer approves them; the agent does not apply issue metadata directly.

---

### Demo 1: Create a New Workflow from Scratch

- **id**: walkthrough.copilot.agentic-workflows-create-from-scratch
- **Capabilities:** [GitHub Agentic Workflows (gh-aw)](../../capabilities/agentic-workflows.md#github-agentic-workflows-gh-aw) (`capability.agentic-workflows`), GitHub Actions, [Copilot Cloud Agent (CCA)](../../capabilities/copilot-ide.md#copilot-coding-agent-cca) (`capability.copilot-coding-agent`)

> [!NOTE]
> This takes 10-30 minutes to complete. **Start this first**, then demo the existing workflows while it runs.

1. Open Copilot Chat in the repo Agents tab
2. Choose the Opus 4.6 model for best results
3. Enter this prompt:

   ```prompt
   Create a workflow for GitHub Agentic Workflows using https://github.com/github/gh-aw/blob/main/create.md. The purpose of the workflow is to import multi-device resolution tester agentic workflow from github/gh-aw and adapt it to test the website in this repo.  Ensure that the build steps are followed in docs/build.md.  Please create a pull request with these changes and ensure it can be triggered from workflow_dispatch as well as scheduled weekly.  
   ```

4. Let CCA cook - it will:
   - Fetch the creation guide
   - Create the markdown file describing the intent of the workflow
   - Create the workflow file in `.github/workflows/`

5. While waiting, proceed to Demo 2 and Demo 3

6. Once complete, review the generated workflow:
   - Check the frontmatter (permissions, tools, safe-outputs)
   - Review the natural language instructions
   - Show how it references `${{ github.xxx }}` context variables
   - Merge the PR and manually trigger the workflow to show it in action
   - Review the issue it creates

---

### Demo 2: Auto-Analyze Build Failures

- **id**: walkthrough.copilot.agentic-workflows-auto-analyze-failures
- **Capabilities:** [GitHub Agentic Workflows (gh-aw)](../../capabilities/agentic-workflows.md#github-agentic-workflows-gh-aw) (`capability.agentic-workflows`), GitHub Actions, GitHub Models
- **Contents:** [Auto-analyze failures workflow](../../inventory.md) (`content.auto-analyze-failures-workflow`), [Self-healing patch](../../inventory.md) (`content.self-healing-patch`)

- **Prep:** The workflow [auto-analyze-failures.md](../../../.github/workflows/auto-analyze-failures.md) is already configured.

> [!WARNING]
> The generated workflow `auto-analyze-failures.lock.yml` is disabled by default to avoid errors as long as the tokens are not configured.
>
> **To enable it:**
>
> 1. Go to the **Actions** tab in your repository
> 2. Select **"Auto Analyze Build Failures"** from the left sidebar
> 3. Click the **Enable workflow** button

1. Create an intentional failure in the code as follows:
   1. Hit *Cmd-shift-P* and select `Tasks: Run Task` and then select `Copilot: Self-healing DevOps`.
   2. This will create a breaking code change.
   3. Commit and push this change and create a PR to trigger the CI workflow, which should fail.
2. Wait for the CI build to fail (this should take a few moments)
3. The `auto-analyze-failures` workflow automatically triggers on the failure
4. Show the workflow run:
   - The agent reads the failure logs
   - Classifies the failure type (code, test, config, dependency, etc.)
   - Determines if it's transient or requires action
5. If not transient, an issue is automatically created with:
   - Failure analysis summary
   - Remediation plan
   - Links to the failed run
6. For certain failure categories, the issue is automatically assigned to Copilot Cloud Agent
7. Open Issues tab to show the newly created issue

**Show the workflow code:**

```markdown
## Analysis guidance

Classify the failure into one category:
- `code`
- `test`
- `config`
- `dependency`
- `infrastructure`
- `quality`
- `repeat-transient`

Determine if it is transient (re-running would likely succeed).
```

---

### Demo 3: Daily Repo Activity Summary

- **id**: walkthrough.copilot.agentic-workflows-daily-summary
- **Capabilities:** [GitHub Agentic Workflows (gh-aw)](../../capabilities/agentic-workflows.md#github-agentic-workflows-gh-aw) (`capability.agentic-workflows`), GitHub Actions, GitHub Models
- **Contents:** [Daily activity workflow](../../inventory.md) (`content.daily-activity-workflow`)

- **Prep:** The workflow [daily-repo-activity-summary.md](../../../.github/workflows/daily-repo-activity-summary.md) is already configured.

1. Navigate to **Actions** tab in GitHub
2. Find the workflow: **"Daily Repo Activity Summary"**
3. Click **"Run workflow"** to trigger manually
   - Note: In production, this runs daily at a random time (jittered)
4. Wait for completion (~2-5 minutes)
5. Check the **Issues** tab for the new summary issue
6. Show the generated content:
   - Issues opened/closed in last 24 hours
   - Pull requests activity
   - Notable high-activity items
   - Direct links to all referenced items

**Show the workflow code:**

```markdown
## Output Requirements

- Title should use the configured prefix and be concise (e.g., "[daily activity] 2026-02-04 Repo Summary")
- Body must follow the reporting format guidelines:
  - Use `###` headers or lower
  - Provide a summary section with key counts
  - Use `<details>` sections for lists of issues and PRs
```

**Point out the safe-outputs constraint:**

```yaml
safe-outputs:
  create-issue:
    title-prefix: "[daily activity] "
    max: 1  # Only one issue per run
```

---

### Demo 4: PR Documentation & Test Coverage Review

- **id**: walkthrough.copilot.agentic-workflows-pr-doc-test-review
- **Capabilities:** [GitHub Agentic Workflows (gh-aw)](../../capabilities/agentic-workflows.md#github-agentic-workflows-gh-aw) (`capability.agentic-workflows`), GitHub Actions, GitHub Models
- **Contents:** [PR doc tests workflow](../../inventory.md) (`content.pr-doc-tests-workflow`)



- **Prep:** The workflow `pr-doc-tests-check.md` is already configured. It only triggers on PRs that modify `api/src/routes/deliveryVehicle.ts`.

> [!NOTE]
> **Presenter Note:** This demo depends on having a PR that creates or modifies `api/src/routes/deliveryVehicle.ts`. You can use the **Agent Skills** demo for that (see [agent-skills.md](./agent-skills.md) — `Part 2: Generate the DeliveryVehicle Entity`). Otherwise, you can simply follow the steps below.

1. Open Copilot Chat in Agent mode and prompt:

   ```prompt
   Add a new "Delivery Vehicles" CRUD API endpoint to the application following existing patterns.
   ```
2. Let Copilot generate the model, repository, route, and migration
3. Create a PR with the changes (title doesn't matter — the workflow
triggers on path match)
4. Wait ~5 minutes for the agentic workflow to complete
5. Show the PR review posted by `github-actions` (exact output varies — AI-generated, but the structure is consistent):
   - **Documentation Check** table: flags missing or outdated doc files (e.g. `api-swagger.json`, `docs/architecture.md`, `README.md`) with 🔴 High / 🟡 Medium priorities
   - **Unit Test Coverage Check** table: flags missing test files for the route and repository with 🔴 High priority
   - Review verdict: `REQUEST_CHANGES` (blocks merge depending on the rules defined in the rulesets).
