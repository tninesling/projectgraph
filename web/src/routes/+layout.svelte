<script lang="ts">
  import TaskTimer from "$lib/components/TaskTimer.svelte";
</script>

<nav>
  <a href="/">home</a>
  <a href="/tasks/kanban">kanban</a>
  <a href="/tasks/tree">tree</a>
</nav>

<TaskTimer />

<slot />

<style>
  a {
    margin-left: 12px;
  }
</style>
