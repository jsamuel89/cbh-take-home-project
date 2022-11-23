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

#Subtask 1 : Create a agentFacility mapping table. agentFacilityId primaryKey, agentId and facilityId as ForiegnKey. Also agentFacilitycode column will be used to store custom id for each agent with respect to their facility. Estimated Time (5 Mins)

#Subtask 2: On UI when we call getAgent with a facilityId as params, will left join agentFacility table and send agentFacilitycode down to client if it exists, else at the shift creation UI, will collect the agentFacilitycode from user and capture along with shift post API. Est Time (1 hour)

#Subtask 3: Any agent find in DB should be left joined with agentFacility table and send agentFacilitycode down to client for further processsing.

#Subtask 4: `getShiftsByFacility` api along with agent join , will also left join with agentFacility table to get agentFacilitycode for display.
