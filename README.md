# YomiFlow Landing

Standalone Angular SPA introducing YomiFlow, the offline-first Japanese immersion and study desktop app. The page is localized in English (default), Portuguese and Spanish using Transloco.

## Requirements and setup

- Node.js 20+ and npm
- Angular CLI (or use the project's npm scripts)

```bash
cd yomiflow-landing
npm install
npm start
```

To create this scaffold from the parent directory:

```bash
npx @angular/cli new yomiflow-landing --standalone --routing --style=scss
cd yomiflow-landing
npm install @jsverse/transloco
npm install -D tailwindcss postcss autoprefixer
npm install -D husky lint-staged @commitlint/cli @commitlint/config-conventional prettier eslint typescript-eslint @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser
npx husky init
```

Tailwind 3 uses `tailwind.config.js` and `postcss.config.js`; global base styles and the slim dark scrollbar live in `src/styles.scss`.

## Quality hooks

`npm run prepare` initializes Husky. The `pre-commit` hook runs `lint-staged`, which formats staged TypeScript, HTML and SCSS with Prettier and applies ESLint fixes. `commit-msg` checks the Conventional Commits format via commitlint. Examples: `feat: add language switcher`, `fix: correct mobile spacing`, `docs: clarify setup`.

```bash
npm run lint
npm run build
```

## Architecture

- `src/app/core/`: Transloco configuration, SEO metadata service and app-wide services.
- `src/app/shared/`: Reusable navigation, footer and language controls.
- `src/app/features/home/`: Home page, presentation and feature models.
- `public/assets/i18n/{en,pt,es}.json`: Translation dictionaries loaded at runtime.
- Components follow strict file separation: TypeScript, HTML templates and SCSS styles live in dedicated sibling files to keep the codebase clean, readable and scalable.

Components are standalone. Keep all `interface`, `type` and `enum` declarations in `*.model.ts` files; ESLint enforces the rule. Add secondary screens with route-level `loadComponent`/`loadChildren` so they stay out of the initial bundle. Home copy is based on the current desktop README and `.agents` architecture contexts; download links should be updated when release distribution URLs are finalized.
