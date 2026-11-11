---
title: "Chinese-LLM LoRA Fine-tuning Framework"
title_zh: "中文大模型 LoRA 微调框架"
description: "A professional LoRA / QLoRA fine-tuning framework for Chinese LLMs — training, evaluation, an interactive UI and containerized deployment."
description_zh: "中文大模型 LoRA / QLoRA 微调实践：整理训练、评估、交互界面与部署相关代码。"
date: "2026-01-10"
linkType: "repo"
stack: ["Python", "PyTorch", "LoRA / QLoRA", "PEFT", "Gradio"]
highlight: "ChatGLM3 / Qwen / Baichuan2 / Yi · BLEU-ROUGE eval · Docker"
highlight_zh: "支持 ChatGLM3 / Qwen / Baichuan2 / Yi · BLEU-ROUGE 评估 · Docker 部署"
repoURL: "https://github.com/roclee2692/Chinese-LLM-LoRA-Finetuning"
---

A full pipeline from data preprocessing to deployment for efficiently fine-tuning mainstream Chinese LLMs.

- **Multi-model**: ChatGLM3, Qwen, Baichuan2, Yi
- **Efficient training**: LoRA + QLoRA quantized fine-tuning
- **Evaluation**: built-in BLEU / ROUGE metrics
- **UI + tracking**: Gradio compare interface, Weights & Biases experiment tracking, Docker one-click deploy
