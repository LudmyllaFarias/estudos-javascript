console.log(soma(3, 4));

// function declaration (mais usada)
function soma(x, y) {
    return x + y
}

// function expression (mais usada)
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression (pouca usada)
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))