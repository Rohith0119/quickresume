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
