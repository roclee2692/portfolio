---
title: "GC-MS Signal Deconvolution & Identification Engine"
title_zh: "GC-MS 色谱信号解耦与成分识别引擎"
description: "End-to-end 1D-CNN for GC-MS: identify components of essential-oil mixtures and predict blend ratios directly from 1D chromatographic signals. Enterprise exploration."
description_zh: "端到端 1D-CNN：直接从一维色谱信号（RT-TIC）识别精油混合物成分并预测配比。企业合作探索项目。"
date: "2026-05-03"
featured: true
cover: "/covers/gcms-separation.svg"
linkType: "repo"
stack: ["Python", "1D-CNN", "PyTorch", "GC-MS", "Synthetic Data"]
highlight: "87 monomers · 74,820 synthetic samples · real-mixture validation"
highlight_zh: "87 种单体 · 74,820 条合成样本 · 真实混合样本验证"
repoURL: "https://github.com/roclee2692/GC-MS-Signal-Separation"
---

Enterprise-collaboration exploration: an end-to-end **1D-CNN** for identifying components and estimating ratios from GC-MS signals of essential-oil mixtures.

## Approach & outcome

- **Synthetic-data baseline**: scaled from 10 → **87 monomers**, all pairwise combinations → **74,820 samples**.
- An earlier 9-class synthetic experiment reached **99.44% order-invariant pair accuracy** on a single split; that evaluation set also guided early stopping and was not an independent blind test. Ratio prediction remained difficult.
- In the later 87-class experiment, the unaugmented CNN recorded **88.96% order-invariant pair accuracy** on the synthetic evaluation split; the stronger-augmentation run recorded **29.00%** under different evaluation-input conditions. The evaluation split was also used for model selection, so these are not independent blind-test results.
- In later tests on **three real mixtures**, four models made 12 predictions: one identified a single true component at Top-1, and none identified both. Stronger augmentation did not improve complete-pair recognition on those samples, illustrating the **Sim2Real domain gap**.
- **Archived** due to limited labelled real-mixture data and the Sim2Real gap — a first-hand lesson in data-centric industrial AI.
