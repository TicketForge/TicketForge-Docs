---
title: Pre-Ticket Forms (Modals)
description: Capture required details using modals before creating ticket channels.
---

Pre-ticket forms require members to submit structured information before creating a ticket channel, giving your team immediate context.

![Form Settings](/images/edit_settings/form_settings.png)

## Configuration Flow

1. Navigate to **Panel Editor > Forms**.
2. Toggle **Enable Ticket Forms**.
3. Click **Add Question**.

## Supported Field Types

| Field Type | Inputs Supported | Operational Use Case |
| :--- | :--- | :--- |
| **Text (Short)** | Single-line input, character limits | Usernames, Order IDs, Transaction Hashes |
| **Text (Paragraph)** | Multi-line text area | Incident details, issue reproduction steps |
| **Single Choice** | Radio options (Choose 1) | Department selection, platform (PC/Console) |
| **Multiple Choice** | Checkboxes (Min/Max limits) | Affected services, server nodes |

## Response Routing

Once submitted:
1. The ticket channel is provisioned.
2. Form responses are rendered into a pinned Discord embed at the top of the channel.
3. Variables are exposed globally for use in channel names (e.g., `{create.form_0}`).