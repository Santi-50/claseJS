var colors = require('colors');
const {separar} = require('./utils')

let micadena = 'hola como estan?'

/* function colorear(color, data) {
    if (typeof data == String || typeof data == 'Number'){
        let mistring = data.tostring()
    return mistring[color]
    }
    else{
        return data
    }
    
} */

function coloraerfull(color, data){
    if (typeof data === 'number'){
        data = data.toString();
    }
    if (data && typeof data === 'object'){
        data = JASON.stringify(data);
    }
    if (typeof data === 'String'){
        return data [color]
    }
    return data;

} 


module.exports = {colorear}

console.log('hello'.green) // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

separar()

console.log(colors.green('hello  DOS')); // outputs green text
console.log(colors.red.underline('i like cake and pies  DOS')); // outputs red underlined text
console.log(colors.inverse('inverse the color DOS')); //inverses the coloR
console.log(colors.rainbow('OMG Rainbows DOS!')); // rainbow
console.log(colors.trap('Run the trap DOS')); // Drops the bass

separar()

console.log(colorear('green', micadena))

console.log(micadena.bgCyan)