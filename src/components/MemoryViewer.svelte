<script>
  import {afterUpdate} from 'svelte'
  export let machine

  afterUpdate(() => {
    document.querySelector('.current').scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'})
  })
</script>

<div id="root">
  <h1>Memory</h1>
  <div id="memory">
    {#each machine.memory as addr, i}
      <div class={'cell ' + (machine.pc === i ? 'current' : '')}>
        <div>{i}</div>
        <div>{addr}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  #memory {
    overflow-y: scroll;
    max-height: 50vh;
  }

  .cell {
    border: 1px solid #ececec;
    display: flex;
  }

  .cell > div:first-child {
    flex: 1;
    border-right: 1px solid #bfbfbf;
    padding: 2px;
  }

  .cell > div + div {
    flex: 3;
    text-align: center;
  }

  .current {
    background-color: #efefef;
  }

  #root {
    border-left: 1px solid #efefef;
    flex: 1;
    text-align: center;
  }
</style>
