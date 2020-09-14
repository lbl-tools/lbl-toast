<script lang="ts">
  import { fade } from "svelte/transition"
  import Icon from "./icon/index.svelte"
  import Spinner from "./spinner/index.svelte"

  type IState = {
    show: boolean
    text?: string
    icon?: IconType
    type?: "loading" | "icon" | "text"
    loadingStyle?: LoadingStyle
    forbidClick?: boolean
    zIndex?: number
  }

  type Option = {
    /** 持续时间，0或负值将永远显示 */
    duration?: number
    /** 禁止背景点击 */
    forbidClick?: boolean
    /** z-index 层级 */
    zIndex?: number
  }

  const defaultState: IState = {
    show: false,
    text: null,
    icon: null,
    forbidClick: false,
    zIndex: 99999,
  }

  let defaultConfig: Option = {
    duration: 1500,
    zIndex: 99999,
    forbidClick: false,
  }

  let state: IState = { ...defaultState }

  export function config(_config: Option) {
    defaultConfig = { ...defaultConfig, ..._config }
  }

  export function text(text: string, options?: Option) {
    if (!text) return
    state.type = "text"
    state.text = text
    options = { ...defaultConfig, ...options }
    return show(options)
  }

  export function info(text: string, options?: Option) {
    return showIconToast(text, "info", options)
  }

  export function success(text: string, options?: Option) {
    return showIconToast(text, "success", options)
  }

  export function error(text: string, options?: Option) {
    return showIconToast(text, "error", options)
  }

  export function warning(text: string, options?: Option) {
    return showIconToast(text, "warning", options)
  }

  export function loading(
    option?:
      | ({
          text?: string
          style?: LoadingStyle
        } & Option)
      | string
  ) {
    clearTimeout(timer)
    state.type = "loading"
    // loading 模式时背景默认不可点击
    let _defaultConfig = { ...defaultConfig, duration: -1, forbidClick: true }

    if (!option) {
      return show(_defaultConfig)
    } else if (typeof option === "string") {
      state.text = option
      return show(_defaultConfig)
    } else {
      state.text = option.text
      state.loadingStyle = option.style || "style0"
      option = { ..._defaultConfig, ...option }
      return show(option)
    }
  }

  export function clear() {
    clearTimeout(timer)
    state.show = false
  }

  export function setText(text: string) {
    state.text = text
  }

  function showIconToast(text: string, icon: IconType, options?: Option) {
    state.type = "icon"
    state.icon = icon
    state.text = text
    options = { ...defaultConfig, ...options }
    return show(options)
  }

  /** 定时器 */
  let timer: any

  function show(options: Option) {
    clearTimeout(timer)
    state.show = true
    state.forbidClick = options.forbidClick
    if (options.duration > 0) {
      timer = setTimeout(() => {
        state.show = false
      }, options.duration)
    }
    state.zIndex = options.zIndex
    return {
      setText,
      clear,
    }
  }
</script>

<style>
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
  }

  .content-box {
    background: rgba(0, 0, 0, 0.7);
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
    padding-top: 12px;
    text-align: center;
    font-size: 13px;
    color: #fff;
  }

  .text-box {
    padding: 8px 16px;
    max-width: 70vw;
    text-align: center;
    color: #fff;
  }
</style>

{#if state.show}
  <div
    class="toast-box"
    transition:fade={{ duration: 300 }}
    style="pointer-events: {state.forbidClick ? 'all' : 'none'}; z-index: {state.zIndex}">
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
{/if}
