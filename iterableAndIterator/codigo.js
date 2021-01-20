
const iterable = [1,2,3,4,5];
//const iterable = "Hola mundo";


const iterador = iterable[Symbol.iterator]();

console.log(iterable);//Hola mundo
console.log(iterador);//>StringIterator{}

console.log(iterador.next);//>StringIterator{}
