# Sanjana Gunda — Animated Portfolio

A modern, immersive portfolio built with React, Vite, Three.js, React Three Fiber and Framer Motion.

## Features

- Interactive 3D hero scene
- Smooth scroll and reveal animations
- Responsive glassmorphism interface
- Project cards based on Sanjana's public GitHub repositories
- LinkedIn and GitHub links
- GitHub Pages-ready Vite configuration

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

Create a repository such as `sanjana-portfolio`, then run:

```bash
git init
git add .
git commit -m "Build animated professional portfolio"
git branch -M main
git remote add origin https://github.com/gundasanjana08/sanjana-portfolio.git
git push -u origin main
npm run deploy
```

In GitHub, open **Settings → Pages** and select:

- Source: **Deploy from a branch**
- Branch: **gh-pages**
- Folder: **/(root)**

The site should become available at:

`https://gundasanjana08.github.io/sanjana-portfolio/`

## Personalization before publishing

Update these items in `src/main.jsx`:

1. Add Sanjana's verified email in the contact link.
2. Refine the introduction with her current role and exact experience.
3. Replace or reorder projects as needed.
4. Add a resume PDF inside `public/` and link it from the hero section.
5. Add a professional photograph if desired.

## Recommended repository name

For the cleanest personal site URL, create the repository:

`gundasanjana08.github.io`

Then the final URL becomes:

`https://gundasanjana08.github.io/`

For that repository, push the project normally and configure Pages to publish from GitHub Actions or the `gh-pages` branch.
