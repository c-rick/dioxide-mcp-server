# Dioxide MCP Server

基于 Model Context Protocol (MCP) 的 Dioxide 水龙头服务器，用于在测试网络上提供 Dioxide 代币。

## 功能特点

- 提供简单的水龙头服务
- 基于 MCP 协议实现
- 支持测试网络

## 环境要求

- Node.js (支持 ESM)
- Yarn 包管理器

## 安装

```bash
# 克隆仓库
git clone git@github.com:c-rick/dioxide-mcp-server.git

# 安装依赖
yarn install
```

## 使用方法

### 开发模式

```bash
yarn start
```

### 构建项目

```bash
yarn build
```

## API

### 水龙头服务

提供测试网络代币的水龙头服务。

**工具名称:** `faucet`

**参数:**
- `address`: 接收代币的地址（字符串类型）

**返回值:**
- 交易哈希

## 许可证

ISC

## 作者

cc