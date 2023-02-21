const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(e[0], e[1])
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '02/02/2021'
})

console.log(Object.keys(pessoa))

const dest = {a : 1}
const o1 = {b: 2}
const obj = Object.assign(dest)