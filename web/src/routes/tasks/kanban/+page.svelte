<script lang="ts">
  import { Status } from "$lib";
  import TaskColumn from "$lib/components/TaskColumn.svelte";
</script>

<h1>Kanban Board</h1>
<div class="row">
  <TaskColumn status={Status.Todo} />
  <TaskColumn status={Status.InProgress} />
  <TaskColumn status={Status.ToReview} />
  <TaskColumn status={Status.InReview} />
  <TaskColumn status={Status.Done} />
</div>

<style>
  .row {
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
  }
</style>
