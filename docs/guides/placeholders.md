# Variables & Placeholders

You can use these dynamic variables in your **Messages**, **Embeds**, and **Channel Names**. The bot will replace them with real data when the message is sent.

## Core Variables

### User (The person who opened the ticket)
| Placeholder | Description |
| :--- | :--- |
| `{user}` | Mentions the user (e.g. @User) |
| `{user.name}` | The user's username |
| `{user.id}` | The user's unique Discord ID |
| `{user.avatar}` | Direct URL to user's avatar |
| `{user.tag}` | Username#Discriminator (Legacy) |
| `{user.mention}` | Same as `{user}` |

### Ticket Info
| Placeholder | Description |
| :--- | :--- |
| `{count}` | The unique ticket number (e.g. 124) |
| `{ticket.id}` | The channel ID of the ticket |
| `{panel.name}` | The name of the panel used |
| `{panel.id}` | The unique ID of the panel |
| `{reason}` | The form input or reason selected (if applicable) |

### Staff / Claimer
| Placeholder | Description |
| :--- | :--- |
| `{claimer}` | Mentions the staff member who claimed the ticket |
| `{claimer.name}` | The claimer's username |
| `{claimer.id}` | The claimer's ID |

### Server
| Placeholder | Description |
| :--- | :--- |
| `{server.name}` | Your server name |
| `{server.id}` | Your server ID |
| `{server.member_count}` | Total members in the server |
| `{server.icon}` | URL of the server icon |

### Time & Dates
| Placeholder | Description |
| :--- | :--- |
| `{time}` | Current timestamp (Full date) |
| `{time.short}` | Short date format (DD/MM/YYYY) |
| `{time.relative}` | Relative time (e.g., "5 minutes ago") |

---

## Modifiers
You can append these to any variable to format the text.
*Usage:* `{variable?modifier}`

| Modifier | Example | Output |
| :--- | :--- | :--- |
| `?uppercase` | `{user.name?uppercase}` | `JOHN` |
| `?lowercase` | `{user.name?lowercase}` | `john` |
| `?capitalize` | `{user.name?capitalize}` | `John` |