---
title: Creating a Panel
description: Step-by-step guide to deploying your first ticket interface in Discord.
---

A **Panel** is the interface your users interact with on Discord to open tickets. TicketForge allows you to create multiple panels for different purposes (e.g., "General Support", "Billing", "Reports").

## 1. Login & Access

To begin, visit the [TicketForge Website](https://ticketforge.xyz).

1. Click the **Login with Discord** button in the top right corner.
2. Authorize the TicketForge application to access your account information.

![Dashboard Home](/images/creating-panel/login.png)

## 2. Server Selection

Once logged in, you will automatically navigate to the server selection page. Select the server where you want to create the panel.

You can also navigate to this page by clicking on your profile and then "Servers".

1. Click on your **Profile Picture** in the top right corner to open the menu.
2. Select **Dashboard** from the dropdown menu.

![Server List](/images/creating-panel/select_server.png)

3. You will see a list of your Discord servers:
    * **Manage:** The bot is already in this server. Click to enter the dashboard.
    * **Invite:** The bot is not in this server. Click to invite it, then refresh the page.

:::tip[Can't see your server?]
If a server is missing from this list, ensure you have the **Manage Server** permission on that Discord server. If you just got permissions, try logging out and logging back in to refresh your token.
:::

## 3. Creating the Panel

After selecting a server, navigate to the **Panels** tab in the sidebar and click the **Create New Panel** card.

![Create Panel Card](/images/creating-panel/create_panel.png)

### Step A: Selection Strategy

You will be presented with three ways to start your configuration:

1. **Official Templates:** Pre-configured templates designed by our team for common use cases like "General Support" or "Report Systems".
2. **Community Templates:** User-generated templates. Always review roles/permissions before using these.
3. **Import from Code:** If you have a share code (format: `XXXX-XXXX-XXXX`), paste it here to clone an exact configuration.

![Template Selection](/images/creating-panel/select_template.png)

#### Previewing Templates
Before making a choice, you can hover over any template card and click the **Preview** button. This opens a detailed interactive preview showing exactly how the panel, forms, and messages will look in Discord.

![Preview Template](/images/creating-panel/preview_template.png)

### Step B: Configuration

Once a template is selected, you can configure the core identity of the panel.

#### Single Panel Configuration
For standard templates, you only need to define:
* **Panel Title:** Internal name (e.g., "Support-Main").
* **Support Roles:** The Discord roles (e.g., `@Moderator`) that can view tickets.
* **Ticket Category:** The Discord Category where new tickets will be created.

![Single Panel Config](/images/creating-panel/select_template_config.png)

#### Multi-Panel Configuration
For complex templates (like a "Hub" system with multiple departments):
1. Select the **Main (Root)** panel in the sidebar to configure the entry point.
2. Select **Sub-Panels** to configure specific categories (e.g., "Billing").
3. *Tip:* Use **Copy from Main** to quickly apply settings across all sub-panels.

![Multi Panel Config](/images/creating-panel/select_template_config_multi.png)

### Step C: Creation / Launching

Click **Create Panel**. You will be redirected to the **Setup Wizard** to finalize your settings (Forms, Branding, Automation) and send the panel to Discord.

![Setup Wizard](/images/creating-panel/preparetosend.png)