import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "李鹏",
  NAME_EN: "Raelon Veritas Lee",
  EMAIL: "roclee2692@gmail.com",
  PHONE: "19293769862",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 6,
  NUM_RESEARCH_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "首页",
  DESCRIPTION: "研究与工程作品集 — 智能系统、检索、机器学习。", // TODO: 占位
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "经历",
  DESCRIPTION: "科研与项目经历。",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "精选项目 — 附架构、Demo 与代码链接。",
};

export const RESEARCH: Metadata = {
  TITLE: "专利与论文",
  DESCRIPTION: "已公布的专利与进行中的研究。",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/roclee2692",
  },
];

// A deliberate order for the projects most relevant to the current internship focus.
export const FEATURED_PROJECTS = [
  "bid-analysis",
  "context-retrieval",
  "gcms-separation",
  "mcm-icm-2025",
  "ncwu-smartcity",
  "rps-yolov8",
];
