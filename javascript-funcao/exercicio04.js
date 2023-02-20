function formataMoeda(valor) {
    valor.toString().replace(".", ",")
    parseFloat(valor)
    console.log("R$", valor.toFixed(2))
}

formataMoeda(0.3000000000)