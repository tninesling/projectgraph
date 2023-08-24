<script lang="ts">
  export let title: string;
  export let estimate: number;

  let isPlaying = false;
</script>

<div
  id={title}
  class="container"
  draggable="true"
  on:dragstart={(e) => {
    e.dataTransfer?.setData("text", title);
    e.dataTransfer.dropEffect = "move";
  }}
>
  <p>{title}</p>
  <div>{estimate}</div>

  {#if isPlaying}
    <button on:click={() => (isPlaying = false)}>Pause</button>
  {:else}
    <button on:click={() => (isPlaying = true)}>Play</button>
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
