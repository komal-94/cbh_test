# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1 - Add a new field "custom_id" to the Agents table

##### Acceptance Criteria:
- Add field "custom_id" to the Agents table in the database.
- "custom_id" should be of type string and maximum allowed length should be 64.
- "custom_id" should be unique for each Agent.
- by default the field should be marked as null
#####  Time/Effort Estimate:
2-4 hours
#####  Implementation Details:
1. Agents table will need to be altered to add the "custom_id" column.
2. A unique constraint should be added to the "custom_id" field to ensure that each Agent has a unique "custom_id".
3. By default the field should be marked as null
4. In the model definition of Agent table in codebaase, add the new field and make the neccessary changes.
### Ticket 2: Create REST APIs to associate custom id to an agent for the given facility
##### Acceptance Criteria:
- A backend REST API should be created to handle the storage of the "custom_id" in the Agents table.
- In the `getShiftsByFacility` ensure agents metadata also contain the given custom id

#####  Time/Effort Estimate:
4-6 hours

#####  Implementation Details:
1. Create backend REST API to handle storage of custom_id in the Agents table
2. Make the neccessary changes in the `getShiftsByFacility` to show agents metadata with the custom_id, note if custom_id is present show it else mark it as null
3. A test should be written to ensure that the "custom_id" is being stored correctly in the db as well we are able to see the details of agent with custom id
### Ticket 3: Allow Facilities to associate custom ids with Agents
##### Acceptance Criteria:
- The Facility should be able to set a "custom_id" for each Agent they work with.
- UI should have an option to set custom_id for an agent
- UI should integrate REST API for the same
#####  Time/Effort Estimate:
4-6 hours
#####  Implementation Details:
1. A UI should be created in the application to allow Facilities to associate "custom_ids" with Agents.
2. The above created REST API should be integrated to the UI created in the previous step.
3. Perform manual/automated testing to check if this feature works end to end.
### Ticket 4: Modify the generateReport function to use custom ids
##### Acceptance Criteria:
- The "generateReport" function should use the custom_id for each Agent instead of their internal database id.
**Time/Effort Estimate:** 2-4 hours
#####  Implementation Details:
1. The existing "generateReport" function should be altered to use the "custom_id" field instead of the internal database id when generating reports.
2. A test should be written to ensure that the reports generated use the correct "custom_id".
### Ticket 5: Test and Deploy
##### Acceptance Criteria:
- The entire feature should be thoroughly tested.
- Any bugs or issues should be fixed.
- The feature should be deployed to the production environment.
#####  Time/Effort Estimate:
2-4 hours
#####  Implementation Details:
1. Automated and manual tests should be written to ensure the feature works as expected.
2. The feature should be deployed to the production environment and monitored for any issues.
