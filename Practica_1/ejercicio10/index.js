///----------usar callback-----------
function saludar(callback) {
  console.log("Hola");
  callback();
}
function despedir() {
  console.log("Adiós");
}
saludar(despedir);
///------------------------------

///--------usar promesas---------
const promesaSimple = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Todo salio bien");
  }, 2000);
});
promesaSimple.then((mensaje) => {
  console.log(mensaje); 
});
///-------------------------------