---
name: Enterprise
tagline: Business plus platform, AI & SSO – as an upgrade (+40%)
order: 2
highlighted: false
groups:
  - title: Branding & automation
    features:
      - White-label with app name, accent colors and logo, incl. login page
      - Automated and risk-based campaigns
      - AI scoring of human-risk metrics with prioritized actions
      - Enterprise reporting with training progress and certificate status
  - title: Integration with existing systems
    features:
      - SAML single sign-on (ADFS, Entra ID, Keycloak, Okta …)
      - SIEM export to Splunk HEC, Elasticsearch, Microsoft Sentinel or JSON
  - title: Evidence for third parties
    features:
      - Third-party RFC 3161 timestamp on the head of the chain of evidence
      - Token stored verbatim, verifiable externally with openssl ts -verify
      - A failed stamp is kept as an anchor with status “failed”
      - Time-limited auditor access, read-only and logged separately
      - An expiry date is mandatory, privacy mode still applies
  - title: Training module (LMS)
    features:
      - Mandatory video training, self-hosted (file system or S3/MinIO)
      - Automatic course assignment on low awareness scores
      - Tamper-proof progress tracking
      - Comprehension quiz, graded server-side
      - Deadlines with reminders and escalation
      - Audit-proof training records as PDF with integrity hash
      - SCORM 1.2 import (beta)
      - xAPI 1.0.3 export to a Learning Record Store
  - title: Analysis of reported mails
    features:
      - Automatic analysis with SPF/DKIM/DMARC and an explainable score
      - Defanged URLs and attachment hashes
      - Waves group similar reports together
      - Attachment scanning via ClamAV and YARA rules
      - MISP enrichment against your own threat intel
      - Unreachable scanners count as “not scanned”
  - title: Effectiveness of your own defenses
    features:
      - Control effectiveness test measures which layer catches what
      - Eight stages from display-name spoofing to HTML smuggling
      - Sent to your own test mailbox only, enforced server-side
      - Deliberately harmless payloads – EICAR instead of malware
      - “blocked” is the good result, an IMAP issue is never a test result
      - BSI mapping per stage (APP.5.3.A4, APP.5.3.A5, NET.1.1.A3)
  - title: Reporting obligations
    features:
      - NIS2 reporting assistant with a deadline clock (24 h, 72 h, one month)
      - No automatic transmission – the output is a draft to download
      - Guided checklist, no legal advice, with a notice in every output
      - Justification required both ways, including a decision not to report
      - Parallel GDPR track with its own clock and recipient (Art. 33)
      - Escalation to named roles with deputies, exactly once per stage
  - title: Response
    features:
      - Bulk quarantine via Microsoft Graph or Postfix/Dovecot
      - Search by Message-ID only, dry run mandatory
      - Only moved, never deleted
  - title: Simulations across more channels
    features:
      - SMS via a generic HTTP gateway
      - Matrix and Nextcloud Talk as direct messages
      - USB drop without any program or script
      - Corporate devices only
---

The Enterprise add-on is an upgrade to Business – not a standalone add-on. It
costs a fixed surcharge of +40% on top of the Business price and includes all
Business features plus the following extensions.
