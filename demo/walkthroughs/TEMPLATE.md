# [Walkthrough Title]

<!--
  Optional: one-sentence context paragraph explaining what the walkthrough covers,
  if more than one demo section exists and a brief intro helps orient the presenter.
  Files have no ID — they are containers only.
-->

### Demo: [Demo Name]

- **id**: walkthrough.[area].[slug]
- **Capabilities:** [[Capability Name]](../capabilities/[file].md#[anchor]) (`capability.[id]`)
- **Contents:** [[Content Name]](../inventory.md) (`content.[id]`) _(optional)_
- **Prep:** [One-sentence summary of what must be set up before presenting.] _(optional)_

<!--
  If Prep is complex, add a > [!IMPORTANT] block with numbered steps immediately below
  the metadata lines and before the numbered How steps.
-->

<!--
  Optional: video link (visible only to internal audiences via Liquid conditional)

<% if audience == 'hubbers' or audience == 'msft' %>
**Video**: [Watch Demo](https://aka.ms/REPLACE-WITH-VIDEO-URL)
<% endif %>
-->

1. [First step — what to click, navigate to, or say.]
2. [Second step.]
3. [Third step.]

   ```[language]
   [Optional: command or prompt the presenter should type/run]
   ```

4. [Fourth step.]

> [!TIP]
> [Optional: tip for the presenter, e.g. "Pre-run this step before the demo."]

---

### Demo: [Second Demo Name] _(optional — repeat block above for each demo section)_

- **id**: walkthrough.[area].[second-slug]
- **Capabilities:** [[Capability Name]](../capabilities/[file].md#[anchor]) (`capability.[id]`)

1. [First step.]
2. [Second step.]

---

<!--
## FORMATTING RULES (delete this section before committing)

File-level:
  - Title: `# Title` (plain text, no bold or emoji in the heading itself)
  - Files have NO `- **id**:` line — they are containers, not entities

Demo sections:
  - `## ` or `### ` headings are both valid — choose the level that fits the file structure
  - `- **id**: walkthrough.<area>.<slug>` is REQUIRED and is the sole signal that a heading is a walkthrough; place it immediately below the heading
  - Capabilities line is required; Contents and Prep lines are optional but encouraged
  - Video links go immediately after the metadata lines, inside a Liquid conditional
  - How steps are top-level numbered lists (no leading indentation)
  - At most one level of nesting inside a step (e.g., code block or sub-list)

Prep:
  - `- **Prep:** <one-line summary>` → compiled into demo-docs.json
  - Detailed prep steps → `> [!IMPORTANT]` block, between metadata lines and step 1

Formatting:
  - Fenced code blocks for all commands, prompts, and snippets
  - GitHub admonitions: `> [!TIP]`, `> [!NOTE]`, `> [!WARNING]`, `> [!IMPORTANT]`
  - Relative links for all cross-references within the repo
  - Liquid conditionals: use `or` / `and`, never `||` / `&&`; close with `<% endif %>`
-->
