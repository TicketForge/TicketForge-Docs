# Variables & Placeholders

You can use these dynamic variables in your **Messages**, **Embeds**, and **Channel Names**. The bot will replace them with real data when the message is sent.

---

## 1. User & Staff Variables

### Ticket Owner (The User)
Variables related to the person who created the ticket.

| Placeholder | Description |
| :--- | :--- |
| `{user_mention}` | Mentions the user (e.g. @User). |
| `{user_name}` | The user's username. |
| `{user_id}` | The user's unique Discord ID. |
| `{user_avatar}` | Direct URL to user's avatar. |
| `{user_nickname}` | The user's server nickname. |
| `{user_full}` | Username and discriminator combined. |

### The Author (The Trigger)
Variables related to **whoever clicked the button** or ran the command. 
*Note: In a Welcome Message, this is usually the ticket owner. In a "Ticket Claimed" message, this is the staff member.*

| Placeholder | Description |
| :--- | :--- |
| `{author}` | Mentions the user who triggered the action. |
| `{author.name}` | The author's username. |
| `{author.nickname}` | The author's server nickname. |
| `{author.id}` | The author's ID. |
| `{author.icon}` | URL of the author's profile picture. |

---

## 2. Ticket Context

### General Ticket Info
| Placeholder | Description |
| :--- | :--- |
| `{ticket}` | Mentions the ticket channel (clickable link). |
| `{ticket.id}` | The channel ID of the ticket. |
| `{ticket.owner}` | Mentions the user who owns the ticket. |
| `{ticket_closer}` | Mentions the user who closed the ticket. |

### Claim Status
| Placeholder | Description |
| :--- | :--- |
| `{claim.user}` | Mentions the staff member who claimed the ticket. |
| `{claim.user.name}` | The claimer's username. |
| `{claim.user.nickname}` | The claimer's server nickname. |
| `{claim.user.icon}` | URL of the claimer's profile picture. |

### Escalation Info
Used specifically in escalation notification messages.

| Placeholder | Description |
| :--- | :--- |
| `{escalate.reason}` | The reason provided by staff for the transfer. |
| `{escalate.panel}` | The name of the new department (Target Panel). |
| `{escalate.staff}` | The staff member who performed the escalation. |

---

## 3. Server & Panel Data

### Server
| Placeholder | Description |
| :--- | :--- |
| `{server.name}` | Your server name. |
| `{server.id}` | Your server ID. |
| `{server_members}` | Total member count of the server. |
| `{server.icon}` | URL of the server icon. |
| `{server.banner}` | URL of the server banner. |

### Panel
| Placeholder | Description |
| :--- | :--- |
| `{panel.name}` | The name of the panel used (e.g., "Support"). |
| `{panel.count}` | The current sequential ticket number for this panel. |
| `{panel.ticketLimit}` | The configured ticket limit for this panel. |

---

## 4. Time & Dates

| Placeholder | Description |
| :--- | :--- |
| `{time}` | Current Unix timestamp in seconds. |
| `<t:{time}>` | Discord's dynamic timestamp (adjusts to user's timezone). |
| `{time.created}` | Timestamp of when the ticket was opened. |
| `{time.created.age}` | How long ago the ticket was created (e.g., "2 days"). |
| `{time.deleted.age}` | Duration between creation and deletion. |

---

## 5. Advanced Logic (Modifiers)

You can append modifiers to almost any variable to change how it is displayed. 
**Syntax:** `{variable?modifier}`

| Modifier | Syntax | Example | Result |
| :--- | :--- | :--- | :--- |
| **Uppercase** | `?uppercase` | `{user_name?uppercase}` | `JOHN` |
| **Lowercase** | `?lowercase` | `{user_name?lowercase}` | `john` |
| **Max Length** | `?maxLength=X` | `{ticket.id?maxLength=5}` | `12345` |
| **Fallback** | `?fallback=Text` | `{claim.user?fallback=Unclaimed}` | Displays "Unclaimed" if no one has claimed it yet. |
| **Math** | `?math=op` | `{count?math=+1}` | Adds 1 to the count. |
| **Pad Left** | `?padLeft=X` | `{count?padLeft=4}` | `0005` |

---

## 6. Special Variables

| Placeholder | Description |
| :--- | :--- |
| `{empty}` | Inserts an invisible character. Useful for Embed Fields that require content but you want them to look empty. |
| `{random}` | Generates a random number. |
| `{Role ID}` | Pings a specific role. Example: `{9876543210}`. |