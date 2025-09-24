function sumar(a, b, callback) {
  setTimeout(() => {
    const resultado = a + b;
    callback(null, resultado);
  }, 1000);
}

function sumarPromesa(a, b) {
  return new Promise((resolve, reject) => {
    sumar(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
sumarPromesa(2, 3)
  .then((res) => console.log("Resultado:", res)) 
  .catch((err) => console.error("Error:", err));
