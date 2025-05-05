const {division} = require('./calculadora')


function separar (){
    return console.log("-------------------------------------------------------------")
}

function separarasterisco (){
    return console.log("************************************************************")
}

function separarMas (){
    return console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
}

/* module.exports = {
    separar: separar,
    separarMas: separarMas,
    separarasterisco: separarasterisco
} */



//separar()

function SuperDivisor(num1, num2){
    return division(num1, num2)
}


//console.log(module)

//console.log(typeof{})

module.exports ={separar, separarMas, separarasterisco, SuperDivisor}