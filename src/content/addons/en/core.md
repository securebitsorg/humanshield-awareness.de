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
      - Two-factor authentication via app or email code
      - Audit log of logins and system changes
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
