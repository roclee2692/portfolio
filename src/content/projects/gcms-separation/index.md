---
title: "GC-MS Signal Deconvolution & Identification Engine"
title_zh: "GC-MS 色谱信号解耦与成分识别引擎"
description: "End-to-end deep learning for GC-MS: identify components of essential-oil mixtures and predict blend ratios directly from 1D chromatographic signals."
description_zh: "端到端深度学习：直接从一维色谱信号（RT-TIC）识别精油混合物成分，并预测核心原料的混合配比。"
date: "2026-05-03"
featured: true
linkType: "repo"
stack: ["Python", "Deep Learning", "PyTorch", "GC-MS", "Synthetic Data"]
highlight: "74,820 synthetic samples · 87 monomers · enterprise collaboration"
highlight_zh: "74,820 合成样本 · 87 种单体 · 校企合作落地探索"
repoURL: "https://github.com/roclee2692/GC-MS-Signal-Separation"
---

Industrial data-science project from a real enterprise need: deconvolve overlapping GC-MS signals of complex essential-oil mixtures, and predict the blend ratio of core raw materials — without manual expert peak-matching.

## Approach

- **Synthetic-data baseline**: since perfectly-labelled real mixtures are costly, built a large synthetic corpus of chromatograms.
- **Scaled from 10 → 87 monomers**: all pairwise `C(87,2)` combinations, expanding to **74,820 samples** for large-scale ablation.
- End-to-end model consuming 1D RT-TIC signals → component identification + ratio prediction.
