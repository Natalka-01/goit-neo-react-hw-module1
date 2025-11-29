<!-- Copilot instructions for AI coding agents working on this repo -->

# Repo overview

This is a minimal Vite + React single-page app scaffold (JSX, not TypeScript). It uses `vite` for dev server/HMR and `@vitejs/plugin-react-swc` for compilation.

Key files/directories:
- `package.json` — scripts: `dev`, `build`, `preview`, `lint`.
- `vite.config.js` — Vite config and plugins.
- `eslint.config.js` — project lint rules; run `npm run lint`.
- `src/main.jsx` — app entry point (uses `createRoot`).
- `src/App.jsx` — primary example component.
- `src/assets/` and `public/` — static assets; note usage of `/vite.svg` (served from project root).

# Important context for edits

- Keep file naming/extensions as `.jsx` (this project uses JSX files, not TSX).
- `package.json` uses `"type": "module"`; prefer ESM syntax for new files/changes.
- HMR/live behavior is handled by Vite — small DOM/JSX edits suffice to verify changes locally.
- There is no test runner configured; do not add one unless explicitly requested.

# Developer workflows (commands)

- Install deps: `npm install` (or `pnpm`/`yarn` if the user prefers, but `package.json` is npm-ready).
- Dev server (HMR): `npm run dev` — opens on Vite default (usually `http://localhost:5173`).
- Build: `npm run build`.
- Preview a build: `npm run preview` (runs the built app locally).
- Lint: `npm run lint` — use this before opening PRs.

# Coding agent guidance (concise, actionable)

- Make minimal, focused changes. Follow existing style (functional components, hooks like `useState`).
- Avoid introducing TypeScript or heavy tooling changes without a ticket.
- Respect ESM imports and the `type: module` setting; use `import`/`export default`.
- When adding assets, prefer `src/assets/` or `public/` depending on whether import bundling is needed. Example: import local SVG: `import logo from './assets/logo.svg'`; reference public root asset with absolute path: `'/vite.svg'`.
- For new components, add under `src/components/` with a default export. Example: `src/components/MyButton.jsx` -> `export default function MyButton(){ return <button/> }`

# Patterns & examples from this repo

- Entry point: `src/main.jsx` creates root with `createRoot(document.getElementById('root'))` and wraps app with `<StrictMode />`.
- Component example: `src/App.jsx` demonstrates stateful functional component and HMR-friendly edits.
- ESLint: check `eslint.config.js` for existing rules before suggesting rule changes.

# Integrations & constraints

- Uses `@vitejs/plugin-react-swc`. Be cautious: SWC-based transforms may behave slightly differently than Babel for some advanced React compiler features.
- No CI or GitHub Actions are present; do not assume workflows — propose adding them separately if needed.

# When to ask the user

- Ask before: adding TypeScript, changing lint rules, adding new dev dependencies, or introducing a test runner/CI.

---
If any section is unclear or you want more examples (component scaffolds, common refactors, or a suggested PR template), tell me which area to expand.
