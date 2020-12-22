alert('Hola cara de bola');
const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img = "<img src='llave.png'>"
    nombre = `<h2> ${nombre}</h2>`;
    modelo = `<h3> ${modelo}</h3>`;
    precio = `<h3>Precio: <b> ${precio}</b></h3>`;
    return [img,nombre,modelo,precio]
}

let documentFragment = document.createDocumentFragment();

for(var i = 0;i<20 ;i++){
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,`precio ${precioRandom}`);
    let div = document.createElement("DIV");//CHECAR EN DONDE SE USA ESTE APARTADO
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave;
    contenedor.innerHTML+=llave;
}