// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Celular', preco:1234.75, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = "Borracha branca"
delete produto.tag
console.log(produto)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))