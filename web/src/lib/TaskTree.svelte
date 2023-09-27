<script lang="ts">
  export let id: string;
  export let dependsOn: any;
</script>

<div class="subtree">
  <div class="node">{id}</div>
  <svg width="100%">
    {#each dependsOn as _, i}
      <line
        x1="50%"
        y1="0"
        x2="{(100 * i + 50) / dependsOn.length}%"
        y2="100%"
        stroke="#02eebb"
      />
    {/each}
  </svg>
  <div class="dependencies">
    {#each dependsOn as dependentTask}
      <svelte:self {...dependentTask} />
    {/each}
  </div>
</div>

<style>
  .subtree {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .node {
    padding: 12px;
    border: 1px solid #02eebb;
    border-radius: 10px;
  }

  .dependencies {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
