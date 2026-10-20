# Ralph Loop Demo

### Demo: Using the `api-endpoint` Skill to Add a New Entity

- **id**: walkthrough.copilot.ralph-loop-api-coverage
- **Capabilities:** [Copilot Custom Agents](../../capabilities/copilot-general.md#copilot-custom-agents) (`capability.custom-agents`), [Copilot Subagents](../../capabilities/copilot-general.md#copilot-subagents) (`capability.copilot-subagents`)
- **Contents:** [API coverage looper agent](../../inventory.md) (`content.api-coverage-looper-agent`), [API test writer agent](../../inventory.md) (`content.api-test-writer-agent`)

In this scenario, we are going to use a "API Test Coverage" loop. The [looper agent](../../../.github/agents/api-coverage-looper.agent.md) will search the API routes and determine which routes have tests and which don't. It will then use the `subAgents` tool to invoke the [test-writer agent](../../../.github/agents/api-test-writer.agent.md) in parallel, (each as a subagent to keep context tight) to write tests for the route, using the `argument-hint` to pass in the route to write tests for.

Once the loop starts, you can then start a new session and the looper will continue in the background until all the routes have tests!

1. Open a new Copilot Chat session.
2. Select "Local" and then `API Coverage Looper` as the agent. Select a model - a small model like Haiku or Gemini Flash should work just fine for this demo.
3. Enter the following prompt in the Chat and let it go:

   ```prompt
   complete test coverage
   ```
4. Let it go for a few seconds and point out that a set of parallel subagents has started working each with their own thread to keep context clean.
5. You'll have to click "Allow tools" for each subagent (the easiest is to "Allow all tools in this session") otherwise every tool invocation will prompt for permission.
6. Point out that this is `yolo` and that you should be careful doing this!
7. At this point you can click the top-left "Back" arrow to start a new Chat - this work continues on the original session which you can switch back to in the session view.
8. Once the subagents complete, you should see a final report showing coverage for all the API routes.

### BONUS! Copilot CLI Fleet Demo

- **id**: walkthrough.copilot.ralph-loop-cli-fleet
- **Capabilities:** [Copilot CLI](../../capabilities/copilot-cli.md#copilot-cli) (`capability.copilot-cli`), Fleet Mode
- **Contents:** [API coverage looper agent](../../inventory.md) (`content.api-coverage-looper-agent`)

As an alternative, you can use CLI's `fleet` command to run the subagents in parallel!

Install the latest version of Copilot CLI. Then `copilot` into the repo folder.

1. Type `yolo` to allow all commands (pointing out the risks of doing this!)
2. Type `/agent` and select the "API Coverage Looper Agent"
3. Enter the following to launch a fleet to complete all the test writing in parallel:

   ```prompt
   /fleet complete coverage
   ```

