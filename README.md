# Portfolio — SvelteKit + Cloudflare Pages

Персональное портфолио в стиле [thavlik.dev](https://thavlik.dev).

## Стек

- **SvelteKit 2** — фреймворк (SSR + статика)
- **Cloudflare Pages** — хостинг (бесплатный план)
- **Cloudflare Image Resizing** — ресайз картинок на лету через `/api/thumbnail`

---

## Быстрый старт (локально)

```bash
# 1. Установи зависимости
npm install

# 2. Запусти dev-сервер
npm run dev

# 3. Открой http://localhost:5173
```

---

## Структура проекта

```
portfolio/
├── src/
│   ├── app.html              ← HTML-шаблон
│   ├── app.css               ← Глобальные стили
│   ├── lib/
│   │   ├── data.js           ← ★ ДАННЫЕ ПРОЕКТОВ (редактируй тут!)
│   │   └── components/
│   │       └── ProjectCard.svelte
│   └── routes/
│       ├── +layout.svelte    ← Root layout
│       ├── +page.svelte      ← Главная страница
│       └── api/
│           └── thumbnail/
│               └── +server.js ← API ресайза картинок
├── static/
│   ├── favicon.svg
│   ├── robots.txt
│   └── media/                ← Сюда клади скриншоты/видео
├── svelte.config.js
├── vite.config.js
└── package.json
```

---

## Как добавить проект

Открой `src/lib/data.js` и добавь объект в массив `projects`:

```js
{
    id: 'my-project',
    title: 'My Cool Project',
    subtitle: 'Short description',
    status: 'open-source',       // 'open-source' | 'proprietary' | 'private'
    url: 'https://github.com/...', // ссылка в заголовке (или null)
    media: {
        type: 'video',           // 'video' | 'image'
        src: '/media/demo.webm'  // путь к файлу в static/media/
    },
    description: 'Full description...',
    tags: ['C++', 'Vulkan'],
    links: [
        { label: 'View Source', href: 'https://github.com/...' }
    ]
}
```

### Медиа-файлы

- Видео: используй `.webm` (VP9) — лёгкий и поддерживается всеми браузерами
- Изображения: `.webp` — оптимальный формат
- Клади файлы в `static/media/`
- Для внешних изображений используй API: `/api/thumbnail?src=URL&w=960&h=540`

---

## Деплой на Cloudflare Pages

### Вариант A: через Git (рекомендуется)

1. Запушь проект на GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOU/portfolio.git
   git push -u origin main
   ```

2. Зайди на [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project

3. Подключи GitHub-репозиторий

4. Настройки сборки:
   - **Build command:** `npm run build`
   - **Build output directory:** `.svelte-kit/cloudflare`
   - **Node version:** 20 (задай через Environment variable `NODE_VERSION=20`)

5. Нажми "Save and Deploy"

6. Сайт будет доступен по адресу `https://portfolio-xxx.pages.dev`

### Вариант B: через CLI

```bash
# Установи Wrangler CLI
npm install -g wrangler

# Залогинься
wrangler login

# Собери проект
npm run build

# Задеплой
wrangler pages deploy .svelte-kit/cloudflare --project-name=portfolio
```

---

## Подключение домена

1. Купи домен (Cloudflare Registrar, Namecheap, Porkbun — любой)

2. Если домен НЕ на Cloudflare:
   - Перенеси DNS на Cloudflare (бесплатно)
   - Или добавь CNAME-запись, указывающую на `portfolio-xxx.pages.dev`

3. В Cloudflare Dashboard → Pages → твой проект → Custom domains → Add

4. SSL-сертификат выпустится автоматически

---

## Image Resizing (опционально)

API `/api/thumbnail` автоматически ресайзит внешние картинки на Cloudflare.
Для этого нужен план Cloudflare Pro ($20/мес) с включённым Image Resizing.

Если не нужен ресайз — просто клади оптимизированные картинки в `static/media/`.
API route будет работать как простой прокси.

---

## Настройка под себя

### Изменить данные
- `src/lib/data.js` → проекты, навыки, контакты, био

### Изменить цвета
- `src/app.css` → CSS-переменные в `:root`

### Изменить шрифты
- `src/app.css` → заменить Google Fonts import
- Обновить `font-family` в стилях

### Добавить аналитику
Добавь скрипт в `src/app.html` перед `%sveltekit.head%`:
```html
<!-- Cloudflare Web Analytics (бесплатно) -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```
