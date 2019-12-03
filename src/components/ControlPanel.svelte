<script>
  import {beforeUpdate} from 'svelte'
  export let machine
  export let executeStep
  export let executeProgram
  export let resetProgram
</script>

<div id="root">
  <div id="machine-state">
    PC: {machine.pc} ASM: {machine.instruction} {#if machine.instruction === 'HALT'}OUTPUT: {machine.memory[0]}{/if}
  </div>
  <div id="control-buttons">
    <button on:click={executeProgram}>▶</button>
    <button on:click={executeStep}>↷</button>
    <button on:click={resetProgram}>⟲</button>
  </div>
</div>

<style>
  #root {
    display: flex;
    border-bottom: 1px solid #efefef;
    width: 100%;
  }

  #machine-state {
    flex: 2;
  }

  #control-buttons {
    flex: 1;
  }
</style>
