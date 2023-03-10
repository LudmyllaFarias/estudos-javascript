let dobro = function (a) {
    return 2 * a;
}

// função arrow sempre é uma função anonima
dobro = (a) => {
    return 2 *  a;
}

dobro = a => 2 * a; // return está implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _ => 'Olá' // possui um param
console.log(ola())