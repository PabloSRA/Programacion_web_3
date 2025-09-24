function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: "Ana" });
    }, 1000);
  });
}

function obtenerPosts(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function mostrarPosts(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts del usuario:", posts);
      resolve();
    }, 1000);
  });
}
obtenerUsuario()
  .then((usuario) => {
    return obtenerPosts(usuario.id)
      .then((posts) => {
        return mostrarPosts(posts);
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
