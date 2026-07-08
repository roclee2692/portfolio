---
title: "Contextual Retrieval: Empirical Study"
title_zh: "上下文检索（Contextual Retrieval）实证研究"
description: "Reproduced Anthropic's Contextual Retrieval, then ran systematic comparisons across domains — finding a 'double-edged sword' effect and the limits of knowledge graphs."
description_zh: "复现 Anthropic 的 Contextual Retrieval，并在多领域数据集上做系统对照实验——发现其「双刃剑」效应，以及现有条件下知识图谱的瓶颈。"
date: "2026-06-01"
featured: true
linkType: "repo"
stack: ["Python", "RAG", "Contextual Embeddings", "BM25", "Knowledge Graph"]
highlight: "3 phases · 6 controlled experiments · reproducible"
highlight_zh: "3 阶段 · 6 组对照实验 · 全程可复现"
repoURL: "https://github.com/roclee2692/contextual-retrieval-by-anthropic"
---

Reproduced Anthropic's Contextual Retrieval (contextual embeddings + contextual BM25), then designed systematic comparative experiments across structured and government-document datasets. This work is the basis of my first empirical research paper.

## Experiments

| Phase | Dataset | Content |
|---|---|---|
| 1 | Canteen menu (structured lists) | Baseline vs CR vs Jieba+KG |
| 2 | Flood-prevention plans (gov docs) | Baseline vs CR vs Deep KG |
| 3 | Same, OneKE-13B + OpenKG | Knowledge-graph schema optimization |

**Core finding**: CR is a double-edged sword across data types; knowledge graphs still hit real bottlenecks under current conditions.
