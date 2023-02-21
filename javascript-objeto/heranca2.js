const avo = { a: 1}
const pai = {__proto__: avo, b: 2}
const filho = {__proto__: pai, c: 3}
console.log(filho.b, filho.c, filho.a)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velAtual
        }
    },
    status() {
        return `${this.velAtual} ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo} ${super.status()}`
    }
}
