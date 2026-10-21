---
title: Templates & Configuration Sharing
description: Export, clone, and share production panel setups using share codes.
---

The templating engine allows you to replicate configurations across staging and production environments without rebuilding forms manually.

![Template Options](/images/applications/select_template.png)

---

## Creating Templates

1. Open the target panel in the **Panel Editor**.
2. Click **Template** in the action toolbar.
3. Configure naming, metadata tags, and visibility (Public or Private).
4. Save to your organization's template inventory.

:::caution[Data Sanitization]
Templates automatically strip sensitive server IDs (channel IDs, role IDs, and user snowflakes). You must remap these references when applying the template to a new server.
:::

## Exporting Share Codes

For direct, private migration between servers:
1. Open the Panel Editor and select the **Code** icon.
2. Copy the generated `XXXX-XXXX-XXXX` token.
3. On the destination server, select **Create Panel > Import from Code** and paste the token.

:::note[Token Lifetime]
Generated share tokens expire after **72 hours**.
:::