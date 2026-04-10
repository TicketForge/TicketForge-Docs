# Variables & Placeholders

You can use these dynamic variables in your **Messages**, **Embeds**, and **Channel Names**. The bot will automatically replace them with real data when the message is sent or the channel is created.

---

## 1. User & Staff Variables

### Ticket Owner (The User)
Variables related to the person who triggered the ticket creation.

| Placeholder | Description |
| :--- | :--- |
| `{user_mention}` | Mentions the user (e.g. @Username). |
| `{user_name}` | The user's username. |
| `{user_nickname}` | The user's server nickname. |
| `{user_id}` | The user's unique Discord ID. |
| `{user_avatar}` | Direct URL to the user's avatar. |
| `{user_tag}` | The user's 4-digit discriminator. |
| `{user_full}` | The user's username and discriminator combined. |

### The Action Author (The Trigger)
Variables related to **whoever clicked the button or ran the command**. 
*Note: In a Welcome Message, this is usually the ticket owner. In a "Ticket Claimed" message, this is the staff member.*

| Placeholder | Description |
| :--- | :--- |
| `{author}` | Mentions the user who triggered the action. |
| `{author.name}` | The author's username. |
| `{author.nickname}` | The author's server nickname. |
| `{author.id}` | The author's unique Discord ID. |
| `{author.icon}` | URL of the author's profile picture. |
| `{author.tag}` | The author's 4-digit discriminator. |
| `{author.full}` | The author's username and discriminator combined. |

---

## 2. Ticket Context

### General Ticket Info
| Placeholder | Description |
| :--- | :--- |
| `{ticket}` | Mentions the ticket channel (clickable link). |
| `{ticket.name}` | The name of the ticket channel. |
| `{ticket.id}` | The unique channel ID of the ticket. |
| `{ticket_opener}` | Mentions the user who opened the ticket. |
| `{ticket_closer}` | Mentions the user who closed the ticket. |
| `{transcript.users}` / `{transcript_users}` | List of users involved in the ticket transcript. |

### Ticket Owner Specifics
| Placeholder | Description |
| :--- | :--- |
| `{ticket.user}` / `{ticket.owner}` | Mentions the ticket owner/creator. |
| `{ticket.user.name}` | The ticket owner's username. |
| `{ticket.user.nickname}` | The ticket owner's server nickname. |
| `{ticket.user.id}` | The ticket owner's unique Discord ID. |
| `{ticket.user.icon}` | URL of the ticket owner's profile picture. |
| `{ticket.user.tag}` | The ticket owner's 4-digit discriminator. |
| `{ticket.user.full}` | The ticket owner's username and discriminator. |

### Claim Status
| Placeholder | Description |
| :--- | :--- |
| `{claim.user}` | Mentions the last user who claimed the ticket. |
| `{claim.user.name}` | The claimer's username. |
| `{claim.user.nickname}` | The claimer's server nickname. |
| `{claim.user.id}` | The claimer's unique Discord ID. |
| `{claim.user.icon}` | URL of the claimer's profile picture. |
| `{claim.user.tag}` | The claimer's 4-digit discriminator. |
| `{claim.user.full}` | The claimer's username and discriminator. |

### Escalation Info
Used specifically in escalation notification messages.

| Placeholder | Description |
| :--- | :--- |
| `{escalate.reason}` | The reason provided for the escalation. |
| `{escalate.panel}` | The name of the destination panel. |
| `{escalate.staff}` | The staff member who escalated the ticket. |

---

## 3. Server, Channel & Panel Data

### Server
| Placeholder | Description |
| :--- | :--- |
| `{server.name}` / `{server_name}` | The name of the server. |
| `{server.id}` / `{server_id}` | The server's unique ID. |
| `{server_members}` | Total member count of the server. |
| `{server.icon}` | Direct URL to the server's icon. |
| `{server.banner}` | Direct URL to the server's banner. |

### Channel
| Placeholder | Description |
| :--- | :--- |
| `{channel_mention}` | Mentions the current channel. |
| `{channel.name}` / `{channel_name}` | The name of the channel where the variable is used. |
| `{channel.id}` / `{channel_id}` | The ID of the channel where the variable is used. |

### Panel
| Placeholder | Description |
| :--- | :--- |
| `{panel.name}` | The name of the panel where the variable is used. |
| `{panel.count}` | The current sequential ticket number for this panel. |
| `{panel.ticketLimit}` | The configured ticket limit for the current panel. |

---

## 4. Forms & Special Data

### Form Data
Used to extract specific answers when creating a ticket via a form.

| Placeholder | Description |
| :--- | :--- |
| `{create.form_0}` | The answer to the 1st question in the form. |
| `{create.form_1}` | The answer to the 2nd question in the form. |
| `{create.form_2}` | The answer to the 3rd question in the form. |
| `{create.form_X}` | Replace `X` with the question index (starting at 0). |

### Special Variables
| Placeholder | Description |
| :--- | :--- |
| `{empty}` | Inserts an empty-like invisible character. Useful for required embed fields. |
| `{random}` | Generates a random number (can be customized with `?rmin`/`?rmax` modifiers). |
| `{Role ID}` | Pings a specific role. Replace `Role ID` with the actual ID (e.g., `{9876543210}`). |

---

## 5. Channel Naming Specifics

These variables are specifically tailored for generating dynamic **Channel** and **Thread** names.

| Placeholder | Description |
| :--- | :--- |
| `{user}` | The ticket opener's username (shorthand for `{ticket.user.name}`). |
| `{count}` | The unique, incrementing ticket number for this server. |
| `{panel.name}` | The name of the panel used to create the ticket. |
| `{panel.count}` | The sequential ticket number strictly for this specific panel. |

---

## 6. Time & Dates

| Placeholder | Description |
| :--- | :--- |
| `{time}` | Current Unix timestamp in seconds. |
| `<t:{time}>` | Discord's dynamic timestamp (auto-adjusts to the viewing user's timezone). |
| `{time.created}` | Unix timestamp for when the ticket was opened. |
| `{time.deleted}` | Unix timestamp for when the ticket was deleted. |
| `{time.created.age}`| How long ago the ticket was created. |
| `{time.deleted.age}`| Duration between ticket creation and deletion. |

---

## 7. Advanced Logic (Modifiers)

You can append modifiers to almost any variable to change how it is formatted or displayed. 
**Syntax:** `{variable?modifier}`

| Modifier | Alias | Example | Result / Description |
| :--- | :--- | :--- | :--- |
| **Uppercase** | `?uc` | `{user_name?uppercase}` | `JOHN` |
| **Lowercase** | `?lc` | `{user_name?lowercase}` | `john` |
| **Max Length** | `?ml=X` | `{ticket.id?maxLength=5}` | `12345` (truncates if exceeded) |
| **Pad Left** | `?pl=X` | `{count?padLeft=4}` | `0005` (adds leading zeros) |
| **Pad Right** | `?pr=X` | `{count?padRight=4}` | `5000` (adds trailing zeros) |
| **Fallback** | `?fb=Text`| `{claim.user?fallback=Unclaimed}` | Displays "Unclaimed" if variable is empty. |
| **Not Fallback** | `?nfb=Text`| `{claim.user?nfb=Claimed!}` | Displays "Claimed!" *only* if the variable contains data. |
| **Math** | `?m=op` | `{count?math=+1}` | Performs algebraic operations (`+`, `-`, `*`, `/`). |
| **Clean** | *(None)* | `{create.form_0?clean}` | Removes backticks (`` ` ``) to prevent markdown breaking. |
| **Random Min** | *(None)* | `{random?rmin=10}` | Sets the minimum bound for a random number. |
| **Random Max** | *(None)* | `{random?rmax=100}` | Sets the maximum bound for a random number. |

---

## 8. Image Placeholders Reference

When setting up embeds requiring **Image URLs** (like Thumbnails, Author Icons, or Image properties), ensure you use variables that resolve to a valid direct image URL:

* `{user_avatar}`
* `{author.icon}`
* `{ticket.user.icon}`
* `{claim.user.icon}`
* `{server.icon}`
* `{server.banner}`