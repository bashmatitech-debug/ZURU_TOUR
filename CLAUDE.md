# CLAUDE.md

This file orients any engineer (human or AI) working on this repository. It
explains what ZURU TOUR is, how this codebase is organized, the rules for
working in it, and exactly what is and isn't in scope right now.

## What ZURU TOUR is

ZURU TOUR is an early-stage Nigerian tourism and local-discovery startup.
The long-term product vision is:

**Discovery → Explore → Connect → Book → Pay → Review**

This repository is the **MVP v0.1 website**, which covers only the first
part of that vision: **Discovery + Connection**. The site helps travellers
discover Nigeria's destinations, attractions, businesses, hotels,
restaurants, food, culture, events, experiences, and local stories, and
gives local businesses a way to be found. Booking, payment, and review
functionality come later, once discovery is validated with real users.

The source of truth for product direction beyond this codebase is the
**Nigeria Tour Master Project Document** (Google Docs). If this file and
that document ever disagree on product direction, the Master Project
Document wins — update this file to match it, don't silently diverge.

## Current MVP scope (v0.1)

**In scope:**
- Mobile-first marketing/discovery website (this repo)
- Homepage, and placeholder routes for Explore, Destinations, Businesses,
  Events, About
- Reusable UI component foundation
- Static/local placeholder content (`src/lib/content.ts`)

**Explicitly out of scope for this milestone** — do not add without an
explicit product decision to move to the next phase:
- Database / persistence layer
- Authentication or user accounts
- Payments or booking flows
- The mobile app
- Role-based access (Founder, Administrator, Operator, Contributor,
  Business Partner, Customer) — planned, not built
- Maps/geolocation integrations
- Any third-party service that requires API keys or secrets

When any of the above becomes necessary, introduce it deliberately and
document the decision — don't bolt it on as a side effect of an unrelated
change.

## Architecture

- **Framework:** Next.js 14, App Router, TypeScript, strict mode.
- **Styling:** Tailwind CSS only. No CSS-in-JS, no component libraries.
  Design tokens (colors, fonts) live in `tailwind.config.ts`.
- **Rendering:** Server Components by default. Only reach for
  `"use client"` when a component genuinely needs interactivity/state —
  nothing in the current MVP shell requires it.
- **Content:** Local TypeScript constants in `src/lib/content.ts`, typed
  via `src/types`. This is a deliberate placeholder for a future CMS or
  database — the types are written so swapping the data source later
  doesn't require changing the components that consume it.
- **No global state management.** Not needed yet; don't add one
  speculatively.

### Folder structure

```
src/
  app/            Routes (App Router). One folder per route segment.
  components/
    layout/       Header, footer — used on every page
    ui/           Generic, reusable primitives (Button, Container, ...)
    home/         Sections used only on the homepage
  lib/            Config, nav links, placeholder content
  types/          Shared TypeScript types for content shapes
```

Conventions to follow when extending this:
- A component used on more than one route → `components/ui/`.
- A component specific to one route/page → a folder under `components/`
  named after that route (mirroring `components/home/`).
- Anything that will eventually come from a database goes through
  `src/lib` + `src/types` first, even while it's still a static constant —
  this keeps the eventual data-layer swap low-risk.

## Development rules

1. **Keep the MVP boundary.** Don't add database, auth, payments, or the
   mobile app inside this milestone. See "Current MVP scope" above.
2. **No unnecessary dependencies.** Before adding a package, ask whether
   the App Router / React / Tailwind can already do it. This app should
   stay light.
3. **Never commit secrets.** No `.env` files with real values are
   committed — `.gitignore` already excludes `.env*`. If a future
   integration needs credentials, use `.env.local` and document the
   required variable names (not values) in the README.
4. **Mobile-first.** Design and test the small viewport first; expand up
   with Tailwind's responsive prefixes (`sm:`, `lg:`), not the other way
   around.
5. **Design intent, not templated defaults.** This site should read as
   distinctly Nigerian-tourism, editorial in tone — not a generic SaaS
   template. See the design tokens in `tailwind.config.ts` before
   introducing new colors or fonts, and keep new UI consistent with them.
6. **Placeholder routes stay honest.** Routes not yet built out use
   `components/ui/PlaceholderSection.tsx` and say plainly that the page is
   scaffolded, not finished — don't fake finished content.
7. **Git workflow:** work on feature branches, never commit directly to
   `main`. Open a pull request for review rather than merging
   automatically.

## Deployment

Deploys as a standard Next.js app to Vercel or any Node.js host that
supports Next.js. No environment variables are required at this stage.

## Roadmap (for context only — not this milestone)

1. Project setup *(this repo)*
2. Website foundation *(this repo)*
3. Homepage *(this repo)*
4. Explore / destination / business detail pages
5. Partner / contributor pages
6. Mobile optimization pass
7. Testing
8. Deployment
9. Real-user validation
10. MVP v0.2 planning
