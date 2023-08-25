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

  <div class="bottom-bar">
    {#if ["In Progress", "In Review"].includes(status)}
      <button class="icon-button" on:click={onPlayPause}>
        <span class="material-symbols-outlined">pause</span>
      </button>
    {:else if ["Todo", "To Review"].includes(status)}
      <button class="icon-button" on:click={onPlayPause}>
        <span class="material-symbols-outlined">play_arrow</span>
      </button>
    {/if}
    <span>{estimate}d</span>
  </div>
</div>

<style>
  .container {
    background-color: #201e1e;
    border-radius: 20px;
    border: 1px black solid;
    width: 100%;
    padding: 12px 24px;
    box-sizing: border-box;
  }

  .bottom-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
