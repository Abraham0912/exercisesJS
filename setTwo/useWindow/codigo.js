console.log("Estoy conectado con index.html");
let alto = window.screen.height;
let ancho = window.screen.width;
let comprar = confirm(`¿Quieres realizar la compra?
Info de la resolucion de la ventana:
Ancho = ${ancho} Alto =  ${alto}`);

if(comprar){
    alert("Felicidades el proceso de compra continuara")
}else{
    alert("El proceso de compra se detuvo :C")
}