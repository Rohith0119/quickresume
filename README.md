# QuickResume

This repository contains a lightweight React + Vite scaffold for a rebranded resume builder called QuickResume. The current branch `feature/hero-ui` implements the homepage hero, signup card, and base styles.

Preview


If you don't have Node installed, install Node 18+ from https://nodejs.org/.

Notes


How to contribute

1. Create a branch off `main`.
2. Make changes, run `npm run build` locally.
3. Push and open a PR.

Contact

Open issues/PRs on the GitHub repository: https://github.com/Rohith0119/quickresume
# QuickResume

[![PR checks](https://github.com/Rohith0119/quickresume/actions/workflows/pr-check.yml/badge.svg)](https://github.com/Rohith0119/quickresume/actions/workflows/pr-check.yml)
[![Pages deploy](https://github.com/Rohith0119/quickresume/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Rohith0119/quickresume/actions/workflows/deploy-pages.yml)

This repository contains a lightweight React + Vite scaffold for a rebranded resume builder called QuickResume. The homepage hero, signup card, and base styles are implemented and the main branch contains the current production-ready assets.

Preview

- Dev server: `npm run dev`
- Build: `npm run build`
- Preview production build: `npm run preview`

If you don't have Node installed, install Node 18+ from https://nodejs.org/.

Notes

- CI runs a build and a lightweight smoke test on PRs (see the PR checks badge above).
- Pages deployment publishes the `dist/` build to the `gh-pages` branch when `main` is updated (see the Pages badge). If the Pages site shows a 404 after merge, check Repository → Settings → Pages to confirm the source is set to `gh-pages`.
- Styling is plain CSS in `src/styles.css`. If you'd prefer Tailwind, I can convert the styles.

How to contribute

1. Create a branch off `main`.
2. Make changes, run `npm run build` locally.
3. Push and open a PR.

Contact

Open issues/PRs on the GitHub repository: https://github.com/Rohith0119/quickresume
# quickresume (React + Vite)

Run locally:

```bash
cd /Users/n.krohit/quickresume
npm install
npm run dev
```

Open http://localhost:5173

Deployment
----------

This repository contains a GitHub Actions workflow (in `.github/workflows/deploy.yml`) that builds the Vite app and deploys the produced `dist` directory to GitHub Pages on every push to `main` using the repository's `GITHUB_TOKEN`.

After the first successful workflow run, your site will be available at:

`https://<your-github-username>.github.io/quickresume/`

If you prefer a different host (Netlify or Vercel), I can add a deploy configuration instead.
