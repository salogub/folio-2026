# folio-2026

Minimal portfolio site for a product designer. Built with Astro, deployed to Vercel.

## Working with the owner

- The owner is a product designer, not a developer. Explain what you're doing and why in plain language. If you use a technical term, define it in a few words.
- Before a change: say what you're about to do. After: say what changed and how to see it.
- Keep answers short. Skip code walkthroughs unless asked.

## Dependencies — always ask first

- **Never add a dependency without asking.** This includes npm packages, Astro integrations (`astro add ...`), CSS frameworks (e.g. Tailwind), UI/component libraries, font services, analytics, and third-party scripts or embeds.
- When asking, explain: what it does, why it's needed, and whether Astro can already do it without the extra package.
- Prefer what Astro has built in: content collections, `astro:assets` for images, scoped `<style>` in `.astro` files for CSS.

## Design

- **Figma is the source of truth.** The owner provides the layouts. Don't invent visual design: no colors, fonts, spacing, or components unless the layouts include them.
- If a layout doesn't cover something (a hover state, mobile size, an empty state), ask instead of guessing.
- Match the Figma values exactly (spacing, type sizes, colors). Store shared values as CSS custom properties in one place instead of repeating raw numbers.

## Stack

- **Astro**, static output. Vercel serves the built files; no server adapter is needed unless we later add server features (ask first).
- **Content collections** for case studies. Schema lives in `src/content.config.ts`.
- **Plain CSS.** No JavaScript on the page unless a design needs it.

## Case studies

- One Markdown file per project in `src/content/projects/`.
- `order` sets the position on the home page (1 = first).
- Slider images go in a folder named like the file, e.g. `src/content/projects/afs-consulting/01.png`, listed under `images:` with alt text. Without images, grey placeholders show.
- The filename becomes the URL: `src/content/projects/acme-redesign.md` → `/work/acme-redesign`.
- Frontmatter (the block between `---` lines at the top) must match the schema in `src/content.config.ts`. The build fails with an error naming the file and field if it doesn't.
- Changing the schema affects every case study. Tell the owner which files need updating before making the change.
- Every image needs meaningful alt text.

## Project layout

```
src/
  content.config.ts      case study schema (which fields each project has)
  content/projects/      one .md file per case study
  site.ts                name, role, intro, Email and LinkedIn links
  styles/global.css      shared colors, sizes and base text styles
  components/            Project (one work on the home page), Slider
  layouts/Base.astro     the HTML frame shared by every page (<head>, etc.)
  pages/                 each file here is a page on the site
public/                  files served as-is (favicon, etc.)
design/                  Figma exports (PNG) to build from. Reference only: not
                         part of the site, and kept out of Git (the repo is public)
```

Name design exports by page and size, e.g. `home-desktop.png`, `case-study-mobile.png`.

## Commands

| Command           | What it does                                                 |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Local preview at http://localhost:4321, updates as you save  |
| `npm run build`   | Builds the final site into `dist/` (what Vercel does)        |
| `npm run preview` | Serves the built `dist/` locally to check the final result   |

## Before calling something done

1. `npm run build` passes with no errors.
2. Check the page in the browser, at desktop and phone widths.
3. For layout work, compare against the PNGs in `design/` at the same size (1440px desktop, 402px mobile). Layout switches to mobile below 760px.
