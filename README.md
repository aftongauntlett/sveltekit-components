# SvelteKit Components

[![Commit Activity](https://img.shields.io/github/commit-activity/m/aftongauntlett/sveltekit-components)](https://github.com/aftongauntlett/sveltekit-components/commits)
![SvelteKit](https://img.shields.io/badge/SvelteKit-%23ff3e00.svg?style=flat&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Theme Sync](https://img.shields.io/badge/Theme-Sync%20Enabled-9f7aea?style=flat&logo=css3&logoColor=white)

A clean, accessible component library for SvelteKit projects.

## Features

- **Svelte + Vite** for lightning-fast builds and smooth DX
- **Tailwind CSS v4.1** with fluid `clamp()`-based spacing and typography
- **Custom Theming** via HSL-based CSS variables
- **HSL Color Sync Script** with VSCode-friendly HEX preview file
- **Reusable Components** (e.g. `Button`, `Card`, `Section`)
- **TypeScript Support** with generated `.d.ts` files via `vite-plugin-dts`
- **Designed to be consumed via local or npm-based import**
- **Lightweight, dependency-free output**

## Getting Started

### 1. **Clone the Repo**

```bash
git clone https://github.com/aftongauntlett/sveltekit-components.git
cd sveltekit-components
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Build the Library**

```bash
npm run build
```

This generates a clean `dist/` folder with `index.js`, `index.cjs`, and `index.d.ts`.

---

## Theming & HSL Sync

This project uses a modern HSL-based theme system for consistent color theming across projects. Because HSL values aren’t directly editable in the VSCode color picker, this repo includes a `color-preview.css` file with HEX equivalents, then syncs to real HSL-based CSS variables via a helper script.

### Workflow:

- Use VSCode’s color picker to edit HEX values in `color-preview.css`
- Run the sync script to update `theme.css` with equivalent HSL values
- All components reference `var(--color-...)` HSL variables

Manual sync:

```bash
npm run sync-theme
```

Watch mode (auto-sync on save):

```bash
npm run watch-theme
```

---

## Folder Structure (Relevant Parts)

```
src/
  components/
    Button.svelte
  theme.css             # Real CSS variable theme
  app.css               # Tailwind + theme imports
  index.ts              # Export entry for build
```

---

## Intended Usage

This is a reusable, themable component library built to be consumed by SvelteKit projects. To use it locally:

In your consuming app:

```bash
pnpm link ../sveltekit-components
```

Or install via GitHub in `package.json`:

```json
"dependencies": {
  "sveltekit-components": "github:aftongauntlett/sveltekit-components"
}
```

Import like:

```ts
import { Button } from "sveltekit-components";
```

---

## License

MIT License  
Copyright (c) 2025 Afton Gauntlett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
