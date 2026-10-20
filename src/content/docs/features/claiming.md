---
title: Ticket Claiming System
description: Prevent collision by assigning ticket ownership to specific staff members.
---

The claiming system designates a single agent responsible for a ticket, preventing multiple team members from responding simultaneously.

![Claiming Settings](/images/edit_settings/claiming_settings.png)

## Core Policies

* **Restrict Actions:** Restricts typing and controls to the claiming staff member and ticket creator.
* **Claimer Must Unclaim:** Prevents other agents from overriding ownership without explicit release.
* **Zero Permissions Mode:** Hides the channel from other support agents once claimed.

## Visual Indicators
* **Dynamic Channel Renaming:** Updates channel name to `claimed-{user}`.
* **Category Re-routing:** Moves the ticket to an active "In Progress" category.