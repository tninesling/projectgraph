<script lang="ts">
  import { onMount } from "svelte";
  import TaskColumn from "$lib/TaskColumn.svelte";

  let tasks = [
    { title: "Task 1", estimate: 5, status: "Todo", secondsSpent: 0 },
    { title: "Task 2", estimate: 2, status: "Todo", secondsSpent: 120 },
    { title: "Task 3", estimate: 3, status: "In Progress", secondsSpent: 7284 },
    { title: "Task 4", estimate: 2, status: "To Review", secondsSpent: 1820 },
    { title: "Task 5", estimate: 1, status: "In Review", secondsSpent: 2456 },
    { title: "Task 6", estimate: 3, status: "Done", secondsSpent: 10235 },
    { title: "Task 7", estimate: 1, status: "Done", secondsSpent: 8320 },
  ];

  function sendTo(id: string, status: string): void {
    tasks = tasks.map((t) => (t.title === id ? { ...t, status } : t));
  }

  onMount(() => {
    const interval = setInterval(() => {
      tasks = tasks.map((t) =>
        !["In Progress", "In Review"].includes(t.status)
          ? t
          : { ...t, secondsSpent: t.secondsSpent + 1 }
      );
    }, 1000);
    return () => clearInterval(interval);
  });
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
