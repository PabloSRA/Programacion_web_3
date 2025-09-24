function miFuncion(x) {
  let invertir = "";
  for (let i = x.length - 1; i >= 0; i--) {
    invertir += x[i];
  }
  return invertir;
}

let cad = miFuncion("abcd");
console.log(cad); // dcba
