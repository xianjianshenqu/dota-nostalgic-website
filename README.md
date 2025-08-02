# DOTA怀旧网站

一个致敬经典DOTA的怀旧主题网站，重现那些年我们一起在网吧征战的美好时光。

## 🎮 项目简介

这是一个以DOTA为主题的怀旧网站，包含以下核心功能：

- **🏠 首页** - 经典DOTA风格的欢迎页面
- **📅 时间轴** - DOTA发展历程和个人游戏记录
- **📖 英雄图鉴** - 经典英雄展示和评价系统
- **🏪 网吧档案** - 怀旧网吧记录和地图标记
- **🎬 录像分享** - 经典比赛录像和弹幕系统
- **📻 老兵电台** - 怀旧音乐播放器

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由管理**: React Router DOM
- **状态管理**: Zustand
- **数据库**: Supabase
- **UI组件**: Lucide React
- **通知系统**: Sonner

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm (推荐) 或 npm

### 安装依赖

```bash
pnpm install
```

### 配置环境变量

创建 `.env.local` 文件并配置 Supabase 相关信息：

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

## 📁 项目结构

```
src/
├── components/          # 通用组件
│   ├── Auth.tsx        # 认证组件
│   ├── Layout.tsx      # 布局组件
│   └── Empty.tsx       # 空状态组件
├── contexts/           # React Context
│   └── AuthContext.tsx # 认证上下文
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── Timeline.tsx    # 时间轴
│   ├── HeroBook.tsx    # 英雄图鉴
│   ├── PubStory.tsx    # 网吧档案
│   ├── ReplayHub.tsx   # 录像分享
│   └── OldGuardFM.tsx  # 老兵电台
├── hooks/              # 自定义 Hooks
├── lib/                # 工具函数
├── sql/                # 数据库脚本
└── supabase/           # Supabase 配置
```

## 🎨 设计特色

- **怀旧色彩**: 采用经典的暗金色调和复古UI设计
- **像素字体**: 使用像素风格字体营造怀旧氛围
- **交互动效**: 丰富的悬停效果和过渡动画
- **响应式设计**: 完美适配各种设备尺寸
- **音效体验**: 集成经典游戏音效

## 🔐 功能特性

### 用户系统
- 用户注册/登录
- 个人资料管理
- 权限控制

### 内容管理
- 用户生成内容(UGC)
- 实时数据同步
- 内容审核机制

### 交互体验
- 弹幕系统
- 评论功能
- 点赞收藏
- 地图标记

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

*重温经典，致敬青春！* 🎮