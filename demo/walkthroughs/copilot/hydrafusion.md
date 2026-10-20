# HydraFusion

### Demo: Adaptive Workflow Orchestration in the GitHub Copilot App

- **id**: walkthrough.copilot.hydrafusion
- **Capabilities:** [GitHub Copilot App](../../capabilities/copilot-app.md#github-copilot-app) (`capability.github-copilot-app`), [HydraFusion](../../capabilities/copilot-general.md#hydrafusion) (`capability.hydrafusion`), [Copilot Canvases](../../capabilities/copilot-app.md#copilot-canvases) (`capability.copilot-canvases`)
- **Contents:** [Session preparation prompt](../../inventory.md) (`content.hydrafusion-prep-prompt`), [Preparation canvas](../../inventory.md) (`content.hydrafusion-prep-canvas`), [Single prompt](../../inventory.md) (`content.hydrafusion-single-prompt`), [Cascade prompt](../../inventory.md) (`content.hydrafusion-cascade-prompt`), [Critique prompt](../../inventory.md) (`content.hydrafusion-critique-prompt`)
- **Prep:** Add the rendered demo repository to the GitHub Copilot App and use an account where HydraFusion is enabled.

> [!IMPORTANT]
> HydraFusion is experimental. Each session makes real changes in its own worktree, so use a disposable demo repository.

> [!NOTE]
> In our testing, these prompts triggered their intended execution patterns in the majority of cases. They do not guarantee Single, Cascade, or Critique: HydraFusion chooses the workflow dynamically, and routing can vary between runs. Session names indicate the intended pattern, not the actual routing decision; show the pattern selected in the session.

> [!TIP]
> The **Demo Launcher** canvas (`hydrafusion-prep`, [extension](../../../.github/extensions/demo-launcher/README.md)) is optional. Use it before presenting to prepare finished sessions, or during the live demo to save time. Select the **HydraFusion** demo and click **Launch Subsession** for one task or **Launch all HydraFusion subsessions** for all three. It creates independent worktree sessions with HydraFusion selected and starts the prompts in Autopilot mode. Use **Open Session** to show a result or **Relaunch Subsession** to create a fresh session; opening the canvas alone starts nothing. Check partial results before relaunching, since some sessions may already exist. If direct creation is unavailable, the canvas offers an agent fallback. You can also run [`hydrafusion-prep.prompt.md`](../../../.github/prompts/hydrafusion-prep.prompt.md) from a coordinating session instead of using the canvas.

1. Open the rendered demo repository in the GitHub Copilot App. For each task below, create a separate session with its own worktree, select **HydraFusion** as the model, and use Autopilot mode. Copy and paste the matching prompt to start the task manually. If you prepared sessions with the optional canvas or prep prompt, open those sessions instead.

2. Create and name a session **[HydraFusion-Single] Update Docs**, then submit:

   ```prompt
   Add the test command to the README docs.
   ```

   Explain that straightforward work can use the Single workflow. HydraFusion selects the workflow rather than committing every task to a fixed model or multi-model process.

3. Create and name a session **[HydraFusion-Cascade] Add Tests**, then submit:

   ```prompt
   Add a test for the branch API endpoint to gracefully handle database disruptions, ensuring they return a 500 without showing details. Use the existing test framework for the backend in this repository.
   ```

   Point out the model-agnostic progress and explain that Cascade can draft a candidate, then accept it or escalate when the task calls for stronger reasoning.

4. Create and name a session **[HydraFusion-Critique] Implement Feature**, then submit:

   ```prompt
   Plan and implement an order tracking page and feature. Use the UI design in <copilot-ref kind="file" target-id="docs/design/order-tracking-prototype.png" label="order-tracking-prototype.png" /> to get an idea of what it should look like. Make sure all routes and paths are tested, and corner cases are sufficiently handled.
   ```

   Explain that Critique can add an independent read-only review and one revision before Copilot returns a unified response. It augments, but does not replace, the team's human review process.

5. Compare the three sessions in the App's session list. Discuss how HydraFusion can coordinate planning, critique, escalation, and implementation without requiring developers to select the model or workflow for every task. Do not promise a fixed model roster, universal multi-model use, or a guaranteed quality, speed, token, or cost outcome; the selected workflow may differ from the intended pattern on a particular run.
