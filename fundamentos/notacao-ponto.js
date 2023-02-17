console.log(Math.ceil(6.1));

const obj = {}
obj.name = "Ana";
//obj['name'] = "Maria";
console.log(obj.nome)

function Obj(name) {
    this.name = name;
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome)
console.log(obj3.nome)