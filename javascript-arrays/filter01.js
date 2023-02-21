const produtos = [
    {nome: 'Notebook', preco: 2345.00, fragil: true},
    {nome: 'Ipad pro', preco: 3456.00, fragil: true},
    {nome: 'Copo de vidro', preco: 12.00, fragil: true},
    {nome: 'Copo de plástico', preco: 14.00, fragil: false}

]

//console.log(produtos.filter(p => p.preco > 2500))
console.log(produtos.filter(p => p.preco > 500 && p.fragil === true))