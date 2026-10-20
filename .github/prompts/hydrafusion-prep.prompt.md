---
description: 'Prepare three GitHub Copilot App sessions for the HydraFusion demo'
---

# Prepare the HydraFusion Demo Sessions

Create three separate sessions in the GitHub Copilot App for the same rendered OctoCAT Supply demo repository that this coordinating session is using. Each new session must use **HydraFusion** as its selected model before its task starts. Do not implement these tasks in this coordinating session, combine them into one session, or substitute another model.

Create the sessions with these exact name prefixes and tasks:

## [HydraFusion-Single] Update Docs

Prompt:

```prompt
Add the test command to the README docs.
```

## [HydraFusion-Cascade] Add Tests

Prompt:

```prompt
Add a test for the branch API endpoint to gracefully handle database disruptions, ensuring they return a 500 without showing details. Use the existing test framework for the backend in this repository.
```

## [HydraFusion-Critique] Implement Feature

Prompt:

```prompt
Plan and implement an order tracking page and feature. Use the UI design in <copilot-ref kind="file" target-id="docs/design/order-tracking-prototype.png" label="order-tracking-prototype.png" /> to get an idea of what it should look like. Make sure all routes and paths are tested, and corner cases are sufficiently handled.
```

Create each session as an independent App session with its own worktree. For every session, select HydraFusion, use Autopilot mode, set the corresponding name above, then submit only that session's matching prompt. The intended Single, Cascade, and Critique labels are illustrative; HydraFusion chooses the actual workflow for each task and may choose a different pattern.

After creating the sessions, confirm their names and that HydraFusion was selected for each. If you cannot create App sessions or set their model from this conversation, do not claim they were created; explain the limitation and provide the three session names and prompts that still need manual setup.
