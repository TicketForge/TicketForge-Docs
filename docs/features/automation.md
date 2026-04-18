# Automation

TicketForge can perform automated actions to help maintain your server's hygiene and keep users informed.

<figure markdown>
  ![Automation Settings](../assets/images/edit_settings/automation_settings.png){ loading=lazy }
  <figcaption>Automation settings.</figcaption>
</figure>

## User Leave Handling

What happens if a user opens a ticket and then leaves the server?

- **Close Ticket:** The ticket status changes to "Closed". The transcript is saved (if enabled), and staff can review it later.
- **Delete Ticket:** The channel is immediately deleted. **No transcript is saved.**

## Automated DMs

The bot can send Direct Messages (DMs) to the user based on ticket events.

- **On Creation:** "Your ticket #123 has been created in Server Name."
- **On Close:** "Your ticket has been closed by Staff. If you need more help, please open a new ticket."

!!! note "Privacy Settings"
    If a user has DMs disabled for your server, the bot will not be able to send these notifications. This is a Discord limitation.