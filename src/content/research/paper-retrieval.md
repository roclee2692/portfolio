---
title: "A Systematic Comparison of Retrieval-Augmentation Methods for Chinese Vertical Domains"
title_zh: "中文垂直领域检索增强方法的系统对比研究：上下文检索、知识图谱与重排序在水利防洪预案中的实证分析"
description: "First-author empirical study reproducing Anthropic's Contextual Retrieval and comparing four routes (hybrid baseline, CR, knowledge graph, cross-encoder reranking) on real flood-prevention plans."
description_zh: "独立完成的实证研究：复现 Anthropic 的 Contextual Retrieval，在真实水利防洪预案上系统对比基线混合检索、上下文增强检索、知识图谱与 Cross-Encoder 重排序四条路线。"
date: "2026-06-15"
type: "paper"
status: "In preparation (unpublished)"
status_zh: "在写 · 未发表"
id: "2×2 ablation · n=30 significance test · code open-sourced"
url: "https://github.com/roclee2692/contextual-retrieval-by-anthropic"
---

Completed the full research loop independently under one-on-one advising: topic, design, analysis and writing.

- **Corpus**: real water-conservancy flood-prevention plans — 6 normative documents, ~230k characters, 1,080 semantic chunks.
- **Design**: 2×2 ablation with statistical significance testing (n=30), comparing hybrid-retrieval baseline, Contextual Retrieval, knowledge graph, and Cross-Encoder reranking.
- **Finding**: reveals the applicability boundary of CR in Chinese vertical domains and the decisive corrective role of reranking. Experiment code is open-sourced.
