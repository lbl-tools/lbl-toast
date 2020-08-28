## lb-toast
基于 Svelte 构建的 Toast 组件，不依赖任何框架。

#### 安装

```shell
npm install lb-toast
yarn add lb-toast
```

or

```html
<head>
  <link rel="stylesheet" href="../dist/index.css" />
  <script defer src="../dist/index.js"></script>
</head>

<script>
  Toast.info("哈哈哈哈")
</script>
```


#### 在线预览
[在线预览 Demo](https://lb-tools.github.io/lb-toast/)

#### 使用方式

```typescript
import "lb-toast/dist/index.css"
import Toast from "lb-toast"

// 默认 duration 1500 毫秒
// 默认背景可点击
Toast.info("普通信息 toast")
Toast.error("异常信息 toast")
// forbidClick: 禁止背景点击
Toast.success("成功信息 toast", { duration: 300, forbidClick: true })
Toast.warning("警告信息 toast", { duration: 1500 })

// 加载弹窗
const { setText, clear } = Toast.loading()

// 关闭弹窗
Toast.clear()

// 动态更新文字
Toast.setText("动态更换文字")
```