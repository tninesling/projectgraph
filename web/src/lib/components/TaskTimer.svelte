<script lang="ts">
  import { onMount } from "svelte";
  import { taskTree } from "$lib/stores/tasks";
  import { map } from "$lib";

  onMount(() => {
    const interval = setInterval(() => {
      taskTree.update((tree) =>
        map(tree, (t) =>
          !["In Progress", "In Review"].includes(t.status)
            ? t
            : { ...t, secondsSpent: t.secondsSpent + 1 }
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  });
</script>
