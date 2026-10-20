---
title: Messages & Embeds
description: Design messages, success embeds, and staff review prompts.
---

Because applications have a multi-stage lifecycle, the bot needs to communicate with users and staff at various points. Under **Edit Application > Messages**, you can fully customize every single touchpoint.

![Messages Editor Overview](/images/applications/editor_overview.png)

## 1. Message Categories

The left sidebar categorizes all available messages into three logical groups based on when they are sent.

### User Flow
Messages that the applicant sees while interacting with your form.
* **Main Panel Message:** The public message sent to your server containing the "Start Application" button.
* **Start Notice:** Sent to the user before they begin the form. Great for listing requirements or rules.
* **Application Started:** Confirms the form has begun and provides instructions.
* **Pre-Submit Confirmation:** The final "Are you sure?" prompt shown before their answers are permanently submitted.
* **Application Submitted:** The success embed shown to the user after completion.

### Staff Review
Messages sent to your private staff channels.
* **Application Received:** The embed posted to your **Target Results Channel**. This contains the user's details and all their answers.
* **Review Result:** *(Premium)* Automatically updates the original "Application Received" message to show which staff member accepted or denied it.
* **Inactivity Notifier:** *(Premium)* The reminder ping sent to staff if an application is ignored for too long.

### Results (DMs)
Automated direct messages sent to the user after a staff member makes a decision.
* **Accepted Notice:** *(Premium)* Sent to the user's DMs when approved.
* **Denied Notice:** *(Premium)* Sent to the user's DMs when rejected.

---

## 2. The Visual Builder

When you select a message, the right pane opens the **Canvas Editor** alongside a **Live Preview**.

1. **Live Preview:** Instantly updates to show exactly how your message will look in Discord.
2. **Content & Embeds:** You can send plain text, or construct rich embeds with titles, descriptions, custom colors, and fields.
3. **Images:** Add a custom thumbnail or large image to make your messages stand out.

![Canvas Editor](/images/applications/canvas_editor.png)

---

## 3. Dynamic Placeholders

Make your messages feel personalized by using Placeholders. Click the **Placeholders** button in the bottom right of the Live Preview to see all available variables.

* **User Variables:** Mention the applicant with `{user_mention}` or display their name with `{user_name}`.
* **Application Variables:** Reference the application by name using `{app_name}`.
* **Form Answers:** You can insert the user's exact answers directly into the Staff Review messages using `{form_answer_1}`, `{form_answer_2}`, etc.
* **Review Data:** In your DM Result messages, use `{review_reason}` to automatically insert the exact reason the staff member typed when they clicked Accept or Deny.

![Placeholders Modal](/images/applications/placeholders.png)