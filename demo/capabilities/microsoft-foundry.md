# Microsoft Foundry

- **id**: area.microsoft-foundry.core
- **product**: Microsoft Foundry (`product.microsoft-foundry`)

**Capabilities in this group:** `capability.microsoft-foundry`

---

## Microsoft Foundry

- **id**: capability.microsoft-foundry

A managed Azure platform for building, deploying, and grounding AI agents — combining model hosting, vector search, and the Responses API in a single portal.

### Value Proposal

- **No-code agent authoring** — define a system prompt, attach grounding documents via File Search, and publish an API endpoint without writing infrastructure code.
- **Grounded, trustworthy responses** — retrieval-augmented generation over uploaded knowledge bases prevents hallucinated facts, discounts, or policies.
- **Secure by default** — integrates with Azure RBAC and `DefaultAzureCredential`; no long-lived secrets required in application code.
- **Playground for rapid iteration** — test agent behavior in the Foundry UI before wiring it to a frontend, enabling fast prompt and grounding tuning.

### Prestaged content

- `content.chatbot-system-prompt` — `demo/resources/chatbot/system-prompt.md` and `system-prompt-casual.md`
- `content.chatbot-agent-grounding` — `demo/resources/chatbot/agent-grounding.md`

### Shown in walkthroughs

- `walkthrough.microsoft-foundry.build-the-brain`
