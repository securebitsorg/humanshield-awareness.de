---
name: Core
tagline: Free, open source and self-hosted
order: 0
highlighted: false
groups:
  - title: Templates
    features:
      - HTML or Markdown editor with live preview
      - Personalization variables in subject, HTML and text
      - Preview with sample data
      - Attachments added manually and sent with the campaign
  - title: Recipient groups
    features:
      - Reusable lists with position, department and criticality
      - Populate via manual entry or CSV
      - Flagging of management bodies (§ 38 BSIG)
  - title: Sending profiles
    features:
      - SMTP profiles with sender identity and test mail
      - Provider-independent (IONOS, Hetzner, Mailgun, SES, Postmark …)
      - Global fallback SMTP without a dedicated profile
  - title: Delivery
    features:
      - Allowlisting generator for Exchange Online, Postfix, Proofpoint, Sophos and Barracuda
      - Delivery self-test via the exact path the campaign will take
      - Delivery diagnostics with per-recipient SMTP status codes
      - Greylisting detection from three temporary rejections onwards
      - Checks SPF, DMARC and duplicate records of the sender domain
      - A delivery analysis, not an analysis of people
  - title: Landing pages
    features:
      - Target pages as HTML or Markdown
      - Data capture, credential harvesting and redirect
      - Forms automatically rewired to the tracking URL
  - title: Campaigns
    features:
      - Assistant combining template, profile, landing page and groups
      - Optional scheduling
      - Re-run for incompletely delivered campaigns
  - title: Campaign preflight
    features:
      - Mandatory dialog before every launch with recipient count, timing and findings
      - Quiet hours, blackout windows and a per-person cooldown (default 30 days)
      - Time zone per instance as an IANA name, UTC by default
      - Risk class of the lure topic, maintained on the template
      - Four-eyes approval for high risk, enforced in the database as well
      - Group exclusions right in the dialog, effective at send time
  - title: Tracking & results
    features:
      - Per-recipient tracking token in links and pixel
      - Send, open, click and form data with timestamps
      - Per-campaign results page with CSV export
      - Control-center dashboard with risk score (0–100, traffic light)
      - Human Risk Management across all campaigns
      - Management report with campaign comparison
  - title: Users & roles
    features:
      - Roles administrator, data protection officer and user
      - Local login and optional OIDC/SSO (Authentik, Keycloak, Entra ID, Okta …)
      - Two-factor authentication via app or email code, plus backup codes
      - 2FA enforceable – for everyone or for administrators only
      - Audit log of logins and system changes
  - title: Chain of evidence
    features:
      - Hash chaining of every audit entry (SHA-256, gapless position)
      - Chain status in the dashboard, a break is named with its position
      - Evidence package as ZIP with manifest and bilingual verification guide
      - Standalone verifier – a single file, standard library only
      - Separate retention period for audit content, chaining kept as a tombstone
      - Access for administrators and the data protection officer
  - title: Privacy & co-determination
    features:
      - Privacy mode blocks individual-level evaluations
      - k-anonymity for group evaluations (default 5)
      - Four-eyes approval for temporary lifting
      - Retention period with automatic anonymization
      - Client fingerprinting only after explicit opt-in
      - Templates for works agreement and privacy notice
  - title: Operations
    features:
      - Docker Compose (rootless, hardened) with Caddy and automatic TLS
      - PostgreSQL and Redis, all data stays in your own installation
      - German and English, light and dark mode
---

The open-source foundation of SentryMail – free to use and self-hostable.
It includes all the essentials to get started; Business and Enterprise build on top.
