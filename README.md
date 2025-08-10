# entries1

## Overview
**entries1** is a simple **React + Vite** application demonstrating form-driven CRUD operations, inline editing, and responsive state management with modern React hooks. Users can create, edit, and delete simple person records, each tagged with a timestamp.

## Why this project exists
The project was built to showcase:
- Proficiency with **React** (functional components, hooks).
- Integration with **Vite** for fast development and optimized builds.
- Implementation of CRUD patterns in a front-end context.

## Features
- **Create Entries** — Add a new record with first name and last name.
- **Timestamping** — Each entry stores its creation date/time.
- **Edit / Update** — Inline editing with automatic input focus for a smooth UX.
- **Delete** — Remove entries from the list.
- **Component-Based Structure** — Separation of concerns via `App.jsx` and `MyLi.jsx`.

> Components and modules of note:
> - `src/App.jsx` — Main application, form handling, and state management.
> - `src/components/MyLi.jsx` — Table row component with edit/delete UI.

## Quick start (clone & run)
```bash
# 1) Clone the repository
git clone <https://github.com/DennisNHanrieder/onm3.git>
cd onm3-main/onm3-main

# 2) Install dependencies
npm install

# 3) Start the development server
npm run dev
```

## Dependencies & setup
- **Core tech stack:** Node.js (v18+), React, Vite.
- **Package manager:** npm (works with pnpm/yarn).
- **Recommended:** Use `nvm` or `asdf` to match Node versions.

### Direct dependencies
- `react` — Component-based UI library.
- `react-dom` — DOM-specific rendering for React.

### Dev dependencies
- `@vitejs/plugin-react` — React integration for Vite.
- `@types/react`, `@types/react-dom` — Type definitions for development.
- `eslint` + React-specific plugins — Code linting.
- `vite` — Development server and bundler.

## Common scripts
- **Install:** `npm install`
- **Development (HMR):** `npm run dev`
- **Build (production):** `npm run build`
- **Preview build:** `npm run preview`
- **Lint code:** `npm run lint`

## How to run tests
No test suite is configured yet. Suggested setup:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
# Add to package.json:
# "test": "vitest"
npm test
```

## How to contribute
1. Fork the repository and create a feature branch.
2. Follow consistent code style and commit conventions.
3. If adding features, include documentation and relevant examples.
4. Open a pull request describing your changes and reasoning.

## What powers the core functionality?
- **React** — For managing state and rendering components.
- **React Hooks** (`useState`, `useEffect`, `useRef`) — For state, lifecycle, and DOM interactions.
- **Vite** — For lightning-fast development and optimized builds.
- **JavaScript (ES6+)** — Modern syntax for clean, maintainable code.
