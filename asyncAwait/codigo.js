/* alert("Estoy conectado con html y busco aberiguar que funcion se ejecutara primero, si un console o cuadradoPromise en console");

function cuadradoPromise(value){
    if(typeof value!== "number"){
        return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`)
    }
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(
                {
                    value,
                    result: value * value
                }
            );
        }, 3000);
    });
}

async function funcionAsincronaDeclarada(){
    try{
        console.log(`Funcion asincronaDeclarada iniciada`);

        let objeto = await cuadradoPromise(1);
        console.log(`AsyncFunction: ${objeto.value}, ${objeto.result}`);

        console.log(`Funcion asincronaDeclarada iniciada`);

        objeto = await cuadradoPromise(0);
        console.log(`AsyncFunction: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(2);
        console.log(`AsyncFunction: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(3);
        console.log(`AsyncFunction: ${objeto.value}, ${objeto.result}`);
    }
    catch(e){
        console.log(e);
    }
}


funcionAsincronaDeclarada(); */
