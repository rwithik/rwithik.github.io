// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkFootnotes from "remark-footnotes";
// import remarkToc from "remark-toc";
import remarkFootnotesCollect from "./src/remark-footnotes-collect";

// https://astro.build/config
export default defineConfig({
  site: "https://rwithik.github.io",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      [remarkFootnotes, { inlineNotes: true }],
      // [remarkToc, { heading: "Table of contents", tight: true }],
      remarkFootnotesCollect,
    ],
  },
});
