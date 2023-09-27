<script lang="ts">
  import type { Task } from "$lib";
  import Duration from "./Duration.svelte";

  export let task: Task;
  export let onPlayPause: (() => void) | undefined = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  id={task.id}
  class="container"
  draggable="true"
  on:dragstart={(e) => {
    e.dataTransfer?.setData("text", task.id);
  }}
>
  <p>{task.id}</p>

  <div class="bottom-bar">
    {#if !!onPlayPause && ["In Progress", "In Review"].includes(task.status)}
      <button class="icon-button" on:click={onPlayPause}>
        <span class="material-symbols-outlined">pause</span>
      </button>
    {:else if !!onPlayPause && ["Todo", "To Review"].includes(task.status)}
      <button class="icon-button" on:click={onPlayPause}>
        <span class="material-symbols-outlined">play_arrow</span>
      </button>
    {/if}
    <Duration durationSeconds={task.secondsSpent} />
    <span class="slash">/</span>
    <span>{task.estimate}d</span>
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
    text-align: center;
  }

  .bottom-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .slash {
    color: #02eebb;
  }
</style>
