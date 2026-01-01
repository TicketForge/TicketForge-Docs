# Dashboard Overview

The TicketForge Dashboard is a **powerful, fully responsive management system** designed to be the heart of your ticketing system. It provides a comprehensive visual interface to build automation, design professional embeds, and manage your staff—accessible from both desktop and mobile devices.

While TicketForge supports intuitive Discord slash commands for quick actions, the dashboard allows you to handle advanced configurations without the limitations of a chat interface.

[Access Dashboard](https://ticketforge.xyz){ .md-button .md-button--primary }

## 1. Server Selection

After logging in via Discord, you will see the **Server List**.

- **Active Servers:** Servers where TicketForge is already present. Click **Manage** to enter the configuration area.
- **Available Servers:** Servers where you have administrative rights but the bot is missing. Click **Invite** to add it.

<figure markdown>
  ![Server List](../assets/images/select_server.webp){ loading=lazy }
  <figcaption>The server selection screen showing active and available servers.</figcaption>
</figure>

## 2. Navigation Sidebar

Once you select a server, the sidebar provides access to specific tools:

<figure markdown>
  ![Dashboard Overview](../assets/images/dashboard/edit_panel.webp){ loading=lazy }
  <figcaption>The main dashboard interface with sidebar navigation.</figcaption>
</figure>

| Section                                         | Description                                                                                          |
| :---------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| :material-view-dashboard-edit: **Panel Editor** | The core builder. Create reaction panels, configure buttons, and set up ticket logic.                |
| :material-console: **Commands**                 | Enable/Disable specific slash commands (`/close`, `/claim`, etc.) and set role/channel restrictions. |
| :material-cog: **Server Config**                | Global settings like the **Dashboard Access Roles**, **Language**, and **Ticket Limits**.            |
| :material-history: **History**                  | An audit log of all changes made to your bot configuration via the dashboard.                        |
| :material-chart-bar: **Statistics**             | View charts regarding ticket volume, claim times, and staff activity.                                |
| :material-crown: **Premium**                    | Manage your subscription, view invoices, or activate a license key.                                  |

## 3. Navigation

The dashboard is designed to keep everything within reach so you don't have to keep clicking "Back."

- **Global Links:** At the very top, you’ll find quick links to **Invite** the bot, join our **Support** server, manage **Premium**, or jump back into these **Docs**.
- **Breadcrumbs:** Right below the top bar, the breadcrumbs show exactly where you are (e.g., `Server Name > Panel Name`). You can click the server name to go back to the main server settings.
- **User Profile:** Your Discord avatar is in the top right. Click it if you need to log out, select a server or check the status of TicketForge.
- **Quick Switch:** In the top-left sidebar widget, the **Switch** button lets you jump between different panels in the same server without leaving the editor.

## 4. Saving Changes

!!! note "Unsaved Changes"
    The dashboard includes a **Safe Save** system. If you make changes (e.g., edit a message or toggle a setting), a bar will appear at the bottom of the screen prompting you to **Save Changes** or **Discard**.

    If you try to leave the page with unsaved changes, a confirmation modal will prevent you from losing your work.