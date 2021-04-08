const { randomInt } = require('crypto')
const Nbtry = 1000
const defaultChoice = 2
const defaultChange = true

let count = 0
for (let i = 0; i < Nbtry; i++) {
  const gates = ['goat', 'goat', 'goat']
  gates[randomInt(0, 3)] = 'car'
  let choiceGate = gates[defaultChoice]
  gates.splice(defaultChoice, 1)
  const showIndex = gates[0] === 'goat' ? 0 : 1
  gates.splice(showIndex, 1)
  if (defaultChange) { choiceGate = gates.join() }
  if (choiceGate === 'car') { count++ }
}
console.log(count)