# Ironbark Studio — demo site

Fictional boutique reformer Pilates and strength studio, Marrickville NSW. Built as a
portfolio demo for Voltion.

Next.js 15 (App Router, static export) + Tailwind CSS v3. Same stack as the Itek Itek and
Salon Mara builds: fonts (Archivo + Newsreader) are self-hosted as `.woff2` files in
`public/fonts` rather than pulled from Google Fonts at build time, so `npm run build` needs
no internet access beyond npm install. No database, no payments, no API routes — the whole
thing exports to flat HTML.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes static site to ./out
```

## Editing content

Everything a client would change is in **`content/site.ts`** — business details, hours,
class types, the weekly timetable, all pricing, the founder bio, and the image register.
No business content is hardcoded in the page components.

A few things worth knowing:

- **Timetable and class descriptions can't drift apart.** Each session in `schedule`
  references a `classTypes` id, so a class renamed in one place is renamed everywhere.
- **Pricing is display-only.** Nothing is charged on this site. Payment happens on the
  booking platform or in the studio.

## Photos

Every image on the site is registered in `imageSlots` in `content/site.ts`. While a slot
has no `src`, the site renders a labelled placeholder showing the slot ID, the shot
required, the aspect ratio, and an Unsplash search term.

To go live with a photo:

1. Drop the file into `public/images/`
2. Set `src: '/images/your-file.jpg'` on that slot
3. Adjust `alt` if the shot differs from what was planned

The placeholder disappears and the photo takes its place. Nothing else changes.

## Booking

The Book page has two paths:

1. **Book instantly** → hands off to Mindbody. Set the real timetable URL at
   `booking.platform.url`.
2. **Enquiry form** → a plain HTML POST. Set `booking.enquiryFormEndpoint` to a Formspree,
   Basin or Netlify Forms endpoint. While it's empty the form renders disabled with a note,
   rather than silently swallowing enquiries.

Mindbody is the placeholder platform. Momence, Hapana, Clubworx and Glofox all work the
same way — swap the name and URL in `booking.platform`.

## Deploying

Static export to Vercel via the GitHub app:

```bash
git init
git add -A
git commit -m "Ironbark Studio demo"
git branch -M main
git remote add origin git@github.com:EpicDanYT/ironbark-studio-demo.git
git push -u origin main --force
```

Then import the repo on Vercel. Framework preset: **Next.js**. No environment variables,
no build settings to change — `output: 'export'` in `next.config.mjs` handles it, and
Vercel serves `out/` automatically.

`trailingSlash: true` is set so the exported directory structure resolves correctly on any
static host, not just Vercel.

## Design notes

- **Palette:** pine `#0F241D`, chalk `#F3F4F0`, cobalt `#2340F2`, sage, stone. Cobalt is
  the only accent and it's used sparingly — buttons, section rules, prices.
- **Type:** Archivo 800 for display, Newsreader for body copy.
- **Motion:** one page-load reveal on the hero. Nothing else animates on scroll.
  `prefers-reduced-motion` is respected.
- The mobile menu is a `<details>` element, so no client-side JavaScript ships for it.
