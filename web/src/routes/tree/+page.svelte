<script lang="ts">
  import TaskTree from "$lib/TaskTree.svelte";

  const tasks = [
    {
      id: "Task 7",
      dependsOn: [
        {
          id: "Task 6",
          dependsOn: [
            {
              id: "Task 4",
              dependsOn: [],
            },
            {
              id: "Task 5",
              dependsOn: [],
            },
          ],
        },
        {
          id: "Task 3",
          dependsOn: [],
        },
      ],
    },
    {
      id: "Task 2",
      dependsOn: [
        {
          id: "Task 1",
          dependsOn: [],
        },
      ],
    },
  ];
</script>

<div>
  {#each tasks as task}
    <TaskTree {...task} />
  {/each}
</div>
