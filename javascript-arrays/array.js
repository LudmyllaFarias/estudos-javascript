console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Ana', 'Luiz')
console.log(aprovados)

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Carlos')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados)

//Ordenado
console.log(aprovados.sort())
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

// serve para remover e adicionar
aprovados.slice(2, 1)
console.log(aprovados)
