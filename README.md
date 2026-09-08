# ZURU TOUR

ZURU TOUR is a Nigerian tourism and local-discovery platform. This repository
contains the **MVP v0.1 website** — a mobile-first, content-led site that
helps people discover Nigeria's destinations, culture, food, events, and the
local businesses behind them.

This is the **discovery + connection** stage of the product. Booking,
payments, accounts, and the mobile app are intentionally out of scope for
this milestone — see [`CLAUDE.md`](./CLAUDE.md) for the full scope and
roadmap.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- No database, auth, or payments yet — content is local/static for now

## Getting started

Requires Node.js 18.18+ (LTS recommended) and npm.

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build      # production build
npm run start      # run the production build locally
npm run lint        # ESLint
npm run typecheck   # TypeScript, no emit
```

## Project structure

```
src/
  app/                 # Next.js App Router routes
    explore/           # /explore
    destinations/      # /destinations
    businesses/         # /businesses
    events/            # /events
    about/             # /about
    layout.tsx         # root layout (fonts, header, footer)
    page.tsx           # homepage
  components/
    layout/            # header, footer
    ui/                # reusable primitives (Button, Container, Postcard, ...)
    home/               # homepage-only sections (Hero, HighlightShelf, ...)
  lib/                 # site config, nav links, placeholder content
  types/               # shared content types
```

The structure is intentionally flat and easy to extend: new routes are new
folders under `src/app`, new shared UI goes in `src/components/ui`, and
route-specific sections get their own folder under `src/components`
(following the pattern used by `home/`).

## Deployment

The app is a standard Next.js project and deploys as-is to
[Vercel](https://vercel.com/) (recommended) or any Node.js hosting platform
that supports Next.js. No environment variables are required for this MVP —
none should be added until a real integration (database, auth, payments,
maps, etc.) needs one, and any that are added must go in an untracked
`.env.local` file, never committed.

## Project scope and rules

See [`CLAUDE.md`](./CLAUDE.md) for the full project description,
architecture notes, development rules, and current MVP boundaries.
