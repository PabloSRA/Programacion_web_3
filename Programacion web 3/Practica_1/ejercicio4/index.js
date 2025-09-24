function miFuncion(vector){
    const resultado = {mayor: 0,menor: 999};
    for (let i=0;i<vector.length;i++){
        if(vector[i]>resultado.mayor){
            resultado.mayor = [vector[i]];
        }
    }
    for (let i=0;i<vector.length;i++){
        if(vector[i]<resultado.menor){
            resultado.menor=[vector[i]];
        }
    }
    return resultado;
}
let obj = miFuncion([3,1,5,4,2]);
console.log(obj);