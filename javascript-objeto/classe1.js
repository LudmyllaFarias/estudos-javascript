class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.Lancamento.forEach(l => {
            valorConsolidade += l.valor
        })

        return valorConsolidade
    }
}