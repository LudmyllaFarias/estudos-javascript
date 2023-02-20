const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// os this séra o objeto passado dentro do bind
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()