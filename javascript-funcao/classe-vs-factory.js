function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log("Meu nome é", nome)
    }
}

const p1 = new Pessoa("Ana")
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log("Meu nome é", nome)
    }
}

const p2 = criarPessoa("Pedro")
p2.falar()