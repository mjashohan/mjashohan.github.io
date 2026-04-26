# Shohan · Portfolio

A creative, dark-mode portfolio for **Md Jahan Ali Shohan** — Software Engineer.
Built with **React + Vite + Material UI + Framer Motion**.

## ✨ Features

- **Live GitHub sync** — public repos pulled from the GitHub API in real time, sorted by most recently updated, with a manual *Sync* button.
- **IDE-inspired dark theme** — mint-cyan accents, distinctive typography (Bricolage Grotesque + Manrope + JetBrains Mono), animated grid background, glowing orbs.
- **Smooth section nav** — sticky top nav with active-section highlighting and animated underline.
- **Animated hero** — typewriter effect that cycles through your taglines.
- **Sticky sidebar** — your photo, contact info, skills (with proficiency dots), and language bars stay in view on desktop.
- **Timeline experience cards**, **education cards** with animated focus chips, **carousel of GitHub repos**, and a dedicated **Thesis & Research** section.
- **Fully responsive** — collapses cleanly to a single column on mobile.

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## 📸 Adding your avatar

Drop a square photo (recommended **400×400 or larger**) into the `public/` folder and name it `avatar.jpg`. It will appear in the sidebar automatically.

If you skip this step the sidebar shows your initial `S` as a fallback — it still looks good.

## ✏️ Editing your content

All copy lives in plain JS files under `src/data/` so you don't have to touch components:

| File | What it controls |
| --- | --- |
| `personal.js` | Name, title, contact, **About-me intro**, GitHub username, languages |
| `experience.js` | Work timeline cards |
| `education.js` | Education cards |
| `thesisProjects.js` | Thesis / research project writeups |
| `activities.js` | Extra-curricular activities |
| `skills.js` | Sidebar skill bars (5-dot proficiency) |

The **homepage about-me** placeholder is in `src/data/personal.js` under the `about` field — search for the `TODO` comment and write your version when you're ready.

## 🔁 GitHub repo sync — how it works

`src/hooks/useGithubRepos.js` calls `https://api.github.com/users/mjashohan/repos` on first load, caches the result for **30 minutes** in `sessionStorage`, and exposes a `sync()` function the *Sync* button uses to force a refresh.

- Repos are sorted by `pushed_at` descending — most recent at the front.
- Forks and the `mjashohan.github.io` repo are excluded by default.
- Anonymous calls to the GitHub API are limited to **60 per hour per IP**. The cache avoids burning through that.

If you ever want to exclude more repos, edit the `EXCLUDED` set at the top of `useGithubRepos.js`.

## 🌐 Deploying to GitHub Pages

Two options.

### Option A — User site at `mjashohan.github.io`

1. Create a public repo named exactly **`mjashohan.github.io`**.
2. Push this project's contents to the `main` branch.
3. Run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a `gh-pages` branch.
4. In the GitHub repo settings → **Pages**, set the source to the `gh-pages` branch.

### Option B — Project page at `mjashohan.github.io/portfolio`

1. Edit `vite.config.js` and change `base: './'` to `base: '/portfolio/'` (use whatever your repo name is).
2. Edit `package.json` and change `"homepage"` to match.
3. Push to GitHub and run `npm run deploy`.

## 🎨 Design notes

- Display font: **Bricolage Grotesque** — characterful, variable, distinctive.
- Body font: **Manrope** — clean and modern.
- Mono font: **JetBrains Mono** — used for section tags, paths, and the `$ whoami` flavor.
- Primary accent: `#64ffda` (mint-cyan) with a coral `#ff7e5f` secondary for tasteful contrast.
- Motion is provided by Framer Motion — kept subtle so the content stays the focus.

## 📦 Tech

- React 18, Vite 5
- Material UI 5 (`@mui/material`, `@mui/icons-material`, `@emotion/*`)
- Framer Motion 11
- React Icons 5

## License

MIT — make it your own.
