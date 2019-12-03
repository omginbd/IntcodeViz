export function executeStep(machine) {
  return executeInstruction(machine)
}

export function initMachine(program) {
  return {
    pc: 0,
    memory: program,
    instruction: instructionToText(program[0])
  }
}

function p(addr, memory) {return memory[addr]}

function executeInstruction(machine) {
  console.log('executing')
  const {memory, pc} = machine
  const opcode = memory[pc]
  switch (opcode) {
    case 1:
      memory[p(pc + 3, memory)] =
        memory[p(pc + 1, memory)] + memory[p(pc + 2, memory)];
      break;
    case 2:
      memory[p(pc + 3, memory)] =
        memory[p(pc + 1, memory)] * memory[p(pc + 2, memory)];
      break;
    case 99:
      return machine;
    default:
      throw new Error(`Unknown opcode: ${opcode}`);
  }
  machine.pc += 4
  machine.instruction = instructionToText(machine.memory[machine.pc])
  return machine
}

function instructionToText(opcode) {
  switch (opcode) {
    case 1:
      return 'SUM'
    case 2:
      return 'PRODUCT'
    case 99:
      return 'HALT'
    default:
      return `UNKNOWN ${opcode}`
  }
}
