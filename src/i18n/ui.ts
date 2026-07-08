export const languages = { en: "English", zh: "中文" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "nav.research": "research",
    "nav.projects": "projects",
    "nav.work": "work",

    "hero.badge": "Studying · open to research & collaboration",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Researcher / Full-stack Engineer — Intelligent Systems · Retrieval · ML",
    "hero.tagline":
      "One-line positioning (placeholder) — I turn research into systems that ship. This is my portal; scroll to explore patents, papers and project details.",
    "hero.viewProjects": "View projects",
    "hero.contact": "Get in touch",
    "hero.scroll": "scroll",
    "stats.location": "China",
    "stats.status": "open to work",

    "section.projects.kicker": "selected work",
    "section.projects.title": "Projects",
    "section.research.kicker": "patents & papers",
    "section.research.title": "Research",
    "section.experience.kicker": "timeline",
    "section.experience.title": "Experience",
    "common.viewAll": "View all",

    "card.featured": "Featured",
    "card.private": "Private · demo on request",
    "card.demo": "Live demo",
    "card.code": "View code",
    "card.details": "Details",
    "research.patent": "Patent",
    "research.paper": "Paper",

    "contact.title": "Let's build something",
    "contact.titleAccent": "worth building",
    "contact.body":
      "Want to collaborate, discuss an opportunity, or just say hi — reach me by email or social.",

    "detail.back": "Back to projects",
    "detail.demo": "demo",
    "detail.repo": "repo",
    "detail.private": "Private · demo on request",
    "detail.placeholder": "Placeholder content — final copy to be written per language.",

    "meta.home.title": "Home",
    "meta.home.desc":
      "Research & engineering portfolio — intelligent systems, retrieval, machine learning.",
    "meta.projects.title": "Projects",
    "meta.projects.desc": "Selected projects — with architecture, demos and code links.",
    "meta.research.title": "Research",
    "meta.research.desc": "Filed patents and published / submitted papers.",
    "meta.work.title": "Experience",
    "meta.work.desc": "Research and project experience.",

    "lang.switch": "切换到中文",
  },
  zh: {
    "nav.research": "研究",
    "nav.projects": "项目",
    "nav.work": "经历",

    "hero.badge": "在读 · 开放科研与项目合作",
    "hero.greeting": "你好，我是",
    "hero.role": "研究者 / 全栈工程师 — 智能系统 · 检索 · 机器学习",
    "hero.tagline":
      "一句话定位（占位）——我把研究做成能用的系统。这里是我的项目与成果门户，下滑进入专利、论文与项目详情。",
    "hero.viewProjects": "查看项目",
    "hero.contact": "联系我",
    "hero.scroll": "下滑",
    "stats.location": "中国",
    "stats.status": "开放合作",

    "section.projects.kicker": "精选",
    "section.projects.title": "精选项目",
    "section.research.kicker": "专利与论文",
    "section.research.title": "专利与论文",
    "section.experience.kicker": "时间线",
    "section.experience.title": "经历",
    "common.viewAll": "查看全部",

    "card.featured": "精选",
    "card.private": "私有 · 可授权演示",
    "card.demo": "访问 Demo",
    "card.code": "查看代码",
    "card.details": "详情",
    "research.patent": "专利",
    "research.paper": "论文",

    "contact.title": "一起做点",
    "contact.titleAccent": "有意思的东西",
    "contact.body": "想聊合作、机会，或只是打个招呼——欢迎邮件或社交媒体找我。",

    "detail.back": "返回项目",
    "detail.demo": "演示",
    "detail.repo": "代码",
    "detail.private": "私有 · 可授权演示",
    "detail.placeholder": "内容为占位——最终以对应语言撰写。",

    "meta.home.title": "首页",
    "meta.home.desc": "研究与工程作品集 — 智能系统、检索、机器学习。",
    "meta.projects.title": "项目",
    "meta.projects.desc": "精选项目 — 附架构、Demo 与代码链接。",
    "meta.research.title": "专利与论文",
    "meta.research.desc": "已申请专利与发表 / 在投论文。",
    "meta.work.title": "经历",
    "meta.work.desc": "科研与项目经历。",

    "lang.switch": "Switch to English",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui[defaultLang][key]) as string;
  };
}

/** 从 URL 路径判断语言（/zh 或 /zh/... 为中文，其余为默认 en） */
export function getLangFromPath(pathname: string): Lang {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "zh" ? "zh" : defaultLang;
}

/** 去掉语言前缀，得到规范化的英文路径（如 /zh/projects → /projects） */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/zh(\/|$)/, "/");
  return stripped === "" ? "/" : stripped;
}

/** 给规范化路径加上目标语言前缀 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? "/zh" : `/zh${clean}`;
}

/** 语言前缀，用于组合链接：en → ""，zh → "/zh" */
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? "" : `/${lang}`;
}

/** 从内容 frontmatter 里按语言取字段：zh 用 <field>_zh，回退到英文基字段 */
export function tf(data: Record<string, unknown>, field: string, lang: Lang): string {
  if (lang === "zh") {
    const v = data[`${field}_zh`];
    if (typeof v === "string" && v.length) return v;
  }
  return (data[field] as string) ?? "";
}
