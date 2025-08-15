// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkFootnotes from "remark-footnotes";
// import remarkToc from "remark-toc";
import remarkFootnotesCollect from "./src/remark-footnotes-collect";
import opengraphImages, { presets } from "astro-opengraph-images";
import * as fs from "fs";

// https://astro.build/config
export default defineConfig({
  site: "https://rwithik.me",
  integrations: [
    mdx(),
    sitemap(),
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Atkinson",
            weight: 400,
            style: "normal",
            data: fs.readFileSync("./public/fonts/atkinson-regular.woff"),
          },
        ],
      },
      render: presets.blackAndWhite,
    }),
  ],
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
