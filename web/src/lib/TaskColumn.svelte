<script lang="ts">
  import Task from "./Task.svelte";

  export let status: string;
  export let tasks: any[];
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
    <Task
      title={task.title}
      estimate={task.estimate}
      status={task.status}
      onPlayPause={() => onPlayPauseTask(task.title)}
    />
  {/each}
</section>

<style>
  .column {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    border: 1px black solid;
  }
</style>
