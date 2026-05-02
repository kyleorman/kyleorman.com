import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(999),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        }),
      )
      .default([]),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    draft: z.boolean().default(false),
    status: z.string().default('In progress'),
    venue: z.string().optional(),
    authorshipNote: z.string().optional(),
    updated: z.date().optional(),
    sortOrder: z.number().default(999),
  }),
});

const achievements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    draft: z.boolean().default(false),
    category: z.string().optional(),
    issuer: z.string().optional(),
    date: z.string().optional(),
    sortOrder: z.number().default(999),
  }),
});

export const collections = {
  projects,
  research,
  achievements,
};
