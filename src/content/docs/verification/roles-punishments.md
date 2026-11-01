---
title: Roles, Punishments & Appeals
description: Configure role transition lifecycles, automated punishment triggers, and appeal pipelines.
---

![Web Verification Portal](/images/verification/punishments.png)

Control what roles members receive when they join, what happens if they fail verification, and how blocked users can submit appeals.

---

## 1. Role Lifecycle Pipeline

The verification module manages two opposite role stages:

| Role Category | When Applied | When Revoked | Operational Purpose |
| :--- | :--- | :--- | :--- |
| **Unverified Roles** | Automatically applied when a user joins the Discord server. | Revoked immediately upon passing verification. | Restricts member visibility to your `#rules` and `#verification` channels only. |
| **Verified Roles** | Granted immediately upon passing verification. | Never revoked by the verification system. | Unlocks access to general chat channels, voice, and community perks. |

:::caution[Permission Check]
Ensure your Unverified role does not have the `Send Messages` or `View Channel` permissions in your main community channels. The bot role must sit higher in your role list than all assigned roles.
:::

---

## 2. Failure Punishments & Quarantine

Protect your staff queue by automatically taking action against users who fail verification or fail to verify within a specified timeframe.

Navigate to **Verification > General & Access > Punishments & Quarantine**:

### Grace Period Duration
Define the maximum duration (in minutes, hours, or days) a new user is allowed to spend in the unverified state before punishment automatically triggers.

### Max Failed Attempts
Set the maximum number of failed captcha attempts (0–10) permitted before the user is penalized.

---

## 3. Punishment Actions

| Action | Execution Behavior | Permissions Required | Appeal Integration |
| :--- | :--- | :--- | :--- |
| **Kick** | Immediately kicks the user from the guild. | `Kick Members` | ❌ None |
| **Ban** | Permanently bans the user from the guild. | `Ban Members` | **External Application Appeal** *(Web Portal)* |
| **Role Actions** | Strips access roles or assigns custom penalty roles. | `Manage Roles` | ❌ None |
| **Quarantine** | Strips standard roles and assigns a restricted `@Quarantined` role. | `Manage Roles` | **Internal Ticket Appeal** *(Discord Channel)* |

---

## 4. Native Appeal Integrations

TicketForge seamlessly bridges verification punishments with the **Applications** and **Tickets** modules:

### Ban Appeals $\rightarrow$ Web Application Form
If a user is banned for verification failure, they receive a direct message with an external link to fill out a designated **Application Form** (e.g., *Ban Appeal Form*) via the web portal, allowing them to explain the failure to staff.

### Quarantine Appeals $\rightarrow$ Private Support Ticket
If a user is quarantined, they are restricted to a private channel where clicking appeal automatically generates an **Appeal Ticket**, routing them directly into a private thread with your moderation staff.