# Troubleshooting

Common issues and how to fix them.

## "Thinking..." / Interaction Failed
The bot is not responding to button clicks.
1.  **Permissions:** Check that `TicketForge` has `View Channel` and `Send Messages` in the panel channel.
2.  **Role Hierarchy:** The bot's role must be **higher** than the user it is trying to manage.
3.  **Outage:** Check our status page.

## Panel Setup Guide (Health Check)
In the Panel Editor, click the **Status Badge** (e.g., "Critical" or "Healthy") in the top right.
*   **Critical Issues:** Prevent the panel from working (e.g., "No Support Roles selected").
*   **Warnings:** Suggestions for better setup (e.g., "No Transcript Channel").

## User Can't See Ticket
1.  Check the **Category Permissions**. The Category should allow the bot to `Manage Permissions`.
2.  Check **Ticket Management > Permissions** in the editor. Ensure the user isn't being removed via a "Closed Role" or "Opened Role" misconfiguration.

## Images/Avatars Not Loading
If you uploaded a custom bot avatar and it reverted:
*   Ensure the file is under **8MB**.
*   Supported formats: PNG, JPG, GIF.