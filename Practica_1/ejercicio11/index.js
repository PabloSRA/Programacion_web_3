function paso1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 completado");
      resolve("Datos del paso 1");
    }, 1000);
  });
}

function paso2(datosPrevios) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 usando:", datosPrevios);
      resolve("Resultado del paso 2");
    }, 1000);
  });
}

function paso3(resultadoPrevio) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 usando:", resultadoPrevio);
      resolve("Proceso completo");
    }, 1000);
  });
}
paso1()
  .then(paso2)
  .then(paso3)
  .then((final) => {
    console.log("Final:", final);
  })
  .catch((error) => {
    console.error("Error en la cadena:", error);
  });
