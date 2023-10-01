<script lang="ts">
  import { taskQuery } from "$lib/stores/taskIndex";
</script>

<div class="search-container">
  <input id="task-search" placeholder="Search..." bind:value={$taskQuery} />
</div>

<style>
  .search-container {
    display: flex;
    justify-content: center;
    margin: 24px;
  }

  #task-search {
    width: 50%;
    height: 24px;
  }
</style>
