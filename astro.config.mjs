import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://your-domain.dev", // TODO: 占位 — 换成你的正式域名
  integrations: [mdx(), sitemap(), tailwind()],
});
