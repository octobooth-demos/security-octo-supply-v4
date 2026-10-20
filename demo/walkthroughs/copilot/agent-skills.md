# GitHub Copilot Skills Demo

### Demo: Using the `api-endpoint` Skill to Add a New Entity

- **id**: walkthrough.copilot.agent-skills-api-endpoint
- **Capabilities:** [Agent Skills](../../capabilities/copilot-general.md#agent-skills) (`capability.agent-skills`), [Copilot Agent Mode](../../capabilities/copilot-ide.md#copilot-agent-mode) (`capability.copilot-agent-mode`)
- **Contents:** [API endpoint skill](../../inventory.md) (`content.api-endpoint-skill`)

#### Part 1: Explore the Skill

0. Enable the `chat.useAgentSkills` setting in VSCode to use Agent Skills.
1. Open the [.github/skills/api-endpoint/SKILL.md](../../../.github/skills/api-endpoint/SKILL.md) file
2. Walk through the key sections:
   - **Architecture Overview**: Shows the layered architecture (Routes → Repository → Database)
   - **When to Use This Skill**: Trigger conditions for the skill
   - **Workflow Steps**: Step-by-step guide for creating models, repositories, routes, migrations, and seed data
   - **Patterns and Examples**: Concrete code patterns for each component
3. (Optional) Show the [references/database-conventions.md](../../../.github/skills/api-endpoint/references/database-conventions.md) file to demonstrate how supporting documentation is included

#### Part 2: Generate the DeliveryVehicle Entity

1. Open Copilot Chat and switch to **Agent** mode
2. Enter the following prompt:

   ```prompt
   Add a new API endpoint for a new Entity called 'DeliveryVehicle'. Vehicles belong to branches.
   ```

3. Watch as Copilot:
   - Analyzes the existing codebase structure
   - References the `api-endpoint` skill automatically
   - Generates all required components following the established patterns:
     - **Model**: Generates the model using conventions
     - **Repository**: Generates the Repository with CRUD operations
     - **Routes**: Generates the route with full REST endpoints
     - **Migration**: Creates db migrations
     - **Seed Data**: Creates seed data
     - **Tests**: Creates and runs unit tests for the new endpoint

4. Review the generated code and highlight:
   - **Naming Conventions**: Follows naming conventions for entities/methods
   - **Foreign Key Relationship**: The `branchId` field linking to the `branches` table
   - **API Documentation**: Complete OpenAPI annotations for all endpoints
   - **Error Handling**: Consistent use of custom errors
   - **SQL Utilities**: Using specified utils
   - **Unit Tests**: Created and verified unit tests

#### Part 3: Verify the Implementation

1. Accept the changes
2. Run build/unit tests
3. Open the Swagger UI at `http://localhost:3000/api-docs` and show the new DeliveryVehicle endpoints
4. (Optional) Test the CRUD operations using the Swagger UI
