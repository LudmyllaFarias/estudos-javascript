function tratarErrorELancar(e) {
    throw new Error('...')

}

// Tratamento de erros
function imprimirNomeGritado(obj) {
   try {
    console.log(obj.name.toUpperCase() + '!!!')
   }catch(e) {
    tratarErrorELancar(e)
   } finally {
    console.log('final')
   }
}

const obj = {nome: 'Ana'}
imprimirNomeGritado(obj)