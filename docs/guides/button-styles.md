# Button & Layout Styles

TicketForge offers three distinct interaction styles for your panels, allowing you to optimize for space or visual appeal.

<figure markdown>
  ![Setup Wizard](../assets/images/features/button.png){ width="600" }
  <figcaption>Button settings.</figcaption>


## 1. Standard Buttons (Single Panel)
The default style. Best for simple panels with 1-5 options.

<figure markdown>
  ![Server List](../assets/images/panels/multibutton-example.png){ loading=lazy }
  <figcaption>Panel with multiple buttons.</figcaption>
</figure>

### Configurable Buttons
In **Panel Editor > Buttons**, you can customize the following system buttons:

| Button | Default Label | Function |
| :--- | :--- | :--- |
| **Create Ticket** | `Open Ticket` | Opens a new ticket for the user. |
| **Close Ticket** | `Close` | Archives the ticket (or triggers confirmation). |
| **Claim Ticket** | `Claim` | Assigns the ticket to the clicker. |
| **Transcript** | `Transcript` | Generates a log file of the chat. |
| **Delete** | `Delete` | Permanently deletes the channel. |
| **Re-Open** | `Re-Open` | Moves a closed ticket back to the open category. |
| **Confirm Close** | `Confirm` | The "Yes" button in the close confirmation prompt. |
| **Cancel Close** | `Cancel` | The "No" button in the close confirmation prompt. |

*   **Customization:** You can change the **Label**, **Emoji**, **Color** (Blurple, Grey, Green, Red), and **Role Requirements** for each button.

## 2. Select Menu (Dropdown)
Best for panels with many categories (e.g., "Tech Support", "Billing", "Report Player", "Bug Report").

*   **Capacity:** Up to 25 options in a single menu.
*   **Descriptions:** Each option can have a secondary text line for context.
*   **Emojis:** Supported for every option.
*   **Logic:** Each option in the dropdown triggers a *different* panel configuration behind the scenes.

<figure markdown>
  ![Server List](../assets/images/panels/dropdown-example.png){ loading=lazy }
  <figcaption>Panel with dropdown.</figcaption>
</figure>

## 3. Multi-Panel (Premium)
A powerful layout that combines buttons from **multiple different panels** into a single message.

*   **How it works:** You create a "Master Panel" and attach other panels to it.
*   **Visual:** The bot displays the buttons from all attached panels in a grid under one embed.
*   **Benefit:** Allows you to have a "General Support" button and an "Apply for Staff" button in the same message, even though they have completely different logic/roles behind them.