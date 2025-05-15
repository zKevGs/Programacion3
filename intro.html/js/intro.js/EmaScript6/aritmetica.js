//ESM -> Ecma Script Modules -> se usa, import/export
// Node -> CommonJS -> se usa, require ()
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

//traer mas de una funcion a otro item de js

//modulos por default
export default {
  sumar,
  restar,
};
