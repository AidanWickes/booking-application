# Campus Bookings

Book study rooms, IT kit and sports facilities at South Devon College. Tutor demo project for SOUD2528 Full Stack Development.

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 (via PostCSS) · TypeScript.

## Getting started

```bash
npm install
echo 'SECRET_MESSAGE="only the server knows"' > .env.local   # used by /boundary; git-ignored
npm run dev   # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

Restart `npm run dev` after changing `next.config.ts`, `postcss.config.mjs`, `.env.local` or installed packages. If it then fails with `Cannot find module`, stop it, delete `.next/dev/cache/turbopack` and start it again.

## Where things live

```
app/
├─ layout.tsx            header, nav, footer, fonts, title template
├─ globals.css           theme tokens (colours, font) and the period-grid utility
├─ icon.svg              favicon / brand mark
├─ page.tsx              /
├─ not-found.tsx         404
├─ _components/          shared components (not routes)
│  ├─ nav-links.tsx      client component, highlights the current page
│  └─ resource-card.tsx
├─ resources/            /resources and /resources/[id]
├─ bookings/             /bookings
└─ boundary/             /boundary (server vs client demo)
lib/resources.ts         Resource type, sample data, getResource()
```

Folders starting with `_` are private in the App Router, so they never become routes.

## Theme

Colours are Tailwind tokens defined in `app/globals.css` (`bg-ink`, `text-ink-soft`, `bg-room`, `bg-equipment`, `bg-sport`, …). Give an element `data-type="room" | "equipment" | "sport"` and use `bg-(--block)` / `text-(--on-block)` to colour it by resource type.

## Branches

`main` matches the students' code at the end of Session 2 (see `AGENTS.md`). Theme work lives on `feature/theme`.

Next.js 16 differs from older versions: check `node_modules/next/dist/docs/` before writing code.
