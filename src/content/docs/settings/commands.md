---
title: Command Management
description: Granular control over Slash Commands, channel scopes, and role permissions.
---

TicketForge offers granular control over Slash Commands. You can disable specific commands entirely or restrict them to specific channels and roles.

## Configuration

Navigate to the **Commands** tab in the sidebar. You will see a list of all available bot commands.

### Command Settings

Click on any command to edit its permissions:

1. **Enable Command:** Master toggle. If OFF, the command acts as if it doesn't exist.
2. **Support Team Only:** Restricts usage to users who have a role designated as "Support" in any of your panels.
    * _Admin Commands (e.g., `/setup`, `/purge-tickets`) are restricted to Administrators automatically._

### Scope Restrictions

You can fine-tune where commands work:

* **Allowed Channels:** The command will *only* work in these channels.
* **Blocked Channels:** The command will work everywhere *except* these channels.
* **Allowed Roles:** Only these roles can use the command.
* **Blocked Roles:** These roles are specifically prevented from using the command.

---

# Available Commands

| Command | Description |
| :--- | :--- |
| **Tickets** | |
| `/add <user/role>` | Adds a specific user or an entire role to the current ticket. |
| `/archive` | Transcribes the current ticket. |
| `/close <reason>` | Closes the current ticket with a provided reason (triggers the Close logic configured in the panel). |
| `/delete` | Permanently deletes the current ticket channel. |
| `/escalate <reason>` | Moves the current ticket to a different panel/department with a provided reason (e.g., Support -> Billing). |
| `/remove <user/role>` | Removes a specific user or role from the current ticket. |
| `/rename <name>` | Renames the current ticket channel to the specified name. |
| `/re-open` | Re-opens a previously closed ticket for further communication. |
| `/claim` | Assigns the ticket to the staff member running the command. |
| `/unclaim` | Releases the ticket back to the general pool by removing the assigned staff member. |
| `/priority <level>` | Sets the priority level of the ticket (Low, Medium, High, Urgent). |
| `/thread` | Creates a private, staff-only thread within the ticket for internal discussion. |
| **Applications** | |
| `/apply <application>` | Starts an application form directly in Discord. |
| `/apply-request <user> <application>` | Sends an application prompt directly to a specific user's DMs. |
| `/application-info <id>` | Displays status, applicant answers, and submission metadata for an application ID. |
| `/application-accept <id> <reason>` | Accepts a pending application and runs assigned role automations. |
| `/application-deny <id> <reason>` | Denies a pending application with a logged reason and notifies the applicant. |
| **Configuration** | |
| `/setup` | Launches the interactive setup wizard for creating and managing panels directly in Discord. |
| `/premium` | Shows the current server subscription tier, active features, and expiry date. |
| **Moderation** | |
| `/blacklist <username> <reason>` | Blacklists a user for a specific reason. If used inside a ticket, it automatically transcribes and deletes the ticket. |
| `/purge-tickets <age>` | Bulk deletes tickets older than the specified timeframe (Options: Everything, 24 Hours, 3 Days, 1 Week, 1 Month). |
| **General** | |
| `/help` | Displays the help menu with a comprehensive list of available commands. |
| `/ping` | Checks the bot's latency and Discord API response time. |
| `/invite` | Provides the official link to invite TicketForge to other servers. |
| `/vote` | Provides a link to vote for TicketForge on bot lists to earn rewards or support the bot. |