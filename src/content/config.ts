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
    dateLabel: z.string().optional(),
    dateLabel_zh: z.string().optional(),
    draft: z.boolean().optional(),
    description_zh: z.string().optional(),
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
    id_zh: z.string().optional(),
    url: z.string().optional(),
    cover: z.string().optional(),
    // 双语：中文覆盖
    title_zh: z.string().optional(),
    description_zh: z.string().optional(),
    status_zh: z.string().optional(),
  }),
});

// 竞赛与荣誉
const awards = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    title_zh: z.string().optional(),
    award: z.string(),          // 如 "Provincial First Prize"
    award_zh: z.string().optional(),
    issuer: z.string().optional(),
    issuer_zh: z.string().optional(),
    category: z.string().optional(),
    category_zh: z.string().optional(),
    level: z.enum(["national", "provincial", "school"]).default("provincial"),
    date: z.coerce.date(),
    url: z.string().optional(),
  }),
});

export const collections = { blog, work, projects, research, awards };
