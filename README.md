## Tristate Stone Protection — Internal README

*(for my eyes only)*

### TODO:

- Mobile-specific UI tweaks
- Domain name purchase
- transfer to Barbara's account
- SEO (sitemap / robots.txt, etc.)

---

### Quick Start 🛠️

```bash
# install deps
npm i

# run dev server
npm run dev    # http://localhost:3000

# build & generate sitemap / robots.txt
npm run build
npm start
```

---

### Tech Stack

| Layer         | Choice                                            | Notes                                          |
|---------------|---------------------------------------------------|------------------------------------------------|
| **Framework** | **Next.js 14 (pages router)**                     | Simpler than App Router for a 1‑page brochure. |
| **Runtime**   | Vercel                                            | Auto‑SSL + edge CDN.                           |
| **Styling**   | Tailwind CSS                                      | Utility‑first; see `globals.css` for tweaks.   |
| **Icons**     | @heroicons/react                                  | Only used for AntiEtch blue checkmarks.        |
| **Light‑box** | yet‑another‑react‑lightbox (Zoom + Video plugins) | Handles image zoom & inline video playback.    |

---

### Component Notes

| Component        | Gotchas / Customization                                                                                                                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero**         | Background video in `/public/videos/hero.mp4` (muted, loop). Overlay dimming via `bg-black/50`.                                                                                                           |
| **AntiEtch**     | Benefits array in `site.ts`. Split auto; center alignment. Uses `CheckCircleIcon`.                                                                                                                        |
| **HomeGallery**  | • 2×2 grid (`max-w-[820px]`). <br>• First 3 tiles open light‑box (`cursor-zoom-in`). <br>• 4ᵗʰ tile = blurred link to `/gallery` with underline animation.                                                |
| **Gallery Page** | • Big square tiles (`aspect-square`, gap‑12). <br>• Videos: thumbnail poster + controls; open in light‑box with sound. <br>• Light‑box slides typed as `Slide[]`; portrait videos keep aspect `720×1280`. |
| **Layout / SEO** | OpenGraph meta + JSON‑LD LocalBusiness schema; sitemap generated post‑build by `next-sitemap`.                                                                                                            |

---

### Tailwind Tips 🖌️

| Utility          | Purpose                                           |
|------------------|---------------------------------------------------|
| `aspect-square`  | Keeps grid tiles perfect squares.                 |
| `cursor-zoom-in` | Shows magnifier cursor on zoomable imgs.          |
| `scroll-mt-16`   | Offset for anchor jump under fixed nav (\~64 px). |

---

### To‑Do / Future Ideas 💡

* **Masonry grid** for gallery (CSS columns) if photo set grows.
* **Lighthouse**: ensure all images have `alt`; run `npm run build && npx lighthouse ...`.

---

### Deployment Steps 🚀

1. Push to GitHub `main`.
2. Vercel auto‑deploys. Environment vars are set via dashboard.
3. After domain name purchase, verify `/sitemap.xml` & `/robots.txt`.
4. In Google Search Console, fetch as Google & submit sitemap.

---

*Last updated: 25 July 2025*
