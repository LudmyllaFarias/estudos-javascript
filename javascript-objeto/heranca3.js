const pai = {nome: 'Pedro', corCabelo: 'preto'}


const filha2 = Object.create(pai, {
    nome: {value: "Bia", writable: false, enumerable: true}
})