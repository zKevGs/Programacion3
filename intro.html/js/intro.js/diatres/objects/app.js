/* let persona = {
  edad: 24,
  nombre: "jose",
  apellido: "Perez",
  fechaNacimiento: "12/04/2001",
  activo: true,
};

let persona2 = persona; //binding

console.log("Persona: ", persona); // getter

persona.activo = false; // setter
persona.id = 123; //agregar propiedades a un objeto
delete persona.activo; //eliminar cosas en el objeto
persona2.apellido = "martinez";

console.log("Persona 2: ", persona2); // getter
 */

/* clases en JS (privatizacion) */
/* class Persona {
  #_nombre;
  #_apellido;

  constructor(nombre, apellido) {
    this.#_nombre = nombre;
    this.#_apellido = apellido;
  }
  get nombre() {
    this.#_nombre;
  }
  set nombre(nombre) {
    this.#_nombre = nombre;
  }
}

let person = new Persona("jose", "perez");
person.console.log(person);
 */

let person = {
  nombre: "juan",
  apellido: "perez",
};
const a = "nombre";
console.log(person[a]); //buscar algo concreto dentro de la variable person y funciona solo con strings
