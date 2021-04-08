const { randomInt } = require('crypto')
const readlineSync = require('readline-sync')
const gates = ['goat', 'goat', 'goat']
gates[randomInt(0, 3)] = 'car'
const choice = readlineSync.keyInSelect(['Gate 1', 'Gate 2', 'Gate 3'], 'Quel porte choisissez-vous ?')
let choiceGate = gates[choice]
gates.splice(choice, 1)
console.log(gates) // portes restantes
const showIndex = gates[0] === 'goat' ? 0 : 1
console.log(`Une autre porte a été ouverte, dedans il y a : ` + gates[showIndex])
gates.splice(showIndex, 1)
console.log(gates) // porte restante
if (readlineSync.keyInYN('Voulez vous changez de porte ? ')) { choiceGate = gates.join() }
console.log(`Dériére votre porte il y a : ` + choiceGate)