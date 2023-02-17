var numero = 1 // evite escopo global

{ // nao existe escopo de bloco
    var numero = 2
    console.log("Dentro = ", numero)
}

console.log("Fora = ", numero)