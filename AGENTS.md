# Project Architecture Rules
- Keep the ALBA demo client-side with typed mock data and browser persistence, because the approved product scope explicitly excludes a real backend.
- Use TanStack file-based routes with a shared Alba experience shell, because public, customer, staff and management views need consistent navigation and direct links.
- Define brand styling in `src/styles.css` semantic tokens and reusable utilities, because the luxury visual system should remain consistent across all views.
