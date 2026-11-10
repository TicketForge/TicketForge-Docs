---
title: Ticket Automation & Inactivity Notifier
description: Automate user departure handling, lifecycle DMs, and ticket inactivity reminders.
---

TicketForge includes automation rules to maintain server hygiene, keep users informed, and prevent tickets from sitting abandoned in your support queue.

Navigate to **Panel Editor > Automation** to configure these settings.

![Automation Settings](/images/edit_settings/automation_settings.png)

---

## 1. User Leave Handling

<Badge text="Premium" variant="caution" />

What happens if a user opens a ticket and then leaves your Discord server? TicketForge can automatically detect this and prevent your queue from filling with ghost tickets.

* **Monitor User Leave:** Toggle this feature ON to track server membership for active ticket openers.
* **Actions:**
  * **Close Ticket (Recommended):** Moves the ticket to the closed/archived state, generates an HTML transcript (if enabled), and logs the event for staff review.
  * **Delete Ticket:** Immediately deletes the ticket channel permanently without saving a transcript.

---

## 2. Direct Message (DM) Notifications

Keep users updated outside of Discord channels by dispatching direct messages on ticket lifecycle transitions:

* **Send DM on Ticket Creation:** Sends an instant confirmation DM to the user when their ticket is opened, containing ticket details and channel access instructions.
* **Send DM on Ticket Close:** Sends a post-resolution DM summarizing the closure and attaching the full chat transcript.

:::caution[Privacy Settings Warning]
If a user has **Direct Messages disabled** for your server in their Discord privacy settings, the bot will not be able to deliver these updates. This is a Discord platform restriction.
:::

---

## 3. Ticket Inactivity Notifier

<Badge text="Premium" variant="caution" />

Never let customer requests or abandoned tickets slip through the cracks. The **Inactivity Notifier** monitors your tickets and automatically sends an alert if a ticket sits idle without responses.

### Basic Configuration

* **Enable Inactivity Notifier:** Master switch to activate idle tracking for this panel.
* **Notification Destination:**
  * **Inside Ticket Channel (Default):** Posts the inactivity reminder directly into the active ticket channel to prompt the customer or staff for a reply.
  * **Custom Text Channel:** Routes alerts to a dedicated staff channel (e.g., `#ticket-alerts`) so management can step in.
* **Roles to Mention:** Select up to 5 staff roles (e.g., `@Support Lead` or `@Senior Agent`) to be pinged in the notification.
* **Initial Delay:** The duration of inactivity required before the first reminder is dispatched (configurable from **10 minutes** up to **3 days** / 4,320 minutes).

---

### Repeating Reminders

If an initial reminder isn't answered, you can instruct the bot to continuously follow up:

* **Repeating Reminder Toggle:** Enables recurring follow-up reminders.
* **Repeat Interval:** Time between consecutive reminder pings (minimum **10 minutes**, maximum **3 days**).
* **Max Notifications:** Caps the maximum number of reminders (from **1 to 10**) sent before stopping, preventing channel spam if the team or customer is unavailable.

---

## 4. Message Customization

All three automation touchpoints can be customized using either **Embeds (V1)** or **Components (V2)**:

| Message Name | Trigger ID | Purpose |
| :--- | :--- | :--- |
| **Inactivity Notice** | `inactivity_message` | Sent inside the ticket (or destination channel) when the inactivity timer triggers. |
| **Creation DM** | `created_dm` | Direct message sent to the ticket creator upon opening. |
| **Closing DM** | `closed_dm` | Direct message sent to the ticket creator upon closure. |

You can customize each message directly by clicking the **Edit Message** shortcut on the Automation page, or by navigating to **Panel Editor > Messages**.