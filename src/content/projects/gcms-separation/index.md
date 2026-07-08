---
title: "GC-MS Signal Deconvolution & Identification Engine"
title_zh: "GC-MS 色谱信号解耦与成分识别引擎"
description: "End-to-end 1D-CNN for GC-MS: identify components of essential-oil mixtures and predict blend ratios directly from 1D chromatographic signals. Enterprise exploration."
description_zh: "端到端 1D-CNN：直接从一维色谱信号（RT-TIC）识别精油混合物成分并预测配比。企业合作探索项目。"
date: "2026-05-03"
featured: true
linkType: "repo"
stack: ["Python", "1D-CNN", "PyTorch", "GC-MS", "Synthetic Data"]
highlight: "87 monomers · 74,820 samples · ~99% blind-test accuracy (synthetic)"
highlight_zh: "87 种单体 · 74,820 样本 · 合成盲测识别率约 99%"
repoURL: "https://github.com/roclee2692/GC-MS-Signal-Separation"
---

Enterprise-collaboration exploration: an end-to-end **1D-CNN** that deconvolves overlapping GC-MS signals of complex essential-oil mixtures and predicts the blend ratio of core raw materials — replacing manual expert peak-matching.

## Approach & outcome

- **Synthetic-data baseline**: scaled from 10 → **87 monomers**, all pairwise combinations → **74,820 samples**.
- Reached **~99% identification accuracy on synthetic blind tests**.
- **Archived** due to the lack of real enterprise data and a **Sim2Real domain gap** — a first-hand lesson that data quality is the crux of landing industrial AI.
