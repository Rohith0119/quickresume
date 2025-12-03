# QuickResume

This repository contains a lightweight React + Vite scaffold for a rebranded resume builder called QuickResume. The current branch `feature/hero-ui` implements the homepage hero, signup card, and base styles.

Preview

- Dev server: `npm run dev`
- Build: `npm run build`
- Preview production build: `npm run preview`

If you don't have Node installed, install Node 18+ from https://nodejs.org/.

Notes

- CI currently runs a build-only job on pushes to `main`. The `feature/hero-ui` branch contains UI improvements and a PR can be opened for review.
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
