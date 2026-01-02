import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
    ignore: ["**/*draft.mdx"],
  }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      layout: z.string().default("../layouts/BlogPost.astro"),
      draft: z.boolean().optional(),
    }),
});

export const collections = { blog };
