import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      slug: z.string(),
      title: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
      github: z.string().url().optional(),
      cover: image(),
      tech: z.array(z.string()).optional(),
      background: z.string().optional(),
      icon: image().optional(),
    }),
});

export const collections = { projects };
