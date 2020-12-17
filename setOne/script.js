//INSTRUCCIONES: DESCOMENTE UN BLOQUE DE CODIGO PARA VER EL FUNCIONAMIENTO

/* Exercise_1
let nombre = prompt("Dame tu nombre completo");
document.writeln(`hola  ${nombre}`); 
endExercise*/

/* Exercise_2
let numero1 =parseInt(prompt("Dame un numero"));
let numero2 =parseInt(prompt("Dame un numero"));
document.writeln(`el resultado de la suma es ${numero1 + numero2}`); 
endExercise*/

/* Exercise_3
let numero1 =parseInt(prompt("Dame un numero"));
let numero2 =parseInt(prompt("Dame un numero"));
if(numero1>numero2){
    document.writeln(`El numero <b>${numero1}</b> es mayor al numero <b>${numero2}</b>`);    
}else if(numero1==numero2){
    document.writeln(`El numero <b>${numero1}</b> es igual al numero <b>${numero2}</b>`);
}else{
document.writeln(`El numero <b> ${numero1}</b> es MENOR al numero <b>${numero2}</b>`);} 
endExercise*/

/* Exercise_4
let numero1 = parseInt(prompt('Dame numero'));
let numero2 = parseInt(prompt('Dame numero'));
let numero3 = parseInt(prompt('Dame nuemro'));
let numeros = [numero1,numero2,numero3];
document.writeln(`<br>Imprimiendo array: ${numeros}`);
document.writeln(`<br>Imprimiendo array ordenado: ${numeros.sort().reverse()} `);
endExersise */

/* Exercise_5
let numero = parseInt(prompt('Dame numero'));
if (numero % 2 == 0){
    document.writeln('Si es divisible entre 2 :D')
}else{
    document.writeln('No es divisible :C');
}
endExersise */

/* Exercise_6
let cadena = prompt('Escribe una frase y encontrare la sumatoria de las letras "a"');
array = Array.from(cadena);
let numero = 0 ;
array.forEach(item =>{if(item == 'a')numero = numero + 1;} );
document.writeln(`Tu frase contiene <b>${numero} </b>letras a.`);
endExersise */

/* Exercise_7
let cadena = prompt('Escribe una frase y encontrare la sumatoria de las vocales');
array = Array.from(cadena);
let vocales = [] ;
array.forEach(item =>{if(item == 'a'|| item == 'e'|| item == 'i'|| item == 'o'|| item == 'u')vocales.push(item);} );
document.writeln(`Tu frase contiene <b>${vocales} </b>vocales.`);
endExersise */

/* Exercise_8
let cadena = prompt('Escribe una frase y encontrare la sumatoria de las vocales');
array = Array.from(cadena);
let numero = 0 ;
array.forEach(item =>{if(item == 'a'|| item == 'e'|| item == 'i'|| item == 'o'|| item == 'u')numero = numero + 1;} );
document.writeln(`Tu frase contiene <b>${numero} </b>vocales.`);
endExersise */

/* Exercise_9*/
let cadena = prompt('Escribe una frase y encontrare la sumatoria por cada vocal');
array = Array.from(cadena);
let contador =0,contadorA = 0,contadorE = 0,contadorI = 0,contadorO = 0,contadorU = 0 ;
noVocales = [];
array.forEach(item =>{
    if(item == 'a'){
        contadorA = contadorA + 1;
    }else if (item == 'e'){
        contadorE = contadorE + 1;
    } else if(item == 'i'){ 
        contadorI = contadorI + 1;
    } else if(item == 'o'){
        contadorO = contadorO + 1;
    } else if(item == 'u'){
        contadorU = contadorU + 1;
    } else{contador = contador + 1;}

} );
document.writeln(`
<style>
table, th, td {
  border: 1px solid black;
}
</style>

                                    <table style="width:400px">
                                    <tr>
                                      <th>Numero de vocales</th>
                                      <th>vocal</th>
                                     
                                    </tr>
                                    <tr>
                                      <td>${contadorA} </td>
                                      <td>A</td>
                                    
                                    </tr>
                                    <tr>
                                      <td>${contadorE} </td>
                                      <td>E</td>
                                      
                                    </tr>

                                    <tr>
                                    <td>${contadorI} </td>
                                    <td>I</td>
                                    
                                  </tr>

                                  <tr>
                                  <td>${contadorO} </td>
                                  <td>O</td>
                                  
                                </tr>

                                <tr>
                                <td>${contadorU} </td>
                                <td>U</td>
                                
                              </tr>
                              <tr>
                                <td>${contador} </td>
                                <td>No son vocales</td>
                                
                              </tr>
                                  </table>
  `);
/*endExersise */
