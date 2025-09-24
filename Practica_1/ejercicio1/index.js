function miFuncion(x) {
  const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const vocales = "aeiou";
  
  for (let i = 0; i <x.length; i++) {
    let letra = x[i];
    if (vocales.indexOf(letra) !== -1) {
      resultado[letra]++;
    }
  }

  return resultado;
}
let obj = miFuncion("euforia");
console.log(obj); 