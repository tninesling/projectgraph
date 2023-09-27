<script lang="ts">
  import type { Task } from "$lib";
  import TaskCard from "./TaskCard.svelte";

  export let task: Task;
</script>

<div class="subtree">
  <div class="node">
    <TaskCard {task} />
  </div>
  <svg width="100%">
    {#each task.dependsOn as _, i}
      <line
        x1="50%"
        y1="0"
        x2="{(100 * i + 50) / task.dependsOn.length}%"
        y2="100%"
        stroke="#02eebb"
      />
    {/each}
  </svg>
  <div class="dependencies">
    {#each task.dependsOn as dependentTask}
      <svelte:self task={dependentTask} />
    {/each}
  </div>
</div>

<style>
  .subtree {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .node {
    width: 240px;
  }

  .dependencies {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
