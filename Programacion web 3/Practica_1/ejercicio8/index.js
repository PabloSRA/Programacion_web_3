function miFuncion(){
    const f=(mensaje,callback)=>{
        x = "+++++HOLA MUNDO+++++";
        setTimeout(()=>{
            console.log(x);
            callback();
        },2000)
    }
    const flecha=()=>{
        console.log("Ejecutado a los 2 segundos");
    }
    f("hola",flecha);
}
let obj = miFuncion();
console.log(obj);