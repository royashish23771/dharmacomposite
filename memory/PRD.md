# PRD — Dharma Composite Private Limited Website

## Original Problem Statement
"I JUST OPEN A PRIVATE LIMITED. SO I WANT TO MAKE A WEBSITE. I AM USING GOOGLEWORKSPACE THAT DIRECTED ME TO THE SQYARESPACE WEBSITE MAKER"

User answers: Industry — FRP products & tanks manufacturing. Multi-page site. Contact form shows success message only (no email). Corporate & professional style. Company: DHARMA COMPOSITE PRIVATE LIMITED, Bhiwadi, Rajasthan 301019. Email admin@dharmacomposite.com, phone +91 8295634906. Products: FRP Tank, Storage Tank, FRP Fitting Products, FRP Hood, FRP Blower, FRP Air Pollution Control, FRP Fume System. User claims to have a logo but no file was received — placeholder SVG monogram ("DC") used; swap pending.

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui, framer-motion (kinetic reveals, parallax, hover-follow), lenis smooth scroll, react-fast-marquee. Pages: Home, About, Products, Contact (react-router-dom).
- Backend: FastAPI, /api prefix. Endpoints: GET /api/, POST /api/enquiries, GET /api/enquiries.
- DB: MongoDB (MONGO_URL/DB_NAME from env), enquiries collection (uuid id, ISO created_at).
- Images: local in /app/frontend/public/images (hero.jpg, tanks.jpg, pipes.jpg, texture.jpg).
- Design: /app/design_guidelines.json — dark slate-950 industrial, Anton/IBM Plex Sans/JetBrains Mono, safety orange #EA580C accent, blueprint grids, noise overlay.

## User Personas
- Plant/purchase managers at chemical, plating, pharma units needing FRP equipment → browse products, submit enquiry.
- The owner (Dharma Composite) → wants a credible corporate presence instead of Squarespace.

## Core Requirements (static)
1. Multi-page corporate site (Home, About, Products, Contact)
2. Showcase 7 FRP product lines
3. Contact/enquiry form → stored, success message shown (no email)
4. Display company contact details (email, phone, Bhiwadi address)
5. Corporate-professional, award-level design with premium motion

## Implemented (2026-08-13)
- Kinetic hero with masked line-by-line reveal, parallax factory bg, rotating FRP·GRP ring, spec bar
- Editorial product marquee (home + about)
- Numbered manifesto chapters (Precision Moulding / Corrosion Immunity / Engineered Chemistry)
- Bento product teaser grid (5 featured)
- Products page: 01–07 list with cursor-following image preview (desktop), spec tags
- About page: company spec sheet, parallax tank image, 3 operating principles
- Contact page: enquiry form → POST /api/enquiries → success panel with reference ID; contact details block
- Massive footer with outlined DHARMA COMPOSITE typography
- Lenis smooth scrolling, noise texture, custom scrollbar, orange selection

## Backlog / Next Tasks
- P0: Swap placeholder "DC" monogram with user's real logo (awaiting file)
- P1: Email notification on enquiry (Resend integration) — user declined initially
- P1: Admin page to view stored enquiries (GET /api/enquiries exists, unprotected — needs auth if exposed)
- P2: Real product photography from the user's plant
- P2: Google Maps embed on contact page, WhatsApp click-to-chat (+91 8295634906)
- P2: SEO meta/OG tags, sitemap, Google Workspace domain connection for go-live
