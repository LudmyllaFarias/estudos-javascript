function soBoaNotica(nota) {
    if(nota >= 7) {
        console.log("Aprovado!!", nota)
    }
}

soBoaNotica(8.1)
soBoaNotica(6.9)

function seForVerdade(valor) {
    if(valor) {
        console.log("E verdade..", valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade('')

seForVerdade(1)
seForVerdade(' ')
soBoaNotica([])
seForVerdade([1, 2]) 