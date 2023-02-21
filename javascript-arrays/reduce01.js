const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Ana', nota: 6.5, bolsista: true },
    { nome: 'Bia', nota: 8.4, bolsista: true },
    { nome: 'Rafael', nota: 6.9, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})