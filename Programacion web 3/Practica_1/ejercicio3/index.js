function miFuncion(vector){
    const resultado ={pares:[],impares:[]};
    for (let i =0;i<vector.length;i++){
        if (vector[i]%2===0){
            resultado.pares= [resultado.pares,vector[i]];
        }
        else{
            resultado.impares =[resultado.impares,vector[i]];
        }
    }
    return resultado;
}
let obj = miFuncion([1,2,3,4]);
console.log(obj);