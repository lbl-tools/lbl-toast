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
  duration?: number
  forbidClick?: boolean
}

type Result = {
  setText: (text: string) => void
  clear: () => void
}

interface _Toast {
  text(text: string, duration?: Option): Result
  info(text: string, duration?: Option): Result
  success(text: string, duration?: Option): Result
  error(text: string, duration?: Option): Result
  warning(text: string, duration?: Option): Result
  loading(
    options?:
      | {
          text?: string
          duration?: number
          style?: LoadingStyle
          forbidClick?: boolean
        }
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
