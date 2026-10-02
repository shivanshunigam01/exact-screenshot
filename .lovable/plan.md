# ALBA WELLNESS demo build

## What to build
- A premium, responsive public ALBA WELLNESS site with home, story, treatments, offers, gallery, reviews and contact views, plus a clear INFIYOURA technology-partner credit.
- A complete mobile-first booking journey: treatment, date/time, therapist, add-ons, customer details, simulated payment and confirmation, with demo invoices and appointment management.
- Customer, staff and admin demo areas with role-based entry, realistic connected sample data, appointments, services, people, invoices, offers, reviews, reports, notifications and editable settings.
- Persist demo edits locally; make primary actions functional, provide feedback, and include a reset to restore the initial demo data. No real authentication, payment, messaging or backend services.

## Visual direction
Use the brief's committed premium Korean wellness direction: charcoal and near-black, warm ivory, champagne accents, editorial serif headlines with modern sans-serif interface text, cinematic spa photography, generous whitespace, calm motion and responsive navigation.

## Technical approach
- Build on the existing TanStack Start routes and shadcn UI primitives; keep the public site at `/` and create the requested shareable public, booking, customer and demo-management routes.
- Use typed mock data and browser-safe local persistence for the connected demo workflows. Keep all demo-only behavior client-side and visibly labeled only inside the customer/admin areas.
- Use the existing Lucide icons and charting dependency, project design tokens, accessible controls, and route-specific metadata.

## Acceptance checks
- The homepage is a finished ALBA-branded experience, not a placeholder; booking is reachable and its state flows through confirmation and customer/admin views.
- Key navigation and demo controls work at phone, tablet and desktop widths without horizontal overflow.
- Preview build and available tests pass; verify the main route and a primary booking interaction in the running preview.
