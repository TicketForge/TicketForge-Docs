---
title: Creating an Application
description: Step-by-step guide to configuring application forms for recruitment and appeals.
---

An **Application** allows you to collect structured data from your users through dynamic forms. TicketForge allows you to build multiple applications for different purposes (e.g., "Staff Recruitment", "Ban Appeals", "Giveaway Entry").

## 1. Login & Access

To begin, visit the [TicketForge Website](https://ticketforge.xyz).

1. Click the **Login with Discord** button in the top right corner.
2. Authorize the TicketForge application to access your account information.

![Dashboard Home](/images/creating-panel/login.png)

## 2. Server Selection

Once logged in, you will automatically navigate to the server selection page. Select the server where you want to create the application.

You can also navigate to this page by clicking on your profile and then "Servers".

1. Click on your **Profile Picture** in the top right corner to open the menu.
2. Select **Dashboard** from the dropdown menu.

![Server List](/images/creating-panel/select_server.png)

:::tip[Can't see your server?]
If a server is missing from this list, ensure you have the **Manage Server** permission on that Discord server. If you just got permissions, try logging out and logging back in to refresh your token.
:::

## 3. Creating the Application

After selecting a server, navigate to the **Applications** tab in the sidebar and click the **Create Application** card.

![Create App Card](/images/applications/create_app_card.png)

### Step A: Selection Strategy

You will be presented with three ways to start your configuration:

1. **Official Templates:** Pre-configured templates designed by our team for common use cases (e.g., "Staff Recruitment").
2. **Community Templates:** User-generated templates shared by other server owners.
3. **Import from Code:** If you have a share code (format: `XXXX-XXXX-XXXX`), paste it here to clone an exact configuration.

![Template Selection](/images/applications/select_template.png)

#### Previewing Templates
Before making a choice, you can click on any template card to open a detailed **Interactive Preview**. This allows you to view the exact questions, the Discord embed message, and the user flow before committing to it.

![Preview Template](/images/applications/preview_template.png)

### Step B: Configuration

Once you click **Use Template**, you must configure the core identity of the application.

You only need to define three essential settings:
* **Application Name:** The title of the form (e.g., "Moderator Application").
* **Target Results Channel:** The private Discord channel where completed application answers will be posted for your staff to read. *(Required)*
* **Review Roles (Optional):** The Discord roles (e.g., `@Head Mod`) that are allowed to click the "Accept" or "Deny" buttons on the submitted applications.

![Setup Wizard](/images/applications/template_config.png)

### Step C: Creation

Click **Create Application**. You will be instantly redirected to the **Application Editor** where you can finalize your questions, adjust automation rules, and send the form to your Discord server!

![Success Modal](/images/applications/setup_wizard.png)