<script>
  import TaskColumn from "$lib/TaskColumn.svelte";

  let cards = [
    { title: "Task 1", estimate: 5, status: "Todo" },
    { title: "Task 2", estimate: 2, status: "Todo" },
    { title: "Task 3", estimate: 3, status: "In Progress" },
    { title: "Task 4", estimate: 2, status: "To Review" },
    { title: "Task 5", estimate: 1, status: "In Review" },
    { title: "Task 6", estimate: 3, status: "Done" },
    { title: "Task 7", estimate: 1, status: "Done" },
  ];
</script>

<div class="row">
  {#each ["Todo", "In Progress", "To Review", "In Review", "Done"] as status}
    <TaskColumn
      {status}
      tasks={cards.filter((c) => c.status === status)}
      setNewTaskStatus={(id, status) => {
        console.log(`Column ${status} received task ${id}`);
        cards = cards.map((card) =>
          card.title === id ? { ...card, status } : card
        );
      }}
    />
  {/each}
</div>

<style>
  .row {
    display: flex;
    justify-content: space-evenly;
  }
</style>
