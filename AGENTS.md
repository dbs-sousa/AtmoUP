# Architecture rules

- Use a shared LeadForm for quote and contact submissions so validation, attribution and consent remain consistent.
- Submit leads only to the configured external VITE_LEAD_ENDPOINT; its server must independently validate the documented payload and reject spam.
- Capture bounded campaign parameters in sessionStorage on route changes; never store contact details there or include them in conversion events.
- Emit generate_lead on the thank-you page only for a successful, unconsumed submission marker to avoid counting direct visits and reloads.