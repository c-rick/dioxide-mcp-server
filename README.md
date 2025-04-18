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

## MCP 配置使用说明

### 客户端配置

在客户端中使用本服务，需要在 MCP 配置中添加相应的 JSON 配置。以下是配置示例：

```json
{
  "mcpServers": {
    "dioxide-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "dioxide-mcp-server"
      ]
    }
  }
}
```

### 使用方法

1. 将上述 JSON 配置添加到您的 MCP 客户端配置中
2. 在客户端中调用 `faucet` 工具，并提供接收代币的地址
3. 服务器将处理请求并返回交易哈希

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