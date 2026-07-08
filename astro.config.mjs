import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://portfolio-6mr.pages.dev", // Cloudflare Pages（后续绑定自定义域名后改这里）
  integrations: [mdx(), sitemap(), tailwind()],
});
