import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: one Markdown file per project in src/content/projects/.
// Each project's images go in a folder with the same name next to it,
// e.g. src/content/projects/afs-consulting/01.png
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      // Position on the home page: 1 is first.
      order: z.number(),
      summary: z.string(),
      // Slider images on the home page, in order.
      images: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      // Hide a case study from the site without deleting it.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
