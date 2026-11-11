type Section = { title: string; paragraph?: string; points?: string[] };
type Detail = { intro: string; sections: Section[] };

// Keep project descriptions separate from the English Markdown so both routes
// present a complete account, including evaluation limits where relevant.
export const projectDetailsZh: Record<string, Detail> = {
  "bid-analysis": {
    intro: "面向校企合作场景的标书智能分析项目，帮助使用者梳理招标要求并与企业已有资质、业绩进行匹配。",
    sections: [
      { title: "我的工作", points: ["参与需求分析，以及从非结构化企业资料中抽取资质、业绩三元组的方案设计。", "参与迭代招标文件拆解、资质抽取、企业画像匹配评分和未命中项补抽的多阶段大模型流程。"] },
      { title: "成果", paragraph: "本人为相关发明专利的发明人之一。专利申请号为 202610250247.1，已于 2026 年 6 月 9 日公布。" },
    ],
  },
  "context-retrieval": {
    intro: "围绕中文垂直领域检索，复现 Contextual Retrieval，并比较不同文档类型、检索组合和评估方式。",
    sections: [
      { title: "研究过程", points: ["在结构化菜单和水利防洪预案等语料上开展多阶段实验，对照混合检索、上下文增强、知识图谱与重排序等方案。", "分析查询类型、知识抽取质量和评价方式对结果的影响，为检索方案选型积累经验。"] },
      { title: "结果如何解读", paragraph: "早期 30 题基线与上下文检索采用关键词命中指标，后续问答实验使用另一套评估方式；不同阶段不能直接拼成同一组结果。n=30 的显著性检验针对相似度分数，不能据此声称检索质量显著提升。原始防洪文档及部分后续评估材料未公开，代码仓库不足以单独复现全部实验。" },
    ],
  },
  "gcms-separation": {
    intro: "探索从 GC-MS 一维色谱信号识别精油混合物成分并估计配比，使用 PyTorch 与 1D-CNN 建模。",
    sections: [
      { title: "数据与模型", points: ["构建 87 类单体的两两组合合成数据，共 74,820 条样本，并训练成分识别模型。", "早期 9 类实验的无序成分对识别率为 99.44%；后续 87 类无增强 CNN 在一次合成数据评估划分中为 88.96%。"] },
      { title: "真实样本与验证边界", paragraph: "评估集参与了模型选择，不能称为独立盲测。对 3 个真实混合样本使用 4 个模型共预测 12 次，其中 1 次命中一个真实成分，没有一次同时识别出两个成分；这暴露了合成数据与真实数据之间的差距。项目因真实标注数据不足而归档。" },
    ],
  },
  "mcm-icm-2025": {
    intro: "作为三人团队队长参与 2025 年全国大学生数学建模竞赛 C 题，获得河南赛区一等奖。",
    sections: [
      { title: "问题与方法", paragraph: "围绕 NIPT 动态决策问题开展数据清理、统计建模、生存分析与风险约束下的决策优化；使用分组交叉验证等方法处理分类问题。" },
      { title: "项目材料", paragraph: "仓库提供竞赛论文、模型代码和数据。方法细节及各问的实现可从代码入口查看。" },
    ],
  },
  "ncwu-smartcity": {
    intro: "在武汉中地数码校企联合实训中与团队开发的智慧城市 GIS 可视化原型，公开仓库为项目展示版。",
    sections: [
      { title: "实现内容", points: ["使用 Vue 3、Vite、Leaflet、OpenStreetMap 和 GeoJSON 组织地图与地理数据。", "通过 AntV 和 Three.js 展示城市事件、交通、桥梁、航线与三维场景；展示版使用模拟数据接口。"] },
      { title: "项目经历", paragraph: "实训时间为 2024 年 12 月至 2025 年 1 月，优秀结业。" },
    ],
  },
  "rps-yolov8": {
    intro: "基于 YOLOv8 与 OpenCV 的剪刀、石头、布手势检测项目，包含自定义数据集训练和摄像头推理。",
    sections: [
      { title: "实现过程", paragraph: "完成数据准备、50 轮模型训练、验证及摄像头检测流程；仓库中保留了训练结果与相关脚本。" },
      { title: "评估结果", paragraph: "训练记录中第 50 轮验证集 mAP50 为 0.94831；仓库旧 README 另记约 0.93，差异原因未记录。数据以左手样本为主，不能把验证集结果当作独立测试集表现。" },
    ],
  },
  "chatglm-rag-pdf": {
    intro: "面向本地 PDF 的检索增强问答练习，围绕文档处理、检索和生成搭建完整流程。",
    sections: [
      { title: "流程", paragraph: "对 PDF 分块并构建向量索引，检索与问题相关的片段，再交给 ChatGLM 生成回答或摘要。项目使用 LangChain 和 FAISS。" },
      { title: "项目材料", paragraph: "运行配置与实现细节见开源仓库。" },
    ],
  },
  "comment-miner": {
    intro: "将视频评论整理为可阅读报告的工具，支持 YouTube 与 B 站评论处理。",
    sections: [
      { title: "处理流程", points: ["先用规则筛除重复、广告和低信息评论。", "再分批交由语言模型筛选，最后生成可编辑的分析报告。"] },
      { title: "使用方式", paragraph: "项目包含本地 Web 工具和浏览器扩展，具体配置与支持范围见开源仓库。" },
    ],
  },
  "cp-templates": {
    intro: "面向竞赛和日常复习的 C++ 数据结构与算法模板库。",
    sections: [
      { title: "内容", paragraph: "整理常见算法模板及配套练习题，覆盖图论、动态规划和基础数据结构等主题，便于查阅和练习。" },
      { title: "项目材料", paragraph: "具体模板、题目及用法可在仓库中查看。" },
    ],
  },
  "flight-management": {
    intro: "数据结构课程设计：用 C++ 构建航班管理、订票与航线推荐系统。",
    sections: [
      { title: "实现内容", paragraph: "实现哈希表、链表、循环队列、邻接表和最短路径算法，并提供命令行与 Web 两种交互方式。" },
      { title: "可视化", paragraph: "Web 版本通过项目中的 HTTP 服务展示航线及 Dijkstra 最短路径过程。" },
    ],
  },
  "llm-lora-finetuning": {
    intro: "中文大模型 LoRA 微调相关的开源实践，整理数据预处理、训练与评估流程。",
    sections: [
      { title: "仓库内容", paragraph: "项目包含 LoRA / QLoRA、模型配置、评估和交互界面等代码；可在仓库中查看支持的配置及具体运行方式。" },
      { title: "使用边界", paragraph: "项目代码和配置展示了实现路径，具体效果应以对应数据、环境和实际运行记录为准。" },
    ],
  },
  "machine-learning": {
    intro: "整理机器学习与深度学习核心算法的学习仓库，结合理论笔记、代码和练习。",
    sections: [
      { title: "学习范围", paragraph: "涵盖回归、决策树、SVM、聚类、神经网络、CNN、RNN 和 Transformer 等主题。" },
      { title: "项目材料", paragraph: "各章节的笔记、示例和练习可从仓库查阅。" },
    ],
  },
  "resonance": {
    intro: "帮助伴侣讨论观点差异的结构化问答工具，提供中英文界面。",
    sections: [
      { title: "功能", paragraph: "双方分别作答后，通过雷达图查看不同维度的回答，并使用对话提示展开交流。" },
      { title: "技术实现", paragraph: "使用 React、TypeScript、Vite 和 Recharts，前端本地保存数据，无账号和后端。" },
    ],
  },
  "volunteer-points": {
    intro: "面向书院场景的学生志愿时长与积分管理微信小程序。",
    sections: [
      { title: "功能与实现", paragraph: "使用微信小程序及云开发记录志愿或劳动时长，并支持积分兑换；云函数和前端代码收录在仓库中。" },
      { title: "运行方式", paragraph: "可在微信开发者工具中导入项目，并按仓库说明配置云开发环境。" },
    ],
  },
};
