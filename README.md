# DannyUzo.github.io

This repository hosts the source for `https://dannyuzo.github.io` using a statically exported Next.js portfolio.

## Local development

```bash
npm ci
npm run dev
```

## Production build (static export)

```bash
npm run build
```

Expected output directory: `out/`

## Deployment

GitHub Pages deployment is automated via `.github/workflows/deploy-pages.yml`.

- Triggers: push to `main`, manual `workflow_dispatch`
- Build job runs `npm ci` + `npm run build`
- Deploy job publishes `out/` to GitHub Pages
