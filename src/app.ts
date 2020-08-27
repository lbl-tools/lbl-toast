import App from "./app.svelte"

// export type IconType = "success" | "error" | "info" | "warning"
// export type LoadingStyle =
//   | "style0"
//   | "style1"
//   | "style2"
//   | "style3"
//   | "style4"
//   | "style5"
//   | "style6"
//   | "style7"

const Toast = new App({
  target: document.body,
})

export default Toast
