function separar (){
    return console.log("-------------------------------------------------------------")
}

let arrayvacio = []

let arrayvacionew = new Array();

let miarray = ["uno", 2, 3, "cuatro", {nombre:"santiago", comision:"turno noche", materia:"backend"}]

const Arraynumero =[1,2,3,4]

console.log(Arraynumero)

Arraynumero.push(68)

Arraynumero[2] = 788

console.log(Arraynumero)

Arraynumero.unshift("tambien palabras")

console.log(Arraynumero)

console.log(miarray)

console.log("que hay en la posicion:  " + miarray[3])

separar()

console.log(`El largo de mi array es de: ${miarray.length} posiciones`)

miarray.push("array de locos")

console.log(`El largo de mi array es de: ${miarray.length} posiciones`)

console.log(miarray)

let newelement

Arraynumero.forEach((element, i) => {
    console.log(`Lo que ahy en la posicion ${i} es el elemento: ${element} mas 5: `)
    newelement = element + 5;
    console.log(newelement)

})

separar()

Arraynumero.forEach((element, i) => {
    console.log(`Lo que ahy en la posicion ${i} es el elemento: ${element}`)
    

})

separar()


console.log("mi array es de: " + Arraynumero.length + " posiciones")
console.log(Arraynumero)

Arraynumero.shift()


console.log(" Ahora mi array es de: " + Arraynumero.length + " posiciones")
console.log(Arraynumero)

let newarraynumeros = new Array()


Arraynumero.forEach((element, i) => {
    console.log(`Lo que ahy en la posicion ${i} es el elemento: ${element}`)
    newelement = element + 5;

    newarraynumeros.push(newelement)

    console.log(newelement)

})

console.log(Arraynumero)

console.log(newarraynumeros)


separar() 

Arraynumero.push(12,52,87)

let nuevoarrayfiltrado = Arraynumero.filter(element => element >=1 && element <70 || element === 788)

console.log(Arraynumero)

console.log(nuevoarrayfiltrado)

separar()

let nuevoarraymap = Arraynumero.map(element => element + 1000)

console.log(nuevoarraymap)