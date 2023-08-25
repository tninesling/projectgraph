<script lang="ts">
  import TaskColumn from "$lib/TaskColumn.svelte";

  let tasks = [
    { title: "Task 1", estimate: 5, status: "Todo" },
    { title: "Task 2", estimate: 2, status: "Todo" },
    { title: "Task 3", estimate: 3, status: "In Progress" },
    { title: "Task 4", estimate: 2, status: "To Review" },
    { title: "Task 5", estimate: 1, status: "In Review" },
    { title: "Task 6", estimate: 3, status: "Done" },
    { title: "Task 7", estimate: 1, status: "Done" },
  ];

  function sendTo(id: string, status: string): void {
    tasks = tasks.map((t) => (t.title === id ? { ...t, status } : t));
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
