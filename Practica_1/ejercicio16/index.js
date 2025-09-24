function obtenerMensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensaje recibido");
    }, 1000);
  });
}

async function mostrarMensaje() {
  try {
    const mensaje = await obtenerMensaje();
    console.log(mensaje);
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarMensaje();
