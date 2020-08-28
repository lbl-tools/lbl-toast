<script lang="ts">
  // import { IconType, LoadingStyle } from "./app"
  import Icon from "./icon/index.svelte"
  import Spinner from "./spinner/index.svelte"

  type IState = {
    show: boolean
    text?: string
    icon?: any
    type?: "loading" | "icon" | "text"
    loadingStyle?: any
    forbidClick?: boolean
  }

  type Option = {
    duration?: number
    forbidClick?: boolean
  }

  const defaultState: IState = {
    show: false,
    text: null,
    icon: null,
    forbidClick: false,
  }

  let state: IState = { ...defaultState }

  export function text(text: string, options?: Option) {
    if (!text) return
    state.type = "text"
    state.text = text
    options = Object.assign({ duration: 1500 }, options)
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
    options?:
      | { text?: string; duration?: number; style?: any; forbidClick?: boolean }
      | string
  ) {
    clearTimeout(timer)
    state.type = "loading"
    if (!options) {
      return show()
    } else if (typeof options === "string") {
      state.text = options
      return show()
    } else {
      state.text = options.text
      state.loadingStyle = options.style || "style0"
      return show(options)
    }
  }

  export function clear() {
    clearTimeout(timer)
    state.show = false
  }

  export function setText(text: string) {
    state.text = text
  }

  function showIconToast(text: string, icon: any, options?: Option) {
    state.type = "icon"
    state.icon = icon
    state.text = text
    options = Object.assign({ duration: 1500 }, options)
    return show(options)
  }

  /** 定时器 */
  let timer: any

  function show(options?: Option) {
    clearTimeout(timer)
    state.show = true
    if (options?.forbidClick) {
      state.forbidClick = true
    } else {
      state.forbidClick = false
    }
    if (options?.duration > 0) {
      timer = setTimeout(() => {
        state.show = false
      }, options!.duration)
    }
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
    opacity: 0;
    visibility: hidden;
    /* pointer-events: none;
    pointer-events: all; */
  }

  .show {
    visibility: visible;
    opacity: 1;
  }

  .content-box {
    background: rgba(0, 0, 0, 0.7);
    /* background: #444; */
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
    /* line-height: 1; */
  }

  .text-box {
    padding: 8px 16px;
    max-width: 70vw;
    text-align: center;
    color: #fff;
  }
</style>

<div
  class="toast-box"
  class:show={state.show}
  style="pointer-events: {state.forbidClick ? 'all' : 'none'}">
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
