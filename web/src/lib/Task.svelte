<script lang="ts">
  export let title: string;
  export let estimate: number;
  export let status: string;
  export let onPlayPause: () => void;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  id={title}
  class="container"
  draggable="true"
  on:dragstart={(e) => {
    e.dataTransfer?.setData("text", title);
  }}
>
  <p>{title}</p>
  <div>{estimate}</div>

  {#if ["In Progress", "In Review"].includes(status)}
    <button on:click={onPlayPause}>Pause</button>
  {:else if ["Todo", "To Review"].includes(status)}
    <button on:click={onPlayPause}>Play</button>
  {/if}
</div>

<style>
  .container {
    border-radius: 20px;
    border: 1px black solid;
    width: fit-content;
    padding: 12px 24px;
  }
</style>
