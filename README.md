<div align="center">

# Tristate Stone Protection

*simple Next .js marketing site I made for a client's business*

</div>

---

## ✨ Live demo

[Live Demo →](https://www.stoneprotectionpro.com)

*(runs on Vercel’s global Edge Network – first load < 100 ms in the US)*

---

## ⚡️ Features

| Section / Feature   | Highlights                                                                                                                                                                                         |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Video Hero**      | Autoplay + loop background; headline & CTA overlay.                                                                                                                                                |
| **Services**        | 3-card grid with subtle hover shadow, tooltip on “Tri-State” (NY · NJ · CT).                                                                                                                       |
| **MORE™ AntiEtch™** | Two-column bullet list, responsive to single column on mobile.                                                                                                                                     |
| **Gallery**         | Mini 2 × 2 preview on home → full gallery page. Images & portrait videos open in [yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) (Zoom + Video plugins). |
| **Mobile nav**      | Hamburger menu with smooth slide/fade animation.                                                                                                                                                   |
| **SEO**             | Open Graph tags, JSON-LD `LocalBusiness` schema, dynamic sitemap/robots via `next-sitemap`.                                                                                                        |
| **Accessibility**   | Semantic headings, keyboard-navigable nav, visible focus rings.                                                                                                                                    |

---

## 🛠️ Quick start

```bash
# 1. Install dependencies
npm i

# 2. Dev server
npm run dev               # http://localhost:3000

# 3. Production build + sitemap/robots
npm run build
npm start
```

---

## 🏗️ Tech stack

| Layer        | Choice                         | Notes                                                                          |
|--------------|--------------------------------|--------------------------------------------------------------------------------|
| Front-end    | **Next.js 14 (pages router)**  | Perfectly fine for a brochure; no need for App Router/React Server Components. |
| Styling      | **Tailwind CSS**               | Utility-first. Global tweaks in `styles/globals.css`.                          |
| Icons        | **@heroicons/react**           | Blue check-circle bullets, hamburger icon.                                     |
| Media Viewer | **yet-another-react-lightbox** | Zoom + Video plugins handle image zoom & inline MP4 playback.                  |
| Hosting      | **Vercel**                     | Zero-config deploy, free edge CDN, auto-SSL.                                   |

---

## 🗂️ Important folders

```
public/                static assets (logo, images, videos)
src/
  components/          UI building blocks
  pages/               Next.js pages   (index, gallery)
  data/site.ts         Copy + gallery arrays
  styles/globals.css   Tailwind config tweaks
```

---

## 🎨 Tailwind cheat-sheet

| Utility            | Why we use it                                             |
|--------------------|-----------------------------------------------------------|
| `aspect-square`    | Ensures gallery tiles stay perfect squares on any screen. |
| `cursor-zoom-in`   | Shows magnifier cursor over light-box images.             |
| `scroll-mt-16`     | Offsets anchor jumps under the fixed navbar (\~64 px).    |
| `duration-[250ms]` | Arbitrary duration for smooth dropdown animation.         |

---

## 🚀 Deploy notes

1. **Push to `main`** → Vercel auto-builds.
2. Add a custom domain in **Dashboard ▸ Settings ▸ Domains**.
3. Verify `/sitemap.xml` & `/robots.txt` once DNS propagates.
4. Submit sitemap in Google Search Console if SEO is important.

*(No environment variables needed – site is static.)*

---

## 📌 Roadmap / nice-to-haves

* Masonry (Pinterest-style) gallery layout when image count grows
* CMS hook-up (Sanity, Payload) for client-editable copy & photos
* Lighthouse pass ≥ 95 on mobile after image compression

---

##### License

GPL-3.0 — free to use, modify, and deploy.
*If you fork, please swap out the branding/logo and replace images and other copyrighted material that isn’t yours.*

---

<sub>Last updated: 30 July 2025</sub>
