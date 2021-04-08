const { randomInt } = require('crypto')

function solveMontyHall(Try, userChange) {
  const defaultChoice = 1
  let count = 0
  for (let i = 0; i < Try; i++) {
    const gates = ['goat', 'goat', 'goat']
    gates[randomInt(0, 3)] = 'car'
    let choiceGate = gates[defaultChoice - 1]
    gates.splice(defaultChoice, 1)
    const showIndex = gates[0] === 'goat' ? 0 : 1
    gates.splice(showIndex, 1)
    if (userChange) { choiceGate = gates[0] }
    if (choiceGate === 'car') { count++ }
  }
  console.log(count)
}
// output: Nb Wins
solveMontyHall(100, false)
solveMontyHall(100, true)
solveMontyHall(1000, false)
solveMontyHall(1000, true)