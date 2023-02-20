// Closures é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variãveis externas à funçcão

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunção = fora()
console.log(minhaFunção())