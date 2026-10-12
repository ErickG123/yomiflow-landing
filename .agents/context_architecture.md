# YomiFlow Landing Architecture Context

## Product context

The YomiFlow desktop app is an offline-first Japanese immersion and second-brain environment. It includes manga/video/NHK Easy reading, dynamic furigana and local dictionary lookup, a TipTap notebook with Lindera morphology/syntax and grammar linting, offline MorphMan comprehension estimates, FSRS/SM-2 spaced repetition in SQLite, Kana Dojo, shadowing, a persistent Audio Vault player, FTS5 OmniSearch, Pomodoro, study heatmaps, review forecasts and JLPT N5–N1 coverage analytics. Do not imply cloud-hosted user data or automatic cloud sync. See the desktop repository README and `.agents/` contexts for source details.

## Angular boundaries

- Use Angular standalone components and route-level lazy loading for secondary pages.
- `core/` contains app-wide services/configuration (SEO and Transloco); `shared/` contains reusable presentational UI; `features/` owns page-level product presentation.
- Keep templates and styles in separate `.html` and `.scss` files. Use Signals for local reactive UI state when needed.
- Use Tailwind utilities with the zinc dark surface and indigo/violet brand palette. Avoid inline styles except dynamic values that cannot be expressed as static utility classes.

## Strict File Separation (HTML/SCSS/TS)

**CRITICAL DIRECTIVE — DO NOT generate Angular components with inline templates or styles.** Never put HTML in `template: \`...\``or CSS/SCSS in`styles: [...]`within a`_.component.ts`file. Every component must keep its concerns in dedicated sibling files:`_.component.ts`, `_.component.html`and`_.component.scss`. Use `templateUrl`and`styleUrl`in`@Component`; create the SCSS file even when it is initially empty. Keep component TypeScript limited to behavior, dependency injection and metadata.

## Strict Models

Never declare `interface`, `type` aliases or `enum` inside `*.component.ts`, `*.service.ts`, `*.guard.ts` or `*.directive.ts`. Put declarations in dedicated `*.model.ts` files next to the feature or service that owns them. ESLint rejects declarations in source TypeScript files; do not suppress the rule to avoid creating the model.

## i18n

- Transloco is the sole source for visible copy. Do not hardcode user-facing strings in Angular templates.
- English (`en`) is the default locale. Keep `en.json`, `pt.json` and `es.json` keys structurally identical under `public/assets/i18n/`.
- Change language through the shared language switcher. `SeoService` updates document title, description, Open Graph and Twitter metadata for the active locale.
- Product claims must match the desktop README and feature context. Describe local/offline capabilities accurately and avoid unsupported guarantees.

## Quality and commit conventions

Husky `pre-commit` runs lint-staged (Prettier and ESLint on staged TS/HTML/SCSS). Husky `commit-msg` enforces Conventional Commits (`feat`, `fix`, `chore`, `docs`, etc.). Keep copy in locale JSON and structure features as small reviewable components.
