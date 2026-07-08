---
title: "Resonance — Compatibility Assessment"
title_zh: "共振 · Resonance — 关系契合度评估"
description: "A structured compatibility tool for couples: both answer independently, then a radar-chart comparison surfaces the disagreements that matter, with conversation prompts. Bilingual, fully client-side."
description_zh: "面向情侣/伴侣的结构化契合度工具：两人独立作答，雷达图对比找出真正重要的分歧点，并附对话引导。双语、纯前端无后端。"
date: "2026-06-20"
linkType: "repo"
stack: ["React", "TypeScript", "Vite", "Tailwind", "Recharts"]
highlight: "Bilingual (zh/en) · radar-chart comparison · no backend, no accounts"
highlight_zh: "中英双语 · 雷达图对比 · 无后端无账号"
repoURL: "https://github.com/roclee2692/Resonance"
---

Not a fortune-teller — a **structured conversation trigger**. Two people answer independently across 7–10 dimensions (couple / married versions), then get a radar-chart comparison that surfaces what actually differs, plus guiding questions.

Fully client-side: React 18 + TypeScript + Vite, Recharts radar, `react-i18next` for bilingual UI, `localStorage` persistence, and a seeded PRNG (Mulberry32 + Fisher-Yates) for deterministic question selection.
