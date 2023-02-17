
var i = 0
while(i < 10) {
    //console.log(i)
    i++
}

function getInteiro(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
 opcao = getInteiro(-1, 10);
 console.log(opcao)
}