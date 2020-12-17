//INSTRUCCIONES: DESCOMENTE UN BLOQUE DE CODIGO PARA VER EL FUNCIONAMIENTO

/* Exercise_1
let nombre = prompt("Dame tu nombre completo");
document.writeln(`hola  ${nombre}`); endExercise*/

/* Exercise_2
let numero1 =parseInt(prompt("Dame un numero"));
let numero2 =parseInt(prompt("Dame un numero"));
document.writeln(`el resultado de la suma es ${numero1 + numero2}`); endExercise*/

/* Exercise_3
let numero1 =parseInt(prompt("Dame un numero"));
let numero2 =parseInt(prompt("Dame un numero"));
if(numero1>numero2){
    document.writeln(`El numero <b>${numero1}</b> es mayor al numero <b>${numero2}</b>`);    
}else if(numero1==numero2){
    document.writeln(`El numero <b>${numero1}</b> es igual al numero <b>${numero2}</b>`);
}else{
document.writeln(`El numero <b> ${numero1}</b> es MENOR al numero <b>${numero2}</b>`);} endExercise*/

/* Exercise_4*/
let numero1 = parseInt(prompt('Dame numero'));
let numero2 = parseInt(prompt('Dame numero'));
let numero3 = parseInt(prompt('Dame nuemro'));
let numeros = [numero1,numero2,numero3];
document.writeln(`<br>Imprimiendo array: ${numeros}`);
document.writeln(`<br>Imprimiendo array ordenado: ${numeros.sort().reverse()} `);
/*endExersise */

