/* tipos de funciones - declaracion */ /* la funcion siempre esta en el mismo lugar de memoria, nunca cambia, por eso poner con const siempre */

//hoisting es la invocacion antes de la creacion de la funcion

/* default nombrada */

// invicar -> si o si con ()

/* const suma = sumar(1, 2);
console.log(suma);

//más básica -> admite hoisting
function sumar(a, b) {
  return a + b;
} */

/* funcion anonima, no admite hoisting */

/* const resta = function (a, b) {
  return a - b;
};

console.log(resta(12, 6)); */

/* funcion autoinvocable, IIFE */
/* (function () {
  console.log("hola");
})(); */

/* arrow function */ /* no admite hoisting -> vear los 7 bindings de la palabra "this" */
/* no se puede utilizar como metodo de una clase / objeto mientras que las demás si */

const myFunction = (a, b) => a + b; //si solo va a retornar algo se puede hacer así
const myFunction2 = (z) => z.ToUpperCase(); // se puede abreviar mas sacando los parentesis(con ctrl + s se agregan solo)
console.log(myFunction(2, 7));
console.log(myFunction2("hola"));

//buscar que es un callback
