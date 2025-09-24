function mifuncion(cadena){
    let capicuo = ""
    for(let i=cadena.length-1;i>=0;i--){
        capicuo = capicuo + cadena[i];
    }
    if (capicuo===cadena){
        return true;
    }
    else{
        return false;
    }
}

let band = mifuncion("oruro")
console.log(band) // false