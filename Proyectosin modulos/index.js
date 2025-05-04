//esta es nuestra prmera parctica con javascript

// esto es un comentario
 
/*hkfhdjfhd
fdsfdfsf
dfsdfsd*/

function separar (){
    return console.log("-------------------------------------------------------------")
}
const pi = 3.14
var holamundo= "hola mundo!"
let edad= true

let miAuto = {
    marca: "Delorean",
    color: "gris",
    timemachine: true,
    año: 1980
}

console.log(holamundo)

console.log(miAuto)

console.log(typeof miAuto)

function saludar(){
    console.log("Metele con el estudio")
}

console.log(typeof saludar)

let saludo = function saludar(){
    console.log("BACK CON TODO")
}

saludo()
saludar()

console.log(typeof saludo)

// clase 3  funciones y CALLBACKS

separar()

console.log("repaso calse 3")

// por declaracion

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

let numero1 = 10
let numero2 = 20
console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

numero1 = 50

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

console.log(typeof numero1)

numero1 = "50"

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

console.log(typeof numero1)

numero1 = miAuto.marca

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

miAuto.kilometros = 25000
numero1 = miAuto.año

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

numero1 = miAuto.kilometros

console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1,numero2)}`)

console.log(miAuto)

separar()

numero1 = 100

let resultado = suma(numero1, numero2)

console.log(resultado)

console.log(suma(20, 57))

separar()

function miFuncion(){
    console.log("log de mi funcion" + "  " + miVar);
    if(true){
        var miVar = "hola mundo!!"
    }

    console.log("log de mi funcion" +" " + miVar);
}

miFuncion();
