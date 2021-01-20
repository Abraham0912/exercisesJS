let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol();

const persona = {
    [NOMBRE]: "Abraham"
}
console.log(persona);

persona.NOMBRE = "Abraham Hernandez";
console.log(persona);

console.log(persona.NOMBRE);
console.log(persona.[NOMBRE]);