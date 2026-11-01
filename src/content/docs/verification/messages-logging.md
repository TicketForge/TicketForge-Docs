---
title: Verification Messages & Audit Logging
description: Customize in-Discord verification embeds, verify buttons, and stream threat events to audit channels.
---

Customize public Discord verification prompts and stream detailed security audit logs to private staff channels.

---

## 1. Customizing Messages & Buttons

Navigate to **Verification > Discord Message** to visually customize how verification appears in your server using the Canvas Editor.

### Available Message Views
* **Channel Panel Embed (`verificationEmbed`):** The public message posted in your `#verification` channel. Houses the **Verify** action button.
* **Success Notice DM (`successEmbed`):** Direct message sent to the user upon passing verification, confirming unlocked access.

### Verify Button Customization
* **Label:** Change button text (e.g., `Verify Identity`, `Unlock Server`).
* **Color Styles:** Select from Blurple (`PRIMARY`), Grey (`SECONDARY`), Green (`SUCCESS`), or Red (`DANGER`).
* **Emoji:** Attach standard Unicode emojis (e.g., `🔒`, `✅`) or custom server emoji tags (`<:badge:123456789>`).

---

## 2. Dynamic Verification Placeholders

Use dynamic placeholders in your verification embed titles, descriptions, and footers:

| Placeholder | Replaced Value |
| :--- | :--- |
| `{server.name}` | Current Discord server name. |
| `{server.id}` | Discord server Snowflake ID. |
| `{server_members}` | Total member count in the server. |
| `{server.icon}` | Direct URL to your server's icon. |
| `{server.banner}` | Direct URL to your server's banner. |
| `{user_mention}` | Mentions the verifying user (`@Member`). |
| `{user_name}` | Verifying user's Discord username. |
| `{user_id}` | Discord Snowflake ID of the user. |
| `{user_avatar}` | Direct URL to the verifying member's avatar. |

---

## 3. Audit Logging & Security Streams

Keep a tamper-proof paper trail of every verification event under **Verification > Audit Logs**.

### 1. Setup
Select your private staff log channel (e.g., `#verification-logs`) from the **Audit Log Channel** dropdown.

### 2. Loggable Events

| Event | Log Content & Data |
| :--- | :--- |
| **User Passed** | Timestamp, user tag, Discord ID, time elapsed, and granted roles. |
| **User Failed** | Timestamp, user tag, failure reason, and attempt count. |
| **Threat Signals Detected** | Full breakdown of detected telemetry (VPN ASN, Alt account match score, DevTools flag). |
| **Punishment Executed** | Action taken (`KICK`, `BAN`, `QUARANTINE`, or `ROLE_ACTIONS`), staff reason, and appeal link status. |