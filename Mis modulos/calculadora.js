


function sumar(num1, num2){
    return num1 + num2
}

//por expresion com lambda

let suma = function (num1, num2){
    return num1 + num2
}

//felcha o arrow

let resta = (num1, num2) => {
    return num1 - num2
}

let multiplicacion = (num1, num2) => {
    return num1 * num2
}

let division = (num1, num2) => {
    return num1 / num2
}

module.exports = {sumar,suma, resta, multiplicacion, division}