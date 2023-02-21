// pessoa -> 123
const pessoa = {nome: "Pedro"}
pessoa.nome = "Luiz"
console.log(pessoa)

// pessoa <- 456
//pessoa = {nome: 'Ana'}

// objeto congelado
Object.freeze(pessoa)
pessoa.nome = "Luiz"
console.log(pessoa)