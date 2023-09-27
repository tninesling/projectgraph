<script lang="ts">
  import type { Task } from "$lib";
  import TaskCard from "./TaskCard.svelte";

  export let status: string;
  export let tasks: Task[];
  export let onDropTask: (taskId: string) => void;
  export let onPlayPauseTask: (taskId: string) => void;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
  class="column"
  on:dragover={(e) => e.preventDefault()}
  on:drop={(e) => {
    const task = e.dataTransfer?.getData("text");
    if (task) {
      onDropTask(task);
    }
  }}
>
  <h2>{status}</h2>
  {#each tasks as task}
    <TaskCard
      id={task.id}
      estimate={task.estimate}
      status={task.status}
      secondsSpent={task.secondsSpent}
      onPlayPause={() => onPlayPauseTask(task.id)}
    />
  {/each}
</section>

<style>
  .column {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
  }
</style>
