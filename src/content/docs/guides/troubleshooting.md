---
title: Troubleshooting & Common Issues
description: Solutions for common permission errors, interaction failures, and visual bugs.
---

Common issues and remediation steps.

## Interaction Failures ("Thinking..." / "Failed")

If buttons or slash commands fail to respond:
1. **Channel Permissions:** Confirm `TicketForge` has `View Channel`, `Send Messages`, and `Embed Links` in that channel.
2. **Role Hierarchy:** Confirm the `TicketForge` bot role is **higher** in Server Settings than the roles it manages.
3. **Outages:** Check the [TicketForge Status Page](https://ticketforge.statuspage.io/) to verify operational health.

## User Cannot View Their Ticket

1. **Category Overrides:** Confirm category permissions allow the bot to manage channel overrides.
2. **Automated Roles:** Check **Ticket Management > Permissions** to ensure an unintended `@Closed` role override isn't hiding the channel from the user.

## Custom Branding Assets Reverting

If uploaded custom bot avatars or banners revert:
* Verify images are under **8MB**.
* Ensure images use supported file formats: **PNG**, **JPEG**, or **GIF**.