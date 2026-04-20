# Samya Portfolio (React + Vite)

Responsive full stack portfolio project based on your internship task requirements.

## Features

- React + Vite project structure
- Skills, projects, services, experience, contact sections
- GitHub and LinkedIn buttons
- Resume download button (`/public/resume.pdf`)
- SEO-friendly metadata in `index.html`
- Deployment-ready config for Netlify, Vercel, and GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Important Customization

- Update profile text and links in `src/App.jsx`
- Replace:
  - `https://github.com/your-username`
  - `https://www.linkedin.com/in/your-linkedin-id`
  - project repository links
- Replace placeholder file `public/resume.pdf` with your real PDF resume

## Deploy to Netlify

- Connect the repository to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` is already added

## Deploy to Vercel

- Import the repository in Vercel
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` is already added

## Deploy to GitHub Pages

1. Set your repository name in `vite.config.js` using `base` when needed:

```js
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/"
});
```

2. Then run:

```bash
npm run build
npm run deploy
```
