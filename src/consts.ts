import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "李鹏",
  NAME_EN: "Li Peng",
  EMAIL: "nahida10y27@gmail.com", // TODO: 占位 — 替换成对外展示的邮箱
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
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
  DESCRIPTION: "已申请专利与发表 / 在投论文。",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/your-handle", // TODO: 占位 — 你的 GitHub
  },
  {
    NAME: "email",
    HREF: "mailto:nahida10y27@gmail.com", // TODO: 占位
  },
];
