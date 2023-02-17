let contador = 1
while(contador <= 10) {
    console.log("While" , contador)
    contador ++
}

for(let i = 1; i < 10; i++) {
    console.log("For = " ,i)
}

 const notas = [2, 10, 20, 100, 50]

for( var n in notas) {
    console.log("Foreach = ", n)
}