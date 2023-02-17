const imprimiResultado = function(nota) {
    if(nota >= 7) {
        console.log("Aprovado")
    }else {
        console.log("Reprovado")
    }
}

imprimiResultado(6.9)
imprimiResultado(7.8)
imprimiResultado('4') // cuidado
imprimiResultado('Oi') // cuidado

