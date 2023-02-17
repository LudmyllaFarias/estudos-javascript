var numero = 1

{// let tem escopo de bloco
    let numero = 2
    console.log("Dentro = ", numero)
}

console.log("Fora = ", numero)