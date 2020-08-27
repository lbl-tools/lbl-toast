<script lang="ts">
  import { IconType, LoadingStyle } from "./app"
  import Icon from "./icon/index.svelte"
  import Spinner from "./spinner/index.svelte"

  type IState = {
    show: boolean
    text?: string
    icon?: IconType
    type?: "loading" | "icon" | "text"
    loadingStyle?: LoadingStyle
  }

  const defaultState: IState = {
    show: false,
    text: null,
    icon: null,
  }

  let state: IState = { ...defaultState }

  export function text(text: string) {
    if (!text) return
    state.type = "text"
    state.text = text
    return show()
  }

  export function info(text: string, duration?: number) {
    return showIconToast(text, "info", duration)
  }

  export function success(text: string, duration?: number) {
    return showIconToast(text, "success", duration)
  }

  export function error(text: string, duration?: number) {
    return showIconToast(text, "error", duration)
  }

  export function warning(text: string, duration?: number) {
    return showIconToast(text, "warning", duration)
  }

  export function loading(
    options?:
      | { text?: string; duration?: number; style?: LoadingStyle }
      | string
  ) {
    state.type = "loading"
    if (!options) {
      state.show = true
      return clear
    } else if (typeof options === "string") {
      state.text = options
      state.show = true
      return clear
    } else {
      state.text = options.text
      state.show = true
      state.loadingStyle = options.style || "style0"

      if (options.duration) {
        setTimeout(() => {
          clear()
        }, options.duration)
      }

      return {
        setText,
        clear,
      }
    }
  }

  export function clear() {
    clearTimeout(timer)
    state = { ...defaultState }
  }

  export function setText(text: string) {
    state.text = text
  }

  function showIconToast(text: string, icon: IconType, duration?: number) {
    state.type = "icon"
    state.icon = icon
    state.text = text
    return show(duration)
  }

  /** 定时器 */
  let timer: NodeJS.Timeout

  function show(duration = 1000) {
    clearTimeout(timer)
    state.show = true
    if (duration !== -1) {
      timer = setTimeout(() => {
        state.show = false
      }, duration)
    }
    return clear
  }
</script><style>
  .toast-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: all 0.3s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .show {
    visibility: visible;
    opacity: 1;
  }

  .content-box {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    z-index: 1002;
  }

  .icon-box,
  .loading-box {
    width: 120px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-box > .text,
  .loading-box > .text {
    padding-top: 16px;
    text-align: center;
    font-size: 13px;
    color: #fff;
    line-height: 1;
  }

  .text-box {
    padding: 8px 16px;
    max-width: 70vw;
    text-align: center;
    color: #fff;
  }
</style><div class="toast-box" class:show={state.show}>
  <div class="content-box">
    {#if state.type === 'icon'}
      <div class="icon-box">
        <Icon type={state.icon} />

        {#if state.text}
          <div class="text">{state.text}</div>
        {/if}
      </div>
    {:else if state.type === 'text'}
      <div class="text-box">{state.text}</div>
    {:else}
      <div class="loading-box">
        <div class="icon">
          <Spinner type={state.loadingStyle} />
        </div>
        {#if state.text}
          <div class="text">{state.text}</div>
        {/if}
      </div>
    {/if}
  </div>
</div>

