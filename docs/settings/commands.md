# Command Management

TicketForge offers granular control over Slash Commands. You can disable specific commands entirely or restrict them to specific channels and roles.

## Configuration

Navigate to the **Commands** tab in the sidebar. You will see a list of all available bot commands.

<figure markdown>
  ![Commands List](../assets/images/settings/commands.png){ loading=lazy }
  <figcaption>The command management interface allowing you to enable or disable specific commands.</figcaption>
</figure>

### Command Settings

Click on any command to edit its permissions:

1.  **Enable Command:** Master toggle. If OFF, the command acts as if it doesn't exist.
2.  **Support Team Only:** Restricts usage to users who have a role designated as "Support" in any of your panels.
    - _Admin Commands (e.g., `/setup`, `/purge-tickets`) are restricted to Administrators automatically._

### Scope Restrictions

You can fine-tune where commands work:

- **Allowed Channels:** The command will _only_ work in these channels.
- **Blocked Channels:** The command will work everywhere _except_ these channels.
- **Allowed Roles:** Only these roles can use the command.
- **Blocked Roles:** These roles are specifically prevented from using the command.

# Available Commands

| Command | Description |
| :--- | :--- |
| **Tickets** | |
| `/add <user/role>` | Adds a specific user or an entire role to the current ticket. |
| `/archive` | Transcribes the current ticket. |
| `/close` | Closes the current ticket (triggers the Close logic configured in the panel). |
| `/delete` | Permanently deletes the current ticket channel. |
| `/remove <user/role>` | Removes a specific user or role from the current ticket. |
| `/rename <name>` | Renames the current ticket channel to the specified name. |
| `/re-open` | Re-opens a previously closed ticket for further communication. |
| `/claim` | Assigns the ticket to the staff member running the command. |
| `/unclaim` | Releases the ticket back to the general pool by removing the assigned staff member. |
| `/priority` | Sets the priority level of the ticket (Low, Medium, High, Urgent). |
| `/thread` | Creates a private, staff-only thread within the ticket for internal discussion. |
| **Configuration** | |
| `/setup` | Launches the interactive setup wizard for creating and managing panels directly in Discord. |
| `/premium` | Shows the current server subscription tier, active features, and expiry date. |
| **Moderation** | |
| `/purge` | Opens a menu to bulk delete tickets based on their status (e.g., All Open or All Closed). |
| **General** | |
| `/help` | Displays the help menu with a comprehensive list of available commands. |
| `/ping` | Checks the bot's latency and Discord API response time. |
| `/invite` | Provides the official link to invite TicketForge to other servers. |
| `/vote` | Provides a link to vote for TicketForge on bot lists to earn rewards or support the bot. |