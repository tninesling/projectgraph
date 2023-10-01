<script lang="ts">
  import TaskColumn from "$lib/components/TaskColumn.svelte";
  import { taskTree } from "$lib/stores/tasks";
  import { map, unwrapTree } from "$lib";

  $: tasks = unwrapTree($taskTree);

  function sendTo(id: string, status: string): void {
    taskTree.update((tree) =>
      map(tree, (t) => (t.id === id ? { ...t, status } : t))
    );
  }
</script>

<h1>Kanban Board</h1>
<div class="row">
  <TaskColumn
    status="Todo"
    tasks={tasks.filter((t) => t.status === "Todo")}
    onDropTask={(t) => sendTo(t, "Todo")}
    onPlayPauseTask={(t) => sendTo(t, "In Progress")}
  />
  <TaskColumn
    status="In Progress"
    tasks={tasks.filter((t) => t.status === "In Progress")}
    onDropTask={(t) => sendTo(t, "In Progress")}
    onPlayPauseTask={(t) => sendTo(t, "Todo")}
  />
  <TaskColumn
    status="To Review"
    tasks={tasks.filter((t) => t.status === "To Review")}
    onDropTask={(t) => sendTo(t, "To Review")}
    onPlayPauseTask={(t) => sendTo(t, "In Review")}
  />
  <TaskColumn
    status="In Review"
    tasks={tasks.filter((t) => t.status === "In Review")}
    onDropTask={(t) => sendTo(t, "In Review")}
    onPlayPauseTask={(t) => sendTo(t, "To Review")}
  />
  <TaskColumn
    status="Done"
    tasks={tasks.filter((t) => t.status === "Done")}
    onDropTask={(t) => sendTo(t, "Done")}
    onPlayPauseTask={() => {}}
  />
</div>

<style>
  .row {
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
  }
</style>
