---
title: Automation Rules
description: Handle member departures and configure event-based messaging.
---

TicketForge includes automation rules to handle member departures and clean up orphaned tickets.

![Automation Settings](/images/edit_settings/automation_settings.png)

## User Departure Handling

When a user leaves the server while they have an open ticket:
* **Close Ticket:** Marks the ticket as closed, generates a transcript, and notifies staff.
* **Delete Ticket:** Deletes the channel immediately without generating a transcript.

## Automated Lifecycle Messaging
Configure automated direct messages for common ticket states:
* **Creation Notice:** Sends ticket confirmation and channel details.
* **Resolution Notice:** Informs the user when an issue has been marked resolved by staff.