//operador ternario!
//esto es una expresion.

/* let age = 18;

if (age >= 18) {
  console.log("te dejo entrar");
} else {
  console.log("no podes entrar");
}

let msg = "";

//ternario
edad >= 18 ? (msg = "si") : (msg = "no");

console.log(msg);

age >= 18
  ? (msg = "entra pibe")
  : age <= 16
  ? (msg = "no papi")
  : (msg = "casi"); */

// spread operator
//funciona en cualquier iterable

/* let cadena = "hola";

/* let arr = cadena.split(""); //separador segun lo que este dentro de los ("")

console.log(arr); 

let arr = [...cadena];

console.log(arr); */

/* let numbers = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

let result = numbers.concat(numbers2);

let result2 = numbers2.concat(numbers);


//no funciona
/* let result2 = numbers + numbers2; 

//inmutabilidad (spread operator)

let result3 = [...numbers, ...numbers2, 9, 10];

console.log(result);
console.log(result2);
console.log(result3); */

//inmutabilidad, buena practica. intentar no usar mutabilidad
/* const persona = {
  nombre: "Juan",
  apellido: "Perez",
}; */
//no estoy mutando el objeto original, sino que la estoy copiando para agregarle una edad
/* const personaPorEdad = { ...persona, age: 18 };

//objeto original
console.log(persona);
//objeto mutado
console.log(personaPorEdad); */

//[] array {} objeto

/* const conjunto = [1, 2, 3, 4];
const conjunto2 = [3, 4, 5, 6];

let result = [...new Set([...conjunto, ...conjunto2])]; //un objeto lo podes iterar con un for pero no con un set

console.log(result); */

// destructuring

/* const persona = {
  nombre: "Juan",
  apellido: "Perez",
  age: 18,
  direccion: {
    nombre: "calle falsa",
    numero: 123,
  },
};

const numbers = [1, 2, 3, 4, 5];
const [] = numbers; */

/* const nombre = persona.nombre; */
/* const { apellido, nombre } = persona;

console.log(apellido, nombre); */

//rest operator

/* const numbers = [1, 2, 3, 4];

/* const rest = numbers.splice(2, 2); 

console.log(...numbers); //muta el array original
console.log(rest); */

//rest operator y descructuring

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [n1, n2, ...resto] = numbers; //solo primeros numeros, más ya es mejor hacer un filter

// rest != spread // izquierda del ("=") rest derecha del ("=") spread

console.log(n1, n2, resto);
 */
