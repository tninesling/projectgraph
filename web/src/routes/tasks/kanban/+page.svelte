<script lang="ts">
  import TaskColumn from "$lib/components/TaskColumn.svelte";
</script>

<h1>Kanban Board</h1>
<div class="row">
  <TaskColumn status="Todo" />
  <TaskColumn status="In Progress" />
  <TaskColumn status="To Review" />
  <TaskColumn status="In Review" />
  <TaskColumn status="Done" />
</div>

<style>
  .row {
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
  }
</style>
