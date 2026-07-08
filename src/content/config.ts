import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    // 双语：中文覆盖（基字段为英文默认）
    company_zh: z.string().optional(),
    role_zh: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    // 改造 1 — 扩展字段
    linkType: z.enum(["live", "repo", "private"]).default("repo"),
    stack: z.array(z.string()).default([]),
    cover: z.string().optional(),
    highlight: z.string().optional(),
    featured: z.boolean().default(false),
    // 双语：中文覆盖
    title_zh: z.string().optional(),
    description_zh: z.string().optional(),
    highlight_zh: z.string().optional(),
  }),
});

// 改造 3 — Research 集合（专利与论文）
const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    type: z.enum(["patent", "paper"]),
    status: z.string().optional(),   // 如「实质审查中」「已录用」
    id: z.string().optional(),       // 申请号 / DOI
    url: z.string().optional(),
    cover: z.string().optional(),
    // 双语：中文覆盖
    title_zh: z.string().optional(),
    description_zh: z.string().optional(),
    status_zh: z.string().optional(),
  }),
});

export const collections = { blog, work, projects, research };
