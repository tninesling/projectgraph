<script lang="ts">
  import Task from "./Task.svelte";

  export let status: string;
  export let tasks: any[];
  export let setNewTaskStatus: (task: string, status: string) => void;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="column"
  on:dragover={(e) => e.preventDefault()}
  on:drop={(e) => {
    const task = e.dataTransfer?.getData("text");
    if (task) {
      setNewTaskStatus(task, status);
    }
  }}
>
  <h1>{status}</h1>
  {#each tasks as task}
    <Task title={task.title} estimate={task.estimate} />
  {/each}
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
    border: 1px black solid;
  }
</style>
