<script>
  import ControlPanel from './components/ControlPanel.svelte'
  import MemoryViewer from './components/MemoryViewer.svelte'
  import InstructionViz from './components/InstructionViz.svelte'
  import {executeStep, initMachine} from './lib/vm.js'

  let programString = '99'
  let executionDelay = 500
  $: machine = initMachine(programString.split(',').map(n => parseInt(n)))
  function executeStepBound() {
    machine = executeStep(machine)
  }
  function executeProgramBound() {
    executeStepBound()
    if (machine.instruction !== 'HALT') {
      setTimeout(executeProgramBound, executionDelay)
    }
  }
  function resetProgram() {
    machine = initMachine(programString.split(',').map(n => parseInt(n)))
  }
</script>

<main>
  <ControlPanel {machine} executeProgram={executeProgramBound} {resetProgram} executeStep={executeStepBound} />
  <div class="main-panel">
    <MemoryViewer {machine} />
  </div>
  <textarea bind:value={programString}/>
  <input type=range bind:value={executionDelay} min=10 max=1000>
</main>

<style>
	main {
		padding: 1em;
	}

  .main-panel {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
