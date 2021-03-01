## lbl-toast

基于 Svelte 构建的 Toast 组件，不依赖任何框架。

## 安装

```shell
npm install lbl-toast
yarn add lbl-toast
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

## 在线预览

[在线预览 Demo](http://lblblib.gitee.io/lbl-toast)

## 使用方式

```typescript
import "lbl-toast/dist/index.css"
import Toast from "lbl-toast"

// 全局配置
Toast.config({
  duration: 3000  // 3秒,
  forbidClick: true // 禁止背景点击
  zIndex: 999999  // z-index 层级
})

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

## 参数

| 参数名      | 描述                                                             | 类型    |
| :---------- | :--------------------------------------------------------------- | :------ |
| duration    | 持续时间，0 或负值将永远显示，默认：1500，loading 模式默认为：-1 | number  |
| forbidClick | 是否禁止背景点击，默认：false，loading 模式默认为：true          | boolean |
| zIndex      | z-index 层级，默认：99999                                        | number  |

Toast.loading

| 参数名 | 描述             | 类型         |
| :----- | :--------------- | :----------- |
| text   | 加载框提示文本   | string       |
| style  | 加载样式，共八种 | LoadingStyle |

type LoadingStyle = "style0"
| "style1"
| "style2"
| "style3"
| "style4"
| "style5"
| "style6"
| "style7"
