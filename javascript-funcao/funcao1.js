
// criar de forma literal
function func1() {

}

// Amarzenar em uma variavel
const func2 = function() {
    
}

//Armazenar em um array
const array = [function (a, b) {return a + b}, func1, func2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return "Bom dia"}
console.log(obj.falar())

// Passar funcap como param
function run(fun) {
    fun()
}

run(function() {console.log("Executando..")})