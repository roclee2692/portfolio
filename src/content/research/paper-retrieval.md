---
title: "A Systematic Comparison of Retrieval-Augmentation Methods for Chinese Vertical Domains"
title_zh: "中文垂直领域检索增强方法的系统对比研究：上下文检索、知识图谱与重排序在水利防洪预案中的实证分析"
description: "First-author empirical study reproducing Anthropic's Contextual Retrieval and comparing four routes (hybrid baseline, CR, knowledge graph, cross-encoder reranking) on real flood-prevention plans."
description_zh: "独立完成的实证研究：复现 Anthropic 的 Contextual Retrieval，在真实水利防洪预案上系统对比基线混合检索、上下文增强检索、知识图谱与 Cross-Encoder 重排序四条路线。"
date: "2026-06-15"
type: "paper"
status: "In preparation (unpublished)"
status_zh: "在写 · 未发表"
id: "Comparative retrieval experiments · code open-sourced · research in progress"
url: "https://github.com/roclee2692/contextual-retrieval-by-anthropic"
---

Completed the full research loop independently under one-on-one advising: topic, design, analysis and writing.

- **Corpus**: real water-conservancy flood-prevention plans — 6 normative documents, ~230k characters, 1,080 semantic chunks.
- **Design**: comparative experiments on hybrid retrieval, Contextual Retrieval, knowledge graphs and reranking. Earlier and later evaluations used different datasets and measures and should not be directly compared.
- **Limits**: the n=30 significance test concerned similarity scores, not a demonstrated statistically significant gain in retrieval quality. Source documents and all later evaluation artefacts are not public.
