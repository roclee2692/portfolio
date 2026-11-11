# 李鹏的个人作品集

[访问中文作品集](https://portfolio-6mr.pages.dev/zh/) · [GitHub](https://github.com/roclee2692)

展示 AI 应用、信息检索与机器学习相关的项目实践、科研经历和竞赛成果。网站支持中英文，每个项目提供背景、实现过程、结果及必要的验证边界，公开项目可跳转至对应代码仓库。

## 精选项目

- **标书智能分析系统**：参与招标要求解析、企业资质抽取和多阶段匹配的校企合作项目。企业项目代码未公开，相关发明专利申请已公布。
- **上下文检索实证研究**：比较混合检索、Contextual Retrieval、知识图谱和重排序；对不同阶段的评价口径与数据公开范围作说明。
- **GC-MS 色谱成分识别**：构建 87 类、74,820 条合成样本，探索一维色谱成分识别及真实混合样本的迁移差距。
- **数学建模竞赛**：三人团队完成 2025 年全国大学生数学建模竞赛 C 题，获得河南赛区一等奖。
- **智慧武汉 GIS 与手势检测**：分别展示团队可视化开发和 YOLOv8 训练、验证与摄像头推理实践。

更多项目及来源链接可在[项目列表](https://portfolio-6mr.pages.dev/zh/projects)查看。

## 本地开发

项目基于 Astro、TypeScript 和 Tailwind CSS，通过 Markdown 管理项目与研究条目。安装依赖后在项目根目录运行：

```bash
npm install
npm run dev        # 本地开发
npm run build      # 类型检查并构建到 dist/
npm run lint       # ESLint 检查
```

网站使用 Cloudflare Pages 部署；`functions/` 包含部署环境使用的语言识别中间件。

## 说明与致谢

本项目基于 [Astro Nano](https://github.com/markhorn-dev/astro-nano) 主题修改，原项目采用 MIT 许可；本仓库许可见 [LICENSE](LICENSE)。项目中的实验指标需结合对应的数据集、评估方式与结果说明理解。
