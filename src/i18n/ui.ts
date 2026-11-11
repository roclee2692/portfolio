export const languages = { en: "English", zh: "中文" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "nav.research": "research",
    "nav.projects": "projects",
    "nav.work": "work",
    "nav.resume": "resume",

    "hero.badge": "AI undergrad @ NCWU · open to research & collaboration",
    "hero.greeting": "Hi, I'm",
    "hero.statement": "From question to impact.",
    "hero.visualLabel": "A PRACTICAL APPROACH",
    "hero.visualTitle": "Research, built into practice.",
    "hero.metric.projects": "projects",
    "hero.metric.patents": "published application",
    "hero.metric.focus": "current focus",
    "hero.role": "AI Undergrad — Retrieval / RAG · Machine Learning · Applied Research",
    "hero.tagline":
      "I turn research into systems that ship — from a filed patent on intelligent bid-document analysis to empirical retrieval studies and deep-learning signal separation. Scroll for patents, papers and projects.",
    "hero.viewProjects": "View projects",
    "hero.contact": "Get in touch",
    "resume.view": "View résumé",
    "resume.cardTitle": "Résumé",
    "resume.cardHint": "PDF · View or download",
    "resume.back": "Back to home",
    "resume.title": "Résumé",
    "resume.description": "Chinese-language résumé covering AI applications, RAG, model evaluation and selected projects.",
    "resume.open": "Open PDF",
    "resume.download": "Download PDF",
    "resume.fallback": "If the preview does not appear on your device, open or download the PDF directly.",
    "resume.preview": "Chinese-language résumé PDF preview",
    "hero.scroll": "scroll",
    "stats.location": "Zhengzhou, China",
    "stats.status": "open to work",

    "section.projects.kicker": "selected work",
    "section.projects.title": "Projects",
    "section.research.kicker": "patents & papers",
    "section.research.title": "Research",
    "section.experience.kicker": "timeline",
    "section.experience.title": "Experience",
    "about.kicker": "a little about me",
    "about.title": "Think deeply. Build thoughtfully.",
    "about.intro": "I'm Li Peng, an AI undergraduate at NCWU. I taught myself C++ in my first year and continued learning algorithms before shifting my focus to AI applications, RAG research and model evaluation. I've also led a mathematical modelling team and trained members of a campus media team.",
    "about.values": "What matters to me",
    "campus.date": "2024–2025 academic year · first year",
    "campus.media.title": "Campus media team · Lead",
    "campus.media.body": "Managed and trained team members, including sharing editing techniques in CapCut and Premiere Pro; contributed to content and video production.",
    "campus.club.title": "NCWU Jiangsheng visual media club · Member",
    "campus.club.body": "Contributed to topic selection, filming, editing, music and post-production.",
    "section.approach.kicker": "how I work",
    "section.approach.title": "How I work",
    "section.approach.body": "I focus on understanding the need, thinking independently and bringing commitment and care to the work. I investigate unfamiliar problems, communicate clearly and concisely, collaborate over time and adjust the approach based on evidence.",
    "section.approach.team": "I have also managed a campus media team and trained its members.",
    "section.awards.kicker": "honors & contests",
    "section.awards.title": "Awards & Competitions",
    "proofs.title": "Selected evidence",
    "proofs.math": "CUMCM 2025 · Provincial First Prize",
    "proofs.math.desc": "Team project: competition paper, Q1–Q4 code and related data.",
    "proofs.paper": "Competition paper PDF",
    "proofs.code": "Code & data",
    "proofs.award": "Award certificate",
    "proofs.gis": "GIS internship and training certificate",
    "proofs.gis.desc": "University–enterprise training at Wuhan Zondy Cyber, completed with distinction.",
    "proofs.gis.view": "View certificate",
    "level.national": "National",
    "level.provincial": "Provincial",
    "level.school": "School",
    "common.viewAll": "View all",

    "card.featured": "Featured",
    "card.private": "Private project",
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
    "detail.private": "Private project · source not public",
    "detail.placeholder": "Placeholder content — final copy to be written per language.",

    "meta.home.title": "Home",
    "meta.home.desc":
      "Research & engineering portfolio — intelligent systems, retrieval, machine learning.",
    "meta.projects.title": "Projects",
    "meta.projects.desc": "Selected projects — with architecture, demos and code links.",
    "meta.research.title": "Research",
    "meta.research.desc": "A published patent application and research in progress.",
    "meta.work.title": "Experience",
    "meta.work.desc": "Research and project experience.",

    "lang.switch": "切换到中文",
  },
  zh: {
    "nav.research": "研究",
    "nav.projects": "项目",
    "nav.work": "经历",
    "nav.resume": "简历",

    "hero.badge": "华水人工智能在读 · 开放科研与合作",
    "hero.greeting": "你好，我是",
    "hero.statement": "从问题出发，让思考落地。",
    "hero.visualLabel": "从研究到实践",
    "hero.visualTitle": "理解 · 构建 · 验证",
    "hero.metric.projects": "项目实践",
    "hero.metric.patents": "已公布专利申请",
    "hero.metric.focus": "关注方向",
    "hero.role": "人工智能本科 — 检索 / RAG · 机器学习 · 应用研究",
    "hero.tagline":
      "我把研究做成能用的系统——从已公布的「标书智能分析」发明专利，到检索增强的实证研究与深度学习信号分离。下滑看专利、论文与项目。",
    "hero.viewProjects": "查看项目",
    "hero.contact": "联系我",
    "resume.view": "查看简历",
    "resume.cardTitle": "个人简历",
    "resume.cardHint": "PDF · 在线查看与下载",
    "resume.back": "返回主页",
    "resume.title": "我的简历",
    "resume.description": "AI 应用、RAG 与大模型评测方向的个人简历，包含科研、项目与竞赛经历。",
    "resume.open": "打开 PDF",
    "resume.download": "下载 PDF",
    "resume.fallback": "如果手机或浏览器未显示预览，可以直接打开或下载 PDF。",
    "resume.preview": "个人简历 PDF 预览",
    "hero.scroll": "下滑",
    "stats.location": "郑州",
    "stats.status": "开放合作",

    "section.projects.kicker": "精选",
    "section.projects.title": "精选项目",
    "section.research.kicker": "专利与论文",
    "section.research.title": "专利与论文",
    "section.experience.kicker": "时间线",
    "section.experience.title": "经历",
    "about.kicker": "关于我",
    "about.title": "认真思考，踏实做事。",
    "about.intro": "我是李鹏，华水人工智能本科生。大一自学 C++，之后继续学习算法，并逐渐将重心转向 AI 应用、RAG 研究和大模型评测；也有数模带队、校园团队管理与成员培训的经历。",
    "about.values": "我看重的事",
    "campus.date": "2024—2025 学年 · 大一",
    "campus.media.title": "校内融媒体团队 · 负责人",
    "campus.media.body": "参与团队管理与成员培训，分享剪映、Premiere Pro 等剪辑方法，并参与内容和视频制作。",
    "campus.club.title": "华水桨声视创部 · 成员",
    "campus.club.body": "参与自媒体内容选题、拍摄、剪辑、配乐和后期制作。",
    "section.approach.kicker": "工作方式",
    "section.approach.title": "我如何做事",
    "section.approach.body": "我重视理解需求、独立思考，以及对所负责工作的热爱、投入和责任。面对陌生问题，主动研究、验证并调整方案；沟通时尽量准确、简洁，让协作者容易理解，也重视长期协作和最终交付。",
    "section.approach.team": "我也曾负责校园融媒体团队管理与成员培训。",
    "section.awards.kicker": "获奖与成果",
    "section.awards.title": "竞赛与荣誉",
    "proofs.title": "成果与证明",
    "proofs.math": "2025 数学建模国赛 · 河南省一等奖",
    "proofs.math.desc": "三人团队作品：参赛论文、Q1–Q4 代码及相关数据已开源。",
    "proofs.paper": "参赛论文 PDF",
    "proofs.code": "代码与数据",
    "proofs.award": "获奖证书",
    "proofs.gis": "GIS 实习实训结业证书",
    "proofs.gis.desc": "武汉中地数码校企联合实训，成绩优秀结业。",
    "proofs.gis.view": "查看结业证书",
    "level.national": "国家级",
    "level.provincial": "省级",
    "level.school": "校级",
    "common.viewAll": "查看全部",

    "card.featured": "精选",
    "card.private": "校企项目 · 代码未公开",
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
    "detail.private": "校企项目 · 代码未公开",
    "detail.placeholder": "内容为占位——最终以对应语言撰写。",

    "meta.home.title": "首页",
    "meta.home.desc": "研究与工程作品集 — 智能系统、检索、机器学习。",
    "meta.projects.title": "项目",
    "meta.projects.desc": "精选项目 — 附架构、Demo 与代码链接。",
    "meta.research.title": "专利与论文",
    "meta.research.desc": "已公布的专利与进行中的研究。",
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
