console.log("Conectado con view.html");

let nombre = "Abraham";

const promesa = new Promise(function (resolve,reject){
    if(nombre == "Abraham"){resolve("El nombre es igual/Correcto! :D")}
    else{reject ("El nombre no es igual :C")}
});

promesa.then(function(resultado){
    console.log(resultado);
});


/* 
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
});
 */