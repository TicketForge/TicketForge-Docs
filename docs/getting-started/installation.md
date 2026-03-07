# Installation & Invite

Getting TicketForge running on your server takes just a few clicks.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); margin-bottom: 2rem;">
    <iframe 
        src="https://www.youtube.com/embed/Im3quAqKLSI" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

## 1. Invite the Bot

To start using TicketForge, you need to invite the bot to your Discord server and authorize it with the necessary permissions.

<div class="grid cards" markdown>

- :fontawesome-brands-discord: **Invite TicketForge**<br>
  Click below to add the bot to your server. You must have **Manage Server** permissions.<br>
  [:fontawesome-brands-discord: Invite Bot](https://discord.com/oauth2/authorize?client_id=1312832688889008218&permissions=2252160926870544&integration_type=0&scope=bot){ .md-button .md-button--primary }

</div>

## 2. Required Permissions

TicketForge requires specific permissions to function correctly. When inviting the bot, ensure the following permissions are granted:

| Permission | Reason |
| :--- | :--- |
| **Manage Roles** | To assign support roles, manage ticket permissions, and automate roles during claiming. |
| **Manage Channels** | To create ticket channels, rename them, and manage categories. |
| **Change Nickname** | To allow the bot to change its own nickname if configured. |
| **View Channels** | Essential for the bot to see and interact with your server's channels. |
| **Send Messages** | To post panels, welcome messages, and response triggers inside tickets. |
| **Send Messages in Threads** | Required if you use the "Tickets as Threads" feature. |
| **Create Private Threads** | Allows the bot to create private ticket threads for a cleaner sidebar. |
| **Manage Messages** | To pin messages and delete bot triggers/commands to keep channels clean. |
| **Manage Threads** | To archive/lock threads when a ticket is closed. |
| **Embed Links** | Necessary to send rich visual panels, buttons, and formatted logs. |
| **Attach Files** | Used to generate and upload HTML transcripts and audit logs. |
| **Read Message History** | Required to generate transcripts and view context of existing tickets. |
| **Use External Emojis** | Allows the bot to display custom branding and icons in its messages. |

!!! warning "Permission Check"
    Ensure the TicketForge bot role is higher than the roles you select below in your server settings. 

    For TicketForge to manage roles (e.g., adding a "Support" role to a user), the **TicketForge bot role** must be **higher** than the role it is trying to assign in your Discord Server Settings > Roles list.

## 3. Verify Installation

Once invited, go to a text channel in your server and type `/ping`.
If the bot responds with **"🏓 Pong!"**, it is successfully installed and online.

---

## Troubleshooting

**The bot is offline?**
Check our [Status Page](https://ticketforge.statuspage.io/) to see if there are any ongoing outages.

**Commands not showing up?**
Sometimes Discord takes up to an hour to register slash commands for new bots. You can try re-inviting the bot with the link above to force a command refresh.