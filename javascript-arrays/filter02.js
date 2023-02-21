Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2345.00, fragil: true},
    {nome: 'Ipad pro', preco: 3456.00, fragil: true},
    {nome: 'Copo de vidro', preco: 12.00, fragil: true},
    {nome: 'Copo de plástico', preco: 14.00, fragil: false}

]

const precoProdutoMaiorQue500 = produtos => produtos.preco >= 500
const produtoFragil = produtos => produtosfragil.fragil

console.log(produtos.filter2(precoProdutoMaiorQue500).filter2(produtoFragil))
