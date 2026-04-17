# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

COSME — a premium natural skincare brand landing page built with React 19, TypeScript, Vite, and Tailwind CSS v4. The design is light, airy, and organic — inspired by Aesop, Glossier, and The Ordinary.

## Commands

```bash
npm run dev        # Start dev server with HMR
npm run build      # Type-check + production build (tsc -b && vite build)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

There is no test framework configured.

## Architecture

### Dual animation stack

Both **Framer Motion** and **GSAP** are available. Use Framer Motion for declarative `whileInView` animations and GSAP `ScrollTrigger` for imperative scroll-linked effects (parallax, text reveal). Keep animations restrained — animate only when it clarifies or elevates the experience.

### Design tokens

Tokens exist in two places:
- **CSS custom properties** in `src/index.css` via `@theme inline` — use for styling components
- **JS constants** in `src/utils/designTokens.ts` — use for programmatic access in animations/GSAP

Keep both in sync when adding new tokens.

### Component patterns

- Barrel exports via `src/components/index.ts` and `src/hooks/index.ts`
- `Section` component supports `narrow`, `wide`, and `ultrawide` container widths
- `FadeIn`, `GlassCard`, `GradientText`, `StaggerContainer` are pre-built reusable components
- Custom hook `useScrollAnimation` in `src/hooks/` wraps common GSAP patterns

### Styling conventions

- Light mode only — no dark mode toggle or theme switching
- Satoshi font loaded via Fontshare CDN in `index.html`
- Responsive design uses `clamp()` for fluid typography and spacing
- Mobile breakpoints: 768px and 1100px
- Use soft glass layers, warm borders, and sage/cream accent gradients for depth
- Refer to `.impeccable.md` for the full design context including color tokens, typography scale, and design principles

### TypeScript

Strict mode enabled: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, `verbatimModuleSyntax`. ES2023 target with bundler module resolution.

### Key files

- `src/App.tsx` — main app component
- `src/main.tsx` — React entry point
- `src/index.css` — global styles, Tailwind, and design token definitions
- `vite.config.ts` — Vite config with React and Tailwind plugins
- `.impeccable.md` — detailed design context (read before making visual changes)
