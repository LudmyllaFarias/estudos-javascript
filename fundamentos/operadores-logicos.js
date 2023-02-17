function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete // operador unario
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, false))