// Armazenando uma funçao em uma variavel

// Funcao anonima
const imprimir = function(a, b) {
    console.log(a + b)
}

imprimir(2, 3);

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// return implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 4));

const imprimir2 = a => console.log(a);
imprimir("Bom dia!")

