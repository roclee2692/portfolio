# 内容待填清单（骨架已完成，双语 + 沉浸式设计已就位）

全部是**占位内容**。搜索 `占位` / `Placeholder` / `TODO` 定位待替换处。

## 双语说明（重要）
- **默认语言 = 英文**，根路径 `/`；中文在 `/zh/`。
- 内容 frontmatter：**基字段写英文**，中文放对应的 `*_zh` 字段（缺省会回退到英文）。
  例：`title: "..."`（英文）+ `title_zh: "..."`（中文）。
- 界面文案（导航、按钮、分区标题等）统一在 [src/i18n/ui.ts](src/i18n/ui.ts) 的 `en` / `zh` 两个字典里改。
- 语言识别：浏览器语言为主 + Cloudflare IP 归属地兜底 + 手动切换（右上 EN/中，Cookie 记住）。
  IP 识别只在部署到 **Cloudflare Pages** 后生效（靠 [functions/_middleware.js](functions/_middleware.js)）；本地/其它托管走浏览器语言。

## 1. 站点信息 —— [src/consts.ts](src/consts.ts)
- `SITE.NAME`（中文名）/ `SITE.NAME_EN`（英文名）
- `SITE.EMAIL`、`SOCIALS`（GitHub 等）

## 2. 五个项目 —— `src/content/projects/<slug>/index.md`
bid-analysis / context-retrieval / ml-viz / comment-miner / gcms-separation
双语字段：`title(_zh)`, `description(_zh)`, `highlight(_zh)`；
其它：`date, stack[], linkType(live|repo|private), demoURL, repoURL, featured, cover`
- `cover`: 封面/架构图放 `public/covers/` 后填 `/covers/xxx.png`（标书项目强烈建议放架构图）
- 正文（Markdown body）目前是**单语英文**占位；要中英两版正文可后续再拆（卡片上显示的字段已双语）

## 3. 专利与论文 —— `src/content/research/*.md`
双语字段：`title(_zh)`, `description(_zh)`, `status(_zh)`；
其它：`date, type(patent|paper), id(申请号/DOI), url, cover`

## 4. 经历 —— `src/content/work/*.md`
双语字段：`company(_zh)`, `role(_zh)`；其它：`dateStart, dateEnd`（可写 "Now"）

## 5. Hero / 界面文案 —— [src/i18n/ui.ts](src/i18n/ui.ts)
定位语、角色行、标语、分区标题、按钮文字等，`en` / `zh` 两套一起改。

## 6. 部署（Cloudflare Pages）
- `astro.config.mjs` 的 `site` 改成正式域名
- 推 GitHub → Cloudflare Pages 连仓库（构建命令 `npm run build`，输出 `dist`）
- `functions/` 会被 Cloudflare 自动识别，边缘 IP 语言识别即生效

---

## 换强调色
双色系统在 [src/styles/global.css](src/styles/global.css) 顶部：`--accent`(主/紫) + `--accent2`(次/青)，明暗各一组，改这几行即可全站换色。

## 命令（在 portfolio 目录）
- `npm run dev` 本地预览（改动实时生效）
- `npm run build` 构建 + 类型检查

## 保留但未链接
blog 集合仍在（rss 依赖它），导航已移除；不需要可删 `src/content/blog/` 与 `src/pages/blog/`。
