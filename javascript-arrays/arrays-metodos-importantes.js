const pilotos = ['Luiz', 'Carlos', 'Ana', 'Bia']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('João') // adiciona na primeira posição
console.log(pilotos)

// adiciona
pilotos.splice(2, 0, 'José', 'Bia')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotes1 = pilotos.slice(2)  // novo array
console.log(algunsPilotes1)

const algunsPilotes2 = pilotos.slice(1, 4)
console.log(algunsPilotes2)