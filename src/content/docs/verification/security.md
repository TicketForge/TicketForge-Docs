---
title: Security & Anti-Alt Threat Engine
description: Deep browser telemetry, threat scoring, VPN/Tor blocking, and alt-account detection.
---

The **Web Security Engine** operates as an intelligent risk-scoring firewall. When members verify via browser, TicketForge analyzes network reputation, browser authenticity, and device telemetry to prevent raids before they happen.

---

## 1. Core Security Policy

Navigate to **Verification > Security & Anti-Alt**:

### Enforcement Modes
* **Enforce (Block):** Actively blocks users whose cumulative risk score exceeds your configured threat threshold, presenting an **Access Denied** notice.
* **Monitor Only:** Allows all users through while silently flagging suspicious telemetry and recording incident reports into your **Audit Log Channel**.

### Threat Threshold (1–100)
The cutoff score required to trigger enforcement. If a user's combined risk signals exceed this number, their session is blocked.

| Preset Profile | Threshold | Intended Environment |
| :--- | :--- | :--- |
| **Relaxed** | `85` | Large public gaming servers; only catches script-driven headless bots and obvious alts. |
| **Recommended** | `70` | Default balanced defense; blocks throwaway alts, devtool tampering, and suspicious sessions. |
| **Protective** | `55` | High-security or sensitive communities; strictly penalizes private browsing, Brave shields, and multi-accounts. |

---

## 2. Immediate Pre-Score Blocks

You can configure immediate, zero-tolerance denials that block users before threat scores are even calculated:

| Guard | What It Detects | Why It Protects |
| :--- | :--- | :--- |
| **Block VPN / Proxy / Tor** | Datacenter IP addresses, public proxies, and Tor exit nodes. | Stops ban evaders and coordinated raid bots operating through masked IPs. |
| **Block Identity-Hiding Browsers** | Browsers configured to randomize fingerprints, spoof headers, or strip WebRTC. | Prevents automated spoofing software from forging fresh browser sessions. |
| **Block Developer Tools** | Browser DevTools console actively open during verification. | Blocks attackers attempting to reverse-engineer verification network payloads. |
| **Block Incognito / Private Mode** | Private browsing sessions across Chrome, Safari, Firefox, Edge, and mobile WebViews. | Ensures device storage can reliably detect duplicate alt accounts. |

---

## 3. Blocked Countries (Geofencing)

*(Premium Feature)*

Block incoming connections from specific geographic regions:
1. Select countries from the searchable country picker (e.g., `Netherlands (NL)`, `Russia (RU)`, `China (CN)`).
2. Users originating from blocked country IP ranges are denied immediate access prior to scoring.

---

## 4. Threat Score Builder

Customize the exact point weight contributed by each detected signal:

| Risk Signal | Default Points | Detection Method |
| :--- | :--- | :--- |
| **VPN / Proxy / Tor Node** | `+40` | Real-time ASN and datacenter IP threat intelligence. |
| **Likely Alt Account** | `+40` | Device fingerprint strongly matches a previously verified Discord account on the server. |
| **Possible Alt Account** | `+20` | Secondary hardware/network parameters overlap with an existing account. |
| **Bot-Like Behavior** | `+40` | `navigator.webdriver` flags, synthetic mouse movements, or programmatic DOM injection. |
| **Unusual Behavior** | `+30` | Form submitted faster than human thresholds (<1.2 seconds) or without input events. |
| **Identity-Hiding Browser** | `+30` | Browser masking headers or spoofing canvas/WebGL signatures. |
| **Incognito Mode** | `+15` | Browser storage quota and filesystem API restrictions. |
| **Developer Tools Open** | `+15` | Viewport dimension variance analysis. |
| **Suspicious Session (High)** | `+40` | Multiple conflicting hardware/timezone/locale indicators. |
| **Suspicious Session (Moderate)** | `+20` | Minor telemetry divergence from standard operating systems. |