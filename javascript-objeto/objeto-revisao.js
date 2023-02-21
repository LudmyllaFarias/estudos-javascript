const produto = new Object
produto.name = "Cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 76345,
    proprietario: {
        nome: "Pedro",
        idade: 34,
        endereco: {
            logradouro: "Av abc",
            numero: 235
        }
    }
}

console.log(carro)