function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log("Valor acima do permitido: ", area)
    }else {
        return area;
    }
}


console.log(area(2, 4))
console.log(area())
console.log(area(1, 3, 4))
console.log(area(2))
console.log(area(13, 17))