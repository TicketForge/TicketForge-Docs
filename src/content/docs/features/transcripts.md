---
title: Transcripts & Event Auditing
description: HTML transcript generation, Google Drive sync, and event streams.
---

Ensure conversation history is preserved using self-contained HTML transcripts that replicate Discord's visual style.

![Transcript Settings](/images/edit_settings/transcript_settings.png)

## Cloud Synchronization (Google Drive)
*Premium Feature*

Back up transcripts directly to your Google Drive to prevent data loss from expired Discord CDN links:
1. Link your Google account under **Server Config > Google Drive**.
2. Select your destination backup folder.
3. TicketForge uploads transcripts asynchronously upon ticket closure.

## Archive Triggers
* **Auto-Save on Close:** Renders the transcript when a ticket is closed.
* **Auto-Save on Delete:** Generates the transcript immediately before channel deletion.
* **Direct Message Dispatch:** Automatically sends the completed HTML archive to the user's DMs.