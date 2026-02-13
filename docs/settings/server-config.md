# Server Configuration

Manage global settings that apply to the entire bot within your server.

## Google Drive Integration
*Premium Feature*

Securely backup your transcripts to the cloud. By connecting your Google Drive, TicketForge will automatically upload HTML transcripts to a folder in your personal Drive whenever a ticket is saved.

1.  Go to **Server Config > Integrations**.
2.  Click **Connect Google Drive**.
3.  Authorize TicketForge to access your Drive files.

*   **Email:** Displays the connected Google account email.
*   **Security:** We use an encrypted Refresh Token system. We do not store your password.

---

## Custom Bot (Whitelabel)
*Premium Feature*

Take branding to the next level by running TicketForge under **your own bot application**. This replaces the "TicketForge" bot user entirely with your own bot.

<div class="grid cards" markdown>

-   :material-robot: **Standard Identity**
    
    Included in basic Premium. Changes the bot's **Nickname** and **Avatar** inside your server, but the "Bot Tag" still shows the original application name when clicked.

-   :material-incognito: **Full Custom Bot**
    
    Runs a separate instance using your own **Bot Token**. The bot will have your application's name, profile, and status presence.

</div>

### Configuration
1.  Create a new application in the [Discord Developer Portal](https://discord.com/developers/applications).
2.  Copy your **Bot Token** and **Application ID**.
3.  Paste them into the **Server Config > Custom Bot** section.
4.  TicketForge will spin up a dedicated instance for your server.

---

## Dashboard Access
Control who can log in to the web dashboard to manage settings.

*   **Administrator:** Has full access by default.
*   **Custom Roles:** Select specific roles (e.g., "Head Mod") to grant them editor access.
    *   *Note:* Dashboard users can see all tickets and settings but cannot manage billing.

## Interaction Blacklist
Prevent abuse by blocking specific roles from interacting with the bot entirely.

*   **Effect:** Users with a blacklisted role cannot click buttons, use dropdowns, or run slash commands.
*   **Usage:** Useful for "Muted" roles or punishing users who spam tickets.