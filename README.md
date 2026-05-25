# Integration notes — Container Scroll Component

Steps and commands to integrate the provided React component into a project that uses `shadcn` structure, Tailwind CSS, and TypeScript.

If your project already has `package.json`, `tsconfig.json`, and `tailwind.config.js`, skip the setup sections and just copy the two files in `components/ui/` into your repo (they are already added here).

1) Install dependencies

```bash
# Core runtime deps
npm install framer-motion

# If using Next.js + TypeScript (dev deps)
npm install -D typescript @types/react @types/node

# Tailwind (if not already installed)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn CLI (optional helper for component scaffolding)
npx shadcn-ui@latest init
```

2) Tailwind config
- Ensure `tailwind.config.js` has the `content` paths that include `components` and your app/pages/src directories, e.g.:

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: { extend: {} },
  plugins: [],
}
```

3) TypeScript
- If you don't have `tsconfig.json`, run `npx tsc --init` or add `tsconfig.json` as required by Next.js.

4) shadcn UI structure
- `shadcn` and many community patterns expect UI components under `components/ui/`. Keeping that default path helps future `shadcn` CLI commands and other tooling find shared primitives. If your repo uses a different structure, create `components/ui/` and place these files there for compatibility.

5) Files added
- `components/ui/container-scroll-animation.tsx` — main exported `ContainerScroll`, `Header`, `Card` components.
- `components/ui/demo.tsx` — small demo component `HeroScrollDemo` using an Unsplash image.

6) Notes
- The demo imports the component using the `@/components/...` alias. Ensure your `tsconfig.json` / bundler path alias maps `@` to your project root or change imports to relative paths.
- Install `framer-motion` before usage.
- The components assume Tailwind CSS utility classes and dark mode classes are configured.

If you want, I can:
- Add a sample `tailwind.config.js` and `tsconfig.json` here.
- Wire a small Next.js `app/page.tsx` to show the demo.
