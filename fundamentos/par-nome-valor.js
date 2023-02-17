
const saudacao = 'Opa' //contexto lexico

function exec() {
    const saudacao = 'Fala' //contexto lexico2
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 21
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)