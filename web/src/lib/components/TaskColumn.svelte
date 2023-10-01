<script lang="ts">
  import { taskTree } from "$lib/stores/tasks";
  import { unwrapTree } from "$lib";
  import TaskCard from "./TaskCard.svelte";

  export let status: string;

  $: tasks = unwrapTree($taskTree).filter((t) => t.status === status);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
  class="column"
  on:dragover={(e) => e.preventDefault()}
  on:drop={(e) => {
    const task = e.dataTransfer?.getData("text");
    if (task) {
      taskTree.moveTask(task, status);
    }
  }}
>
  <h2>{status}</h2>
  {#each tasks as task}
    <TaskCard {task} />
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
