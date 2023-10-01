<script lang="ts">
  import { taskIndex, taskQuery } from "$lib/stores/taskIndex";
  import { taskTree } from "$lib/stores/taskTree";
  import type { Task } from "$lib";
  import Duration from "./Duration.svelte";

  export let task: Task;

  $: getOpacity = () => {
    if ($taskQuery.length < 1) return 1;

    // Score is between 0 and 1, where 0 is perfect match and 1 is no match
    const score = $taskIndex.searchResults[task.id]?.score ?? 1;
    if (score < 0.2) return 1;

    return 1 - score * 0.5;
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  id={task.id}
  class="container"
  draggable="true"
  on:dragstart={(e) => {
    e.dataTransfer?.setData("text", task.id);
  }}
  style="opacity: {getOpacity()}"
>
  <p>{task.id}</p>
  <p>{task.description}</p>

  <div class="bottom-bar">
    <button
      class="icon-button"
      disabled={task.status === "Done"}
      on:click={() => taskTree.toggleInProgress(task.id)}
    >
      {#if ["In Progress", "In Review"].includes(task.status)}
        <span class="material-symbols-outlined">pause</span>
      {:else if ["Done", "Todo", "To Review"].includes(task.status)}
        <span class="material-symbols-outlined">play_arrow</span>
      {/if}
    </button>
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
