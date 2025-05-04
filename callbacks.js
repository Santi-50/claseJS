//por expresion com lambda

function separar (){
    return console.log("-------------------------------------------------------------")
}

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

let numero1 = 10
let numero2 = 20
console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

numero1 = 50

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

console.log(typeof numero1)

numero1 = "50"

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

console.log(typeof numero1)

separar()

numero1 = 100

//let resultado = suma(numero1, numero2)

//console.log(resultado)

console.log(suma(20, 57))

 separar()

 console.log()
function calcular (num1, num2, callback){
    console.log("entrando en la fincion calcular")
    console.log(`saliendo de la funcion calcular ${callback(num1, num2)}`)
    return callback(num1, num2)
}

let resultado = calcular(numero1, numero2, suma)
console.log("SUMA" +" " + resultado)

resultado = calcular(numero1, numero2, resta)
console.log("RESTA" +" " + resultado)

resultado = calcular(numero1, numero2, multiplicacion)
console.log("MULTI" +" "+ resultado)

resultado = calcular(numero1, numero2, division)
console.log("DIVISION" +" " + resultado)

 separar()

 function solicitarservidor(consulta, callback){
    let respuesta = consulta + " lleno";
    callback(respuesta)
 }

 function obterresultados(resultado) {
    console.log("REspuesta del servidor:" + resultado)
 }
 
 solicitarservidor(" El vaso esta medio", function (resultadoss) {
    console.log("REspuesta DOS del servidor:" + resultadoss)
})

solicitarservidor(" El vaso esta medio", (resultadoss) =>{
    console.log("REspuesta TRES del servidor:" + resultadoss)
})

solicitarservidor(" El vaso esta medio", obterresultados)

 separar()
 