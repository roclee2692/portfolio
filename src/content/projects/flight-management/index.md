---
title: "Flight Management System (from scratch)"
title_zh: "航班管理系统（全手写）"
description: "C++11 flight management & route recommendation built on hand-written data structures, with a from-scratch HTTP server and a web UI featuring Dijkstra visualization."
description_zh: "基于 C++11 手写数据结构的航班管理与航线推荐系统，附纯手写 HTTP 服务与带 Dijkstra 可视化的网页前端。"
date: "2025-06-15"
linkType: "repo"
stack: ["C++11", "Data Structures", "Dijkstra", "HTTP Server"]
highlight: "Chained hash · linked list · queue · graph + Dijkstra, all hand-written"
highlight_zh: "拉链哈希 · 链表 · 循环队列 · 图 + Dijkstra 全部手写"
repoURL: "https://github.com/roclee2692/flight-management-system"
---

Data-structures course design where every core structure — chained hash table, booking linked list, circular queue, adjacency-list graph with Dijkstra, and a min-heap — is **implemented from scratch** without relying on STL containers for the core logic.

Two front-ends over the same data structures: a menu-driven CLI, and a web version served by a **hand-written HTTP server** with a built-in Dijkstra shortest-path visualization.
