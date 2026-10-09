# Role Automation & Triggers

Stop manually updating Discord roles every time an application is processed. TicketForge can handle role assignments, edge cases, and staff reminders automatically. 

<figure markdown>
  ![Resolution Actions](../assets/images/applications/automation_page.png){ loading=lazy }
  <figcaption>The automation options on the automation settings page.</figcaption>
</figure>

Navigate to **Edit Application > Automation** to configure these settings.

## 1. Resolution Actions

You can instruct the bot to add or remove specific Discord roles based on the exact status of the application. 

*   **On Submit:** Executes the moment a user finishes the form (e.g., adding an "Applicant" role so they know their form went through).
*   **On Accept:** Executes when a staff member approves the application (e.g., adding the "Trial Mod" role and removing the "Applicant" role).
*   **On Deny:** Safely revert or remove roles if the user is rejected.

<figure markdown>
  ![Resolution Actions](../assets/images/applications/resolution_actions.png){ loading=lazy }
  <figcaption>Configure role additions and removals for each stage of the application.</figcaption>
</figure>

!!! warning "Permission Check"
    For the bot to assign these roles, the **TicketForge** role must be placed **higher** in your Discord Server Settings than the roles you select here.

---

## 2. Auto-Deny Missing Users *(Premium)*

Sometimes users apply for a position and then leave the server before your staff has a chance to review their submission. 

If **Auto-Deny Missing Users** is enabled, TicketForge will automatically detect if the applicant is no longer in the Discord server. It will instantly mark their pending application as "Denied" and log it, keeping your staff queue clean from ghost applications.

<figure markdown>
  ![User Leave Handling](../assets/images/applications/user_leave.png){ loading=lazy }
  <figcaption>Automatically clean up your queue if an applicant leaves the server.</figcaption>
</figure>

---

## 3. Inactivity Notifier *(Premium)*

Never let an application slip through the cracks. The **Inactivity Notifier** will automatically ping your staff if an application sits in the "Pending" state for too long.

### Configuration
1.  **Notification Channel:** The text channel where the reminder ping should be sent (usually a private staff channel).
2.  **Roles to Ping:** Select your Management or Reviewer roles.
3.  **Initial Delay:** The amount of time the application must sit idle before the first ping is sent (e.g., 24 hours).

### Repeating Reminders
If a single ping isn't enough to get your staff's attention, you can enable **Repeating Reminders**.
*   **Interval Time:** Continue to ping staff every X hours.
*   **Max Pings:** Limit how many times the reminder repeats (e.g., stop pinging after 3 reminders) to prevent endless spam if the team is genuinely busy.

<figure markdown>
  ![Inactivity Notifier](../assets/images/applications/inactivity_notifier.png){ loading=lazy }
  <figcaption>Configure smart, repeating reminders to ensure applications are reviewed promptly.</figcaption>
</figure>