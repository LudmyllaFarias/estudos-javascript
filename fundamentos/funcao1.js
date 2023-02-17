// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5);

imprimirSoma(2, 5, 4, 6, 2, 6);

//Funcao com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));