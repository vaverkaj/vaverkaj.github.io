# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

This is a personal portfolio website. The repo root doubles as the deployment target — the built static files (`index.html`, `*.js`, `*.css`) are committed directly to root and served as-is (GitHub Pages style).

- `pages/` — Angular 18 source code (all dev work happens here)
- `assets/` — static assets served from root (CV PDF, profile images, project screenshots)
- `projects/` — standalone demo projects (`3d-projection/`, `PixelTD/`) referenced from the portfolio

## Commands

All commands must be run from inside `pages/`:

```bash
cd pages

npm start          # dev server at localhost:4200 (ng serve)
npm run build      # production build → pages/dist/pages/
npm run watch      # dev build with watch
npm test           # Karma/Jasmine test runner
```

To deploy, copy the contents of `pages/dist/pages/` to the repo root and commit.

## Architecture

Single-page application with **no client-side routing** (`app.routes.ts` exports an empty array). The entire site is one scrollable page with anchor-linked sections (`#about`, `#experience`, `#work`, `#contact`).

**All components are standalone** (no NgModule). `AppComponent` is the shell that composes all sections in order.

**Scroll animations** — `AppComponent` uses a single `IntersectionObserver` to watch all `#fade` template ref elements and applies the `fade-in-up` CSS animation class when they enter the viewport. The animation is defined in `src/styles.scss`.

**Navigation** — `NavigationComponent` hides/shows itself on scroll direction change via `@HostListener('window:scroll')`, and uses Angular Animations (`@angular/animations`) for its initial slide-in on page load (4 second delay).

**Work history** — entirely hardcoded in `work.component.html` using Angular's `@switch/@case` control flow. `selectedJob` defaults to `6` (most recent). To add a new job, add a button and a `@case` block; increment `selectedJob` default.

**Typography** — fluid responsive font sizing via the `fluid-type` SCSS mixin in `src/fluid-type.scss`, applied globally. Font is Roboto Mono (Google Fonts).

**Styling stack** — Bootstrap 5 (grid/utilities only, loaded via `angular.json` styles array) + component-level SCSS files + global `src/styles.scss`.

**`block-comment` component** — dynamically fills a vertical bar with `*` characters to match adjacent content height, simulating a code comment block visual. Uses `Renderer2` and reacts to window resize.