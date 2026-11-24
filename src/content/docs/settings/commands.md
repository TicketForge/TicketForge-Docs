---
title: Command Management
description: Granular control over Slash Commands, channel scopes, and role permissions.
---

TicketForge offers granular control over Slash Commands. You can disable specific commands entirely or restrict them to specific channels and roles.

![Template Options](/images/dashboard/commands.png)

---

## Configuration

Navigate to the **Commands** tab in the sidebar. You will see a list of all available bot commands.

### Command Settings

Click on any command to edit its permissions:

1. **Enable Command:** Master toggle. If OFF, the command acts as if it doesn't exist.
2. **Support Team Only:** Restricts usage to users who have a role designated as "Support" in any of your panels.
    * _Admin Commands (e.g., `/setup`, `/ticket purge`, `/giveaway`) are restricted to Administrators and Dashboard Roles automatically._

### Scope Restrictions

You can fine-tune where commands work:

* **Allowed Channels:** The command will *only* work in these channels.
* **Blocked Channels:** The command will work everywhere *except* these channels.
* **Allowed Roles:** Only these roles can use the command.
* **Blocked Roles:** These roles are specifically prevented from using the command.

---

# Available Commands

> **Syntax Legend:** `<required option>` | `[optional option]`

| Command | Description |
| :--- | :--- |
| **Tickets (`/ticket`)** | |
| `/ticket add [user] [role]` | Adds a user or role to the current ticket channel. |
| `/ticket remove [user] [role]` | Removes a user or role from the current ticket channel. |
| `/ticket rename <name>` | Renames the current ticket channel *(1–100 chars)*. |
| `/ticket close [reason]` | Closes the current ticket with an optional reason *(max 256 chars)*. |
| `/ticket reopen` | Re-opens the current closed ticket channel. |
| `/ticket delete` | Permanently deletes the current ticket channel. |
| `/ticket claim` | Claims the current ticket for the executing staff member. |
| `/ticket unclaim` | Unclaims the current ticket, releasing it back to the general staff pool. |
| `/ticket archive` | Generates a standalone HTML transcript of the current ticket. |
| `/ticket priority <level>` | Sets the priority level. **Choices:** `low`, `medium`, `high`, `urgent`. |
| `/ticket thread` | Creates a private staff discussion thread inside the current ticket. |
| `/ticket escalate [reason]` | Moves the current ticket to another panel/department *(max 256 chars)*. |
| `/ticket purge [age]` | Bulk deletes tickets by age. **Choices:** `all` (Everything), `1` (24h), `3` (3d), `7` (1w), `30` (1mo). |
| **Applications (`/application` & `/apply`)** | |
| `/apply` | Opens an interactive form to start a new application in the server. |
| `/application request <user> <application> [reason]` | Sends an application prompt directly to a specific user's DMs *(max 256 chars)*. |
| `/application info <application>` | View detailed applicant answers, status, and metadata for a submission. |
| `/application accept <application> [reason]` | Accepts a user's pending application and runs assigned role automations *(max 256 chars)*. |
| `/application deny <application> [reason]` | Denies a user's pending application and notifies the applicant *(max 256 chars)*. |
| **Verification (`/verification`)** | |
| `/verification verify <user>` | Forcefully verifies a user and grants verified roles. |
| `/verification unverify <user>` | Forcefully removes verified roles and reapplies unverified roles. |
| **Giveaways (`/giveaway`)** | |
| `/giveaway create <prize> <winners> <duration> [channel] [description]` | Creates a new giveaway *(1–50 winners, duration e.g. `30m`, `2h`, `1d`)*. |
| `/giveaway edit <giveaway>` | Edits a currently running giveaway. |
| `/giveaway end <giveaway>` | Immediately ends a running giveaway and draws winners. |
| `/giveaway cancel <giveaway>` | Cancels a running giveaway without drawing winners. |
| `/giveaway reroll <giveaway> [count]` | Rerolls winners for an ended giveaway *(1–50, default 1)*. |
| `/giveaway info <giveaway>` | Displays details, entries, and status for a giveaway. |
| `/giveaway list` | Lists all currently running giveaways in the server. |
| `/giveaway delete <giveaway>` | Deletes a running giveaway. |
| **Configuration & Moderation** | |
| `/setup` | Configure and manage settings for TicketForge directly in Discord. |
| `/premium` | Check the server's subscription status, active plan, and benefits. |
| `/blacklist <user> [reason]` | Blacklists a user *(max 256 chars)*. If used inside a ticket, automatically transcribes and deletes it. |
| **General** | |
| `/help` | Provides information about the bot and its commands. |
| `/ping` | Checks bot latency and replies with Pong! |
| `/invite` | Get links to invite the bot or join the support server. |
| `/vote` | Vote for TicketForge on bot lists to support us and earn rewards. |