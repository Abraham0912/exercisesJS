//alert('Hola cara de bola');
const contenedor = document.querySelector(".flex-container");
const boton = document.querySelector(".send-button").value = "COMPRAR";
function crearLlave(nombre,modelo,precio){
    img = "<img class='llave-img' src='llave.png'>"
    nombre = `<h2> ${nombre}</h2>`;
    modelo = `<h3> ${modelo}</h3>`;
    precio = `<h3>Precio: <b> ${precio}</b></h3>`;
    return [img,nombre,modelo,precio]
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for(var i = 0;i<=20 ;i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,`precio ${precioRandom}`);
    let div = document.createElement("DIV");//CHECAR EN DONDE SE USA ESTE APARTADO
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);