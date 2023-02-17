const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log("E number " + Number.isInteger(peso1))
console.log("E number " + Number.isInteger(peso2))

const avaliacao1= 8.564
const avaliacao2= 3.543

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log("Media " + media.toFixed(2))
console.log(media.toString(2)) // converte em binário
