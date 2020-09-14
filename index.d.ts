type LoadingStyle =
  | "style0"
  | "style1"
  | "style2"
  | "style3"
  | "style4"
  | "style5"
  | "style6"
  | "style7"

type Option = {
  /** 持续时间，0或负值将永远显示，默认：1500，loading模式默认为：-1 */
  duration?: number
  /** 是否禁止背景点击，默认：false，loading模式默认为：true */
  forbidClick?: boolean
  /** z-index 层级，默认：99999 */
  zIndex?: number
}

type Result = {
  setText: (text: string) => void
  clear: () => void
}

interface _Toast {
  config(option: Option)
  text(text: string, option?: Option): Result
  info(text: string, option?: Option): Result
  success(text: string, option?: Option): Result
  error(text: string, option?: Option): Result
  warning(text: string, option?: Option): Result
  loading(
    option?:
      | ({
          text?: string
          style?: LoadingStyle
        } & Option)
      | string
  ): Result

  clear(): void
  setText(text: string): void
}

declare global {
  interface Window {
    Toast: _Toast
  }
}

const Toast: _Toast
export default Toast
