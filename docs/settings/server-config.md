# Server Configuration

Manage global settings that apply to the entire bot within your server.

<figure markdown>
  ![Commands List](../assets/images/settings/serverconfig.png){ loading=lazy }
  <figcaption>Server config settings.</figcaption>
</figure>


## Bot Identity
*Premium Feature*

You can customize how the bot appears in your server members' lists and chat.

*   **Nickname:** Change the bot's name (e.g., "Server Helper").
*   **Avatar:** Upload a custom icon (PNG/JPG/GIF). This overrides the default TicketForge logo within your server only.

## Dashboard Access
Control who can log in to the web dashboard to manage settings.

*   **Administrator:** Has full access by default.
*   **Custom Roles:** Select specific roles (e.g., "Head Mod") to grant them editor access.
    *   *Note:* Dashboard users can see all tickets and settings but cannot manage billing.

## Interaction Blacklist
Prevent abuse by blocking specific roles from interacting with the bot entirely.

*   **Effect:** Users with a blacklisted role cannot click buttons, use dropdowns, or run slash commands.
*   **Usage:** Useful for "Muted" roles or punishing users who spam tickets.

## Global Limits
*   **Server Ticket Limit:** Set a hard cap on the total number of open tickets allowed in the server (e.g., 50). Once reached, no new tickets can be opened until some are closed.