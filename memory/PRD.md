# BrightCasa Marketing Website — PRD

## Original Problem Statement
Confirm workspace was imported from `maryusabest1966/brightcasa-web` (branch `main`, commit `721fc223425625c525fe289f7fd21ef28c0b6b26`). Iteratively update the BrightCasa static HTML/CSS marketing website to:
- Add a FamilyNorth™ Coming Soon page
- Update GetSorted legal/privacy policies
- Build an account deletion frontend page hooked to a Render backend
- Add site-wide favicons with cache-busting
- Update GetSorted beta messaging to reflect the live public TestFlight beta

## User Persona
BrightCasa LLC (Foley, Alabama) — owner iterates on the marketing site directly. All git writes go through the "Save to GitHub" button (never CLI).

## Architecture
- Plain static HTML5 + CSS3 served via Netlify at brightcasa.co
- No build system, no React/Next.js, vanilla JS inside `<script>` tags only
- External API integrations (fetch only):
  - Railway: `POST https://getsorted-production.up.railway.app/early-access/subscribe` (beta signup)
  - Render: `POST https://getsorted-emergent.onrender.com/api/account-deletion/{request,confirm}` (account deletion)
- Pages: `index.html`, `products.html`, `getsorted.html`, `familynorth.html`, `spendbright.html`, `about.html`, `support.html`, `privacy.html`, `getsorted-privacy.html`, `getsorted-terms.html`, `getsorted-beta.html`, `getsorted-account-deletion.html`
- Shared assets: `assets/css/styles.css`, `assets/images/`

## Constraints
- Do NOT introduce build tools (Webpack/React/Next.js). Keep vanilla HTML/CSS/JS.
- Do NOT use `git commit`/`git push` from CLI — user clicks "Save to GitHub".
- This workspace does NOT contain the GetSorted mobile app source code.

## Completed Work (Feb 2026)
- FamilyNorth Coming Soon page + product card grid
- Responsive 3-column product cards
- Site-wide footer trademark line
- Removed "Moving Mode" feature from `getsorted.html`
- Rewritten GetSorted Privacy Policy + Terms of Use (7-day deletion)
- Account deletion page wired live to Render backend
- Site-wide favicons with `?v=2` cache-busting (12 pages)
- **GetSorted beta live launch update (Feb 2026)**:
  - iPhone CTA "Join the iPhone Beta" → `https://testflight.apple.com/join/HyEvpM5S`
  - Non-clickable "Google Play Beta — Coming Soon" secondary status
  - Status line: "Beta is live" + "iPhone available now · Android coming soon"
  - Approved hero copy applied: "A clear view of everything you own." / "Photograph, organize, and find it all with GetSorted."
  - `getsorted-beta.html` reframed as email list for Android + future updates (form itself untouched)
  - `index.html` product card status updated
  - CSS additions: `.beta-status`, `.beta-status-sub`, `.beta-cta-heading`, `.beta-cta-copy`, `.beta-cta-buttons`, `.btn-disabled-cta`

## Backlog (P1 / P2)
- P1: Public Android open-testing link (Google Play) — swap the disabled `.btn-disabled-cta` for a live CTA when available
- P2: Track TestFlight click-throughs (analytics) once Netlify analytics or a lightweight pixel is chosen
- P2: FamilyNorth beta signup wiring when that product enters beta
- P2: SpendBright product page expansion when that product enters beta

## Testing Notes
- Static HTML — verified via `mcp_screenshot_tool` at desktop (1440px) and mobile (390px) widths
- No `testing_agent` runs required
- No credentials — external APIs handle their own auth
