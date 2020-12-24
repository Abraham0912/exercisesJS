console.log("index2.html ESTA CONECTADO CON app.js"); 
//objetos();
eventos();
//comparadorDeEdades();
//tablaDeMultiplicar();
//arreglo();












function objetos() {
//OBJETO ANIDADO
var objeto = {
    nombre: 'HTML',
    duracion: 15,
    estado: false,
        objetoAnidado:{
            nombre:'HTML anidado',//abajo se imprime este atributo
            duracion: '15s pero anidado'
        }
}

console.log(objeto);
console.log(objeto.estado);
console.log(objeto.objetoAnidado.nombre);

//ARREGLO DE OBJETOS CON UN OBJETO ANIDADO
var arrayObjetos = [{
    nombre: 'HTML en array',
    duracion: '15s en array',
    estado: false
},{nombre: 'HTML en array[1]',
    duracion: '15s en array[1]',
    estado: false,
        objetoAnidado:{
            nombre:'HTML anidado',//abajo se imprime este atributo
            duracion: '15s pero anidado'
            }
}]
console.log(arrayObjetos[1]);
console.log(arrayObjetos[1].objetoAnidado.nombre);
}



function eventos() {
var xd =document.getElementById("encabezado");
var lbl = document.getElementsByClassName('parrafo');
var btn = document.getElementById("boton");
var h1 = document.getElementById("encabezado");
//EVENTO CLICK 
    btn.addEventListener('click',function(){
        console.log('Click en "Send"');
        h1.style.color="red";
        lbl[0].style.color="green";
        lbl[1].style.color="purple";
        lbl[2].style.color="pink";

        document.getElementById("h1").innerHTML = 'Click en "Send"';
    });
//EVENTO CLICK    
    document.getElementById("boton2").addEventListener('click',volverANormalidad);
    
    function volverANormalidad(){
        console.log('Click en "dont Send"');
        h1.style.color="black";
        lbl[0].style.color="black";
        lbl[1].style.color="black";
        lbl[2].style.color="black";
        document.getElementById("h1").innerHTML = "Index2.html";
    }
//EVENTO MOUSEOVER
        document.getElementById("boton3").addEventListener('mouseover',function(){
        console.log('Mouseover en "Soy boton"');
        document.getElementById("h1").innerHTML = "Hay un over";
    });
//EVENTO MOUSEOUT
    document.getElementById("boton3").addEventListener('mouseout',function(){
        console.log('Mouseout en "Soy boton"');
        document.getElementById("h1").innerHTML = "Hay un mouseout";
    });
}
function comparadorDeEdades() {
    
var resul=0;
var numHombre = parseInt(prompt("Edad de Hombre"));
var numMujer = parseInt(prompt("Edad de Mujer"));
console.log(isNaN(numHombre));
console.log(numHombre+numMujer);
 
if(numHombre>numMujer){
    resul = numHombre-numMujer;
    if(resul === 0 ){console.log("Que cagado, son de la misma edad");}else{
        console.log("Hombre es mayor que Mujer por "+ resul +" anios");
    }
    
}else{
    resul = numMujer-numHombre;
    if(resul === 0 ){console.log("Que cagado, son de la misma edad xD");}else{
        console.log("Hombre es menor que Mujer por "+ resul +" anios");
    }
} 

    
}
function tablaDeMultiplicar() {
    var nuevaVariable=1;
    while (nuevaVariable<=10) {
        console.log("2*"+nuevaVariable+" =" + 2*nuevaVariable);
        nuevaVariable++;
    }
}

function arreglo() {
    var arreglo = ['Abraham hernandez',44,4,true];
    console.log(arreglo)
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
    
}
