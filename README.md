# Adealventure Tours & Travel website

Static website for Adealventure Tours & Travel (Instagram: [@adealventures](https://www.instagram.com/adealventures/)):
safaris, beach holidays and group trips across Kenya and East Africa.

Built with React + TypeScript + Vite. No server or database: the build output in `dist/` is plain
HTML, CSS, JS and images that run on any static host.

## Run it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Updating content

| What | Where |
| --- | --- |
| Trips and departure dates | `src/data/trips.ts` |
| Maasai Mara camp prices | `src/data/maraCamps.ts` |
| Phone, WhatsApp, M-Pesa till, domain, Instagram | `src/data/site.ts` |
| Photos and logo | `public/images/` |

- Trips whose `endDate` has passed disappear from the site automatically.
- `sample: true` on a trip shows a "sample" tag. Remove it once the trip is confirmed.
- To add a trip, copy an existing entry in `trips.ts`, give it a new `slug` and edit the fields.
  Its page is at `#/trip/<slug>`.
- The beach images (`beach-*.svg`) are illustrated placeholders. Drop real photos into
  `public/images/` and point the trip's `image` field at them.

## Structure

```
src/
  components/   Header, Hero (animated savanna canvas), Departures, MaraExplorer,
                Ways, BookingSteps, InstagramStrip, Footer, WhatsApp buttons
  pages/        HomePage, TripPage
  data/         site.ts, trips.ts, maraCamps.ts   ← all editable content
  lib/          hash routing, scroll reveal, date/price formatting
  styles/       global.css (design tokens, light + dark)
```

## Deploying

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
One-time setup: in the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.

To use the domain `adeaventuretoursandtravel.com` once it is registered:
1. Add a file `public/CNAME` containing `adeaventuretoursandtravel.com`.
2. At the domain registrar, point the domain at GitHub Pages (see GitHub's custom domain docs).
3. Set the custom domain under **Settings → Pages**.

Netlify or Vercel also work: build command `npm run build`, output folder `dist`.
