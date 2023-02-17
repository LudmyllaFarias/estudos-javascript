const imprimitResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
            console.log('Quadro de honra')
            break;
        case 9: 
            console.log('Quadro excelencia')
            break;
        case 8: 
            console.log("Aprovado")
            break;
        case 7:
            console.log("Reprovado")   
            break;  
            default:
                console.log("Invalido")  
    }
}

imprimitResultado(10)
imprimitResultado(9)
imprimitResultado(8)
imprimitResultado(7)
imprimitResultado(1)