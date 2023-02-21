// usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto("Caneta", 12.34, 0.15)
const p2 = new Produto("Notebook", 2345.78, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criaFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario("Ana", 4267.68, 7)
const f2 = criaFuncionario("Pedro", 13634.00, 4)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que retorna um objeto
const fromJSON = Json.parse('{"info": "Sou um json"}')
//console.log(fromJSON.info)