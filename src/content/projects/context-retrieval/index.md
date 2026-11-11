---
title: "Contextual Retrieval: Empirical Study"
title_zh: "上下文检索（Contextual Retrieval）实证研究"
description: "Reproduced Anthropic's Contextual Retrieval, then ran systematic comparisons across domains — finding a 'double-edged sword' effect and the limits of knowledge graphs."
description_zh: "复现 Anthropic 的 Contextual Retrieval，并在多领域数据集上做系统对照实验——发现其「双刃剑」效应，以及现有条件下知识图谱的瓶颈。"
date: "2026-06-01"
featured: true
linkType: "repo"
stack: ["Python", "RAG", "Contextual Embeddings", "BM25", "Knowledge Graph"]
highlight: "3 phases · 6 controlled comparisons"
highlight_zh: "3 阶段 · 6 组对照实验"
repoURL: "https://github.com/roclee2692/contextual-retrieval-by-anthropic"
---

Reproduced Anthropic's Contextual Retrieval (contextual embeddings + contextual BM25), then designed systematic comparative experiments across structured and government-document datasets. This work is the basis of my first empirical research paper.

## Experiments

| Phase | Dataset | Content |
|---|---|---|
| 1 | Canteen menu (structured lists) | Baseline vs CR vs Jieba+KG |
| 2 | Flood-prevention plans (gov docs) | Baseline vs CR vs Deep KG |
| 3 | Flood-prevention plans | OneKE-13B schema experiments and Baseline vs CR / reranker comparisons |

**Findings and limits**: Results varied by query and configuration, while the knowledge-graph experiments encountered extraction-quality limitations. The 30-question Baseline vs CR result uses a keyword-hit metric, and the older reranker record has evaluation limitations. Later question-answering experiments in the project log used a different evaluation setup and should not be directly compared with those results. The flood-prevention source documents are not public, so those experiments cannot be fully reproduced from the repository alone.
