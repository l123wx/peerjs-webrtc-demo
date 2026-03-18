# WebRTC 点对点通信演示项目

简体中文 | [English](./README_EN.md)

**使用 Vue3 + TypeScript + Vite + PeerJS + Trystero**

这是一个 WebRTC 点对点通信演示项目，展示了如何使用 PeerJS 和 Trystero 库实现浏览器之间的直接通信。

## 项目概述

本项目演示了两种不同的 WebRTC 实现方式：

1. **PeerJS 实现** - 传统的点对点连接方式
2. **Trystero 实现** - 房间模式的多人通信方式

## 功能特性

- ✅ 创建 Peer 实例并连接到信令服务器
- ✅ 建立点对点数据连接
- ✅ 发送和接收文本消息
- ✅ 支持两种 WebRTC 库实现
- ✅ 本地信令服务器配置
- ✅ Vue 3 + TypeScript 现代化前端

## 技术栈

- **前端框架**: Vue 3 + Composition API
- **开发工具**: Vite + TypeScript
- **WebRTC 库**:
  - PeerJS (v1.5.4) - 简化 WebRTC 连接
  - Trystero (v0.20.0) - 房间模式通信
- **路由**: Vue Router 4
- **包管理**: pnpm
- **信令服务器**: PeerServer (Node.js)

## 项目结构

```
peerjs-webrtc-demo/
├── src/
│   ├── views/
│   │   ├── index.vue      # PeerJS 实现页面
│   │   └── trystero.vue   # Trystero 实现页面
│   ├── router/index.ts    # 路由配置
│   ├── App.vue           # 主应用组件
│   └── main.ts           # 应用入口
├── server/
│   ├── index.js          # PeerServer 信令服务器
│   └── key/              # SSL 证书目录
└── package.json
```

## 快速开始

### 1. 安装依赖

```bash
# 安装前端依赖
pnpm install

# 安装服务器依赖
cd server
pnpm install
cd ..
```

### 2. 启动信令服务器

```bash
cd server
pnpm dev
```

信令服务器将在 `http://localhost:9000` 启动。

### 3. 启动前端应用

```bash
# 在新终端中
pnpm dev
```

前端应用将在 `http://localhost:5173` 启动。

### 4. 使用应用

1. 打开浏览器访问 `http://localhost:5173`
2. 在第一个标签页中：
   - 输入你的 ID（例如 "user1"）
   - 点击 "create peer" 按钮
3. 在第二个标签页中：
   - 输入你的 ID（例如 "user2"）
   - 点击 "create peer" 按钮
   - 在 "targetId" 输入框中输入 "user1"
   - 点击 "connect" 按钮
4. 现在两个标签页已连接，可以互相发送消息

## 路由说明

- `/` - PeerJS 实现页面
- `/trystero` - Trystero 实现页面

## 配置说明

### 信令服务器配置 (`server/index.js`)

```javascript
const peerServer = PeerServer({
    port: 9000,           // 服务器端口
    path: '/myapp',       // 路径前缀
    // ssl: {             // 启用 HTTPS（需要证书）
    //     key: fs.readFileSync('./key/server.key'),
    //     cert: fs.readFileSync('./key/server.crt')
    // },
})
```

### 前端 Peer 配置 (`src/views/index.vue`)

```javascript
peer = new Peer(myId.value, {
  host: "localhost",      // 信令服务器地址
  port: 9000,             // 信令服务器端口
  path: '/myapp'          // 路径前缀
});
```

## 开发说明

### 添加新功能

1. 在 `src/views/` 目录下创建新的 Vue 组件
2. 在 `src/router/index.ts` 中添加路由配置
3. 实现 WebRTC 相关功能

### 调试技巧

- 打开浏览器开发者工具查看控制台日志
- 检查网络请求确保连接到信令服务器
- 使用 `console.log` 调试连接状态

## 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。推送代码到 master 分支会自动触发部署流程。

## 相关资源

- [PeerJS 文档](https://peerjs.com/docs/)
- [Trystero 文档](https://github.com/dmotz/trystero)
- [WebRTC 官方文档](https://webrtc.org/)
- [Vue 3 文档](https://vuejs.org/)

## 许可证

MIT
