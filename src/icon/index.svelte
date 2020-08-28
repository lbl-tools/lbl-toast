<script lang="ts">
  import SucessIcon from "./success.svelte"
  import ErrorIcon from "./error.svelte"
  import InfoIcon from "./info.svelte"
  import WarningIcon from "./warning.svelte"

  export let type: IconType
</script>

{#if type === 'error'}
  <ErrorIcon />
{:else if type === 'success'}
  <SucessIcon />
{:else if type === 'info'}
  <InfoIcon />
{:else if type === 'warning'}
  <WarningIcon />
{/if}
