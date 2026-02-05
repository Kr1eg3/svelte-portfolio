# Portfolio — SvelteKit + Cloudflare Pages

Personal portfolio website inspired by [thavlik.dev](https://thavlik.dev).

## Stack

- **SvelteKit 2** — framework (SSR + static)
- **Cloudflare Pages** — hosting (free plan)
- **Cloudflare Image Resizing** — on-the-fly image resizing via `/api/thumbnail`

---

## Quick Start (local)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Project Structure

```
portfolio/
├── src/
│   ├── app.html              ← HTML template
│   ├── app.css               ← Global styles
│   ├── lib/
│   │   ├── data.js           ← ★ PROJECT DATA (edit here!)
│   │   └── components/
│   │       └── ProjectCard.svelte
│   └── routes/
│       ├── +layout.svelte    ← Root layout
│       ├── +page.svelte      ← Main page
│       └── api/
│           └── thumbnail/
│               └── +server.js ← Image resizing API
├── static/
│   ├── favicon.svg
│   ├── robots.txt
│   └── media/                ← Put screenshots/videos here
├── svelte.config.js
├── vite.config.js
└── package.json
```

---

## Adding a Project

Open `src/lib/data.js` and add an object to the `projects` array:

```js
{
    id: 'my-project',
    title: 'My Cool Project',
    subtitle: 'Short description',
    status: 'open-source',       // 'open-source' | 'proprietary' | 'private'
    url: 'https://github.com/...', // header link (or null)
    media: {
        type: 'video',           // 'video' | 'image'
        src: '/media/demo.webm'  // path to file in static/media/
    },
    description: 'Full description...',
    tags: ['C++', 'Vulkan'],
    links: [
        { label: 'View Source', href: 'https://github.com/...' }
    ]
}
```

### Media Files

- Video: use `.webm` (VP9) — lightweight and supported by all browsers
- Images: `.webp` — optimal format
- Place files in `static/media/`
- For external images use the API: `/api/thumbnail?src=URL&w=960&h=540`

---

## Deploy to Cloudflare Pages

### Option A: via Git (recommended)

1. Push the project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOU/portfolio.git
   git push -u origin main
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project

3. Connect the GitHub repository

4. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `.svelte-kit/cloudflare`
   - **Node version:** 20 (set via environment variable `NODE_VERSION=20`)

5. Click "Save and Deploy"

6. The site will be available at `https://portfolio-xxx.pages.dev`

### Option B: via CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Log in
wrangler login

# Build the project
npm run build

# Deploy
wrangler pages deploy .svelte-kit/cloudflare --project-name=portfolio
```

---

## Custom Domain

1. Buy a domain (Cloudflare Registrar, Namecheap, Porkbun — any provider)

2. If the domain is NOT on Cloudflare:
   - Transfer DNS to Cloudflare (free)
   - Or add a CNAME record pointing to `portfolio-xxx.pages.dev`

3. In Cloudflare Dashboard → Pages → your project → Custom domains → Add

4. SSL certificate is issued automatically

---

## Image Resizing (optional)

The `/api/thumbnail` API automatically resizes external images on Cloudflare.
This requires a Cloudflare Pro plan ($20/mo) with Image Resizing enabled.

If you don't need resizing — just place optimized images in `static/media/`.
The API route will work as a simple proxy.

---

## Customization

### Change data
- `src/lib/data.js` → projects, skills, contacts, bio

### Change colors
- `src/app.css` → CSS variables in `:root`

### Change fonts
- `src/app.css` → replace Google Fonts import
- Update `font-family` in styles

### Add analytics
Add a script to `src/app.html` before `%sveltekit.head%`:
```html
<!-- Cloudflare Web Analytics (free) -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```
