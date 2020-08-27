<script lang="ts">
  // import { LoadingStyle } from "../app"

  import SpinnerStyle0 from "./style0.svelte"
  import SpinnerStyle1 from "./style1.svelte"
  import SpinnerStyle2 from "./style2.svelte"
  import SpinnerStyle3 from "./style3.svelte"
  import SpinnerStyle4 from "./style4.svelte"
  import SpinnerStyle5 from "./style5.svelte"
  import SpinnerStyle6 from "./style6.svelte"
  import SpinnerStyle7 from "./style7.svelte"

  export let type: any
</script>

{#if type === 'style1'}
  <SpinnerStyle1 />
{:else if type === 'style2'}
  <SpinnerStyle2 />
{:else if type === 'style3'}
  <SpinnerStyle3 />
{:else if type === 'style4'}
  <SpinnerStyle4 />
{:else if type === 'style5'}
  <SpinnerStyle5 />
{:else if type === 'style6'}
  <SpinnerStyle6 />
{:else if type === 'style7'}
  <SpinnerStyle7 />
{:else}
  <SpinnerStyle0 />
{/if}
