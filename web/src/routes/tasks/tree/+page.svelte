<script lang="ts">
  import TaskTree from "$lib/components/TaskTree.svelte";
  import { taskTree } from "$lib/stores/taskTree";
</script>

<div>
  <TaskTree task={$taskTree} />
</div>
