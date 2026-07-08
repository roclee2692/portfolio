---
title: "CommentMiner — Video Comment Insight"
title_zh: "CommentMiner — 视频评论深度洞察系统"
description: "Three-stage pipeline (rule filter → LLM close-reading → reasoning-model report) that turns a video's comments into a readable, citable research report. Web tool + browser extension."
description_zh: "三阶段 Pipeline（规则硬筛 → LLM 精读 → 思考模型写报告），把一个视频的评论区提炼成可读可引用的深度报告。本地 Web 工具 + 浏览器扩展。"
date: "2026-03-15"
linkType: "repo"
stack: ["Python", "JavaScript", "LLM", "Browser Extension"]
highlight: "YouTube + Bilibili · rule filter + LLM + reasoning report"
highlight_zh: "支持 YouTube + B站 · 规则筛 + LLM 精读 + 思考模型成稿"
repoURL: "https://github.com/roclee2692/comment-miner"
---

Supports **YouTube** and **Bilibili**. Runs as a local web tool or as a Chrome / Edge / Firefox extension for one-click analysis on the video page.

## Pipeline

1. **Stage 0 — rule filter** (<1s, zero cost): drop pure-emoji, short, duplicate, ad and low-information comments.
2. **Stage 1 — LLM close-reading** (batches of 20): keep the gems, skip the rest.
3. **Stage 2 — reasoning model** writes the deep, editable report.
