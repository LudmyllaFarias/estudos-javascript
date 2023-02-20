// A função factory é aquela que retorna um objeto

const prod1 = {
    nome: 'Notebook',
    preco: 4576.00
}

const prod2 = {
    nome: 'Smarthphone',
    preco: 2345.00
}

// Factory simples
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa())