const sequencia = {
    _valor: 1, //convenção
    get valor() { this._valor ++},
    set valor(valor) {
        if(valor > this.valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)