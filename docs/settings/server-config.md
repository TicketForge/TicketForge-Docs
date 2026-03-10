# Server Configuration

Manage global settings that apply to the entire bot within your server.

<figure markdown>
  ![ServerConfig Settings](../assets/images/settings/serverconfig.png){ loading=lazy }
  <figcaption>Server Config settings.</figcaption>
</figure>

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

<!-- Video Section -->
<div style="max-width: 900px; margin: 0 auto 4rem auto;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.4);">
        <iframe 
            src="https://www.youtube.com/embed/9WBPmbWLx2Q" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</div>



---

## Google Drive Integration
*Premium Feature*

Securely backup your transcripts to the cloud. By connecting your Google Drive, TicketForge will automatically upload HTML transcripts to a folder in your personal Drive whenever a ticket is saved.

1.  Go to **Server Config > Integrations**.
2.  Click **Connect Google Drive**.
3.  Authorize TicketForge to access your Drive files.

*   **Email:** Displays the connected Google account email.
*   **Security:** We use an encrypted Refresh Token system. We do not store your password.

---

## Dashboard Access
Control who can log in to the web dashboard to manage settings.

*   **Administrator:** Has full access by default.
*   **Custom Roles:** Select specific roles (e.g., "Head Mod") to grant them editor access.
    *   *Note:* Dashboard users can see all tickets and settings but cannot manage billing.

## Server Ticket Limit
Cap the total number of open tickets allowed across the entire server simultaneously.

*   **Enable Limit:** Toggles the restriction on or off.
*   **Max Open Tickets:** Set the numeric maximum (e.g., 50). Once this limit is reached, users attempting to open new tickets will receive an error message until a current ticket is closed.

## Language & Localization
Set the default language for bot system messages.

*   **Bot Language:** Select your preferred language from the dropdown (e.g., English, Deutsch, Francais, Espanol, Nederlands). This affects error messages, and system prompts sent by the bot.

## Interaction Blacklist
Prevent abuse by blocking specific roles from interacting with the bot entirely.

*   **Effect:** Users with a blacklisted role cannot click buttons, use dropdowns, or run slash commands.
*   **Usage:** Useful for "Muted" roles or punishing users who spam tickets.