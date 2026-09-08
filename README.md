# Second Coat

Studio site for [secondcoat.games](https://secondcoat.games) — classic PC game restoration.

## Stack

- [Astro](https://astro.build) static site
- GitHub Pages deploy via Actions
- Custom domain: `secondcoat.games`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Config

Edit `src/data/site.ts` for contact email and site metadata.
Edit `src/data/work.ts` to add future restoration projects (`/work/[slug]`).

## Deploy

Push to `main`. GitHub Actions builds and publishes `dist/` to GitHub Pages.

Repo settings required:

1. **Pages** → Source: GitHub Actions
2. Custom domain: `secondcoat.games` (CNAME is in `public/`)
3. DNS: `A`/`AAAA` or `CNAME` records for GitHub Pages
