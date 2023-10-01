<script lang="ts">
  import TaskSearch from "$lib/components/TaskSearch.svelte";
  import TaskTimer from "$lib/components/TaskTimer.svelte";
</script>

<TaskTimer />
<TaskSearch />
<slot />
