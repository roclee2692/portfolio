---
title: "Real-time Gesture Detection · YOLOv8"
title_zh: "实时手势检测 · YOLOv8"
description: "Lightweight real-time Rock-Paper-Scissors hand-gesture detector built on Ultralytics YOLOv8-nano, trained on a custom dataset."
description_zh: "基于 Ultralytics YOLOv8-nano 的轻量级实时「石头剪刀布」手势检测器，自建数据集训练。"
date: "2025-12-10"
linkType: "repo"
stack: ["Python", "YOLOv8", "Ultralytics", "OpenCV"]
highlight: "Validation mAP50 0.948 at epoch 50 · real-time webcam demo"
highlight_zh: "第 50 轮验证集 mAP50 0.948 · 实时摄像头演示"
repoURL: "https://github.com/roclee2692/my_yoloV8"
---

A lightweight detector recognizing Rock · Paper · Scissors hand gestures with YOLOv8-nano. The repository's [training results](https://github.com/roclee2692/my_yoloV8/blob/main/results/results.csv) record **validation mAP50 0.94831 at epoch 50** on a custom dataset dominated by left-hand samples; this is not a separate test-set result. The repository README separately reports mAP50 ≈ 0.93 after 50 epochs without explaining the difference between the reported figures. Training, evaluation and webcam-demo scripts are included.
