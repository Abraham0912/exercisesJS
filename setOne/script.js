//INSTRUCCIONES: DESCOMENTE UN BLOQUE DE CODIGO PARA VER EL FUNCIONAMIENTO

/* let nombre = prompt("Dame tu nombre completo");
document.writeln(`hola  ${nombre}`); */

/* let numero1 =parseInt(prompt("Dame un numero"));
let numero2 =parseInt(prompt("Dame un numero"));
document.writeln(`el resultado de la suma es ${numero1 + numero2}`); */

let numero1 =parseInt(prompt("Dame un numero"));
let numero2 =parseInt(prompt("Dame un numero"));
if(numero1>numero2){
    document.writeln(`El numero <b>${numero1}</b> es mayor al numero <b>${numero2}</b>`);    
}else if(numero1==numero2){
    document.writeln(`El numero <b>${numero1}</b> es igual al numero <b>${numero2}</b>`);
}else{
document.writeln(`El numero <b> ${numero1}</b> es MENOR al numero <b>${numero2}</b>`);}