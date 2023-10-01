<script lang="ts">
  import { onMount } from "svelte";
  import { taskTree } from "$lib/stores/taskTree";

  onMount(() => {
    const interval = setInterval(taskTree.incrementTimers, 1000);
    return () => clearInterval(interval);
  });
</script>
