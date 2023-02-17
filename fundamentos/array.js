const valores = [7.7, 5.6, 8.9, 5.5]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log("Tamanho = " + valores.length)

// adiciona elementos
valores.push({id: 3}, false , null, 'teste')

// retira elemento
console.log("Retira elemento" + valores.pop())

// deleta elemento indice
delete valores[0]

console.log(valores)

