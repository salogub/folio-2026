import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: one Markdown file per project in src/content/projects/.
// Starting fields only. We'll adjust them to match the Figma layouts.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    // Hide a case study from the site without deleting it.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
