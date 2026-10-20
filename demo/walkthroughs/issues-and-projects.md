# Issues & Projects

### Issues

- **id**: walkthrough.planning.issues-types-sub-issues
- **Capabilities:** [Issues (Types, Sub-issues, Dependencies)](../capabilities/issues-and-projects.md#issues-types-sub-issues-dependencies) (`capability.issues`)
- **Contents:** [Compliance Requirements epic](../inventory.md) (`content.compliance-epic`), [ToS issue](../inventory.md) (`content.tos-issue`)

1. Navigate to the **Issues** tab of the demo repository.
2. Open the `Compliance Requirements` epic issue. Point out the `Epic` issue type and the sub-issues listed under it.
3. Open the `Add terms acceptance to checkout process` sub-issue. Show that it is blocked by the `Allow downloading our terms and conditions` issue — demonstrating **issue dependencies**.
4. Open the `Allow downloading our terms and conditions` issue. Show it is linked to the pre-created PR `Feature: Add ToS Download` — demonstrating **PR-to-issue linking**.
5. Return to the `Compliance Requirements` epic. Show the **Sub-Issue Progress** tracker and explain how `Feature` and `Task` issue types nest under the `Epic`.

### Issue Fields

- **id**: walkthrough.planning.issue-fields
- **Capabilities:** [Issue Fields (Org-Level Custom Metadata)](../capabilities/issues-and-projects.md#issue-fields-org-level-custom-metadata) (`capability.issue-fields`)
- **Contents:** [Pre-seeded issues](../inventory.md) (`content.seed-issues`)

Issue Fields allow organizations to define custom metadata at the org level so every repository reports information consistently. In this demo, we use an **Incident Response Metadata** scenario where Bug-type issues are tagged with operational metadata like Severity, Root Cause, and Affected Users.

#### Org-Level Fields

The demo script registers three issue fields at the organization level during demo registration:

| Field Name              | Type            | Options                                                        |
| ----------------------- | --------------- | -------------------------------------------------------------- |
| **Severity**            | `Single Select` | `SEV1` (red), `SEV2` (orange), `SEV3` (yellow), `SEV4` (blue)  |
| **Root Cause Category** | `Single Select` | `Code Defect`, `Configuration`, `Dependency`, `Infrastructure` |
| **Affected Users**      | `Number`        | —                                                              |

#### Pre-Set Field Values

During instance creation, the script sets field values on five Bug-type issues:

| #   | Issue                                         | Severity | Root Cause    | Affected Users |
| --- | --------------------------------------------- | -------- | ------------- | -------------- |
| 3   | User reported a timeout issue                 | `SEV2`   | Code Defect   | 150            |
| 4   | Check contrast of dark mode                   | `SEV3`   | Code Defect   | 0              |
| 9   | Navigating to Help center doesn't redirect    | `SEV3`   | Configuration | 45             |
| 10  | Button misalignment at bottom of page         | `SEV4`   | Code Defect   | 0              |
| 14  | Adding item does not reflect total item count | `SEV1`   | Code Defect   | 500            |

  1. Navigate to any Bug issue that has field values set (see table above)
  2. Point out the custom fields in the issue sidebar — these are defined at the **organization** level, not per-repo
  3. Show that the same fields and options are available across all repositories in the org
  4. Optionally, compare a `SEV1` issue (`Adding item does not reflect total item count`, 500 affected users) with a `SEV4` issue (`Button misalignment at bottom of page`, 0 affected users)

> [!WARNING]
> **Manual step required:** The demo script does not currently support setting issue field **visibility** in the organization. Before demoing, you must configure this manually:
>
> 1. Go to **Organization settings → Planning → Issue Fields**
> 2. Edit each issue field (Severity, Root Cause Category, Affected Users)
> 3. Set the field visibility for the desired issue types:
>    - Setting **"Issues without a type"** will show the field on all issues that don't have a type yet
>    - Setting **"Bug"** will show the field only when the issue type is set to Bug
>
> If you want to demonstrate that these fields appear when **creating new issues**, the visibility must be configured first. Otherwise, the fields will only be visible on issues where values were set by the demo script.

### Projects

- **id**: walkthrough.planning.projects
- **Capabilities:** [Projects (Boards, Fields, Views)](../capabilities/issues-and-projects.md#projects-boards-fields-views) (`capability.projects`)

> [!NOTE]
> Demoing the project board is mostly clicking and showing as you go. Use the reference below as a checklist.

1. Navigate to the **Projects** tab and open the linked project board.
2. Show the **Team Backlog** view — issues grouped by Squad with Status, Priority, and Sub-Issue Progress columns.
3. Switch to the **Sprint Board** view — show the Kanban layout and how issues move across status columns.
4. Switch to the **Roadmap** view — show the timeline spanning two sprints.
5. Open **Project Settings → Fields** to highlight the custom fields: Status, Priority, Sprint (Iteration), Estimate, and Squad.
6. Open **Project Settings → Workflows** to show built-in automations (auto-add, auto-archive, item-closed → Done, etc.).
7. Open **Insights** → show the **Bugs per sprint** and **Sprint capacity** charts. Note that time-based charts won't show much data in a fresh demo environment.
