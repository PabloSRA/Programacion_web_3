function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve("Datos obtenidos");
      } else {
        reject("Error al obtener datos");
      }
    }, 1000);
  });
}
function obtenerDatosConCallback(callback) {
  obtenerDatos()
    .then((resultado) => callback(null, resultado))
    .catch((error) => callback(error));
}
obtenerDatosConCallback((err, datos) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Resultado:", datos);
  }
});
