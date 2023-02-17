const pessoa = {
    nome: "Ana",
    idade: 23,
    endereco: {
        numero: 233
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade)

const { nome: n, idade : i} = pessoa;
console.log(nome, idade)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {numero}} = pessoa
console.log(numero)
