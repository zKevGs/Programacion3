/* const personas = [
  {
    nombre: "Agustin",
    edad: 10,
  },
  {
    nombre: "Ayelen",
    edad: 19,
  },
  {
    nombre: "Romina",
    edad: 29,
  },
  {
    nombre: "Pedro",
    edad: 100,
  },
  {
    nombre: "Raul",
    edad: 5,
  },
];

const mayores = personas.filter(personas.edad >= 18);

console.log(mayores);
 */
/* ## 2. Buscar un producto por nombre

Dado un array de productos ({ id, nombre, precio }), obtener el producto que tenga como nombre "Laptop". */

/* const productos = [
  {
    id: 1,
    categoria: "pc",
    precio: 3000,
  },
  {
    id: 12,
    categoria: "laptop",
    precio: 123,
  },
  {
    id: 98,
    categoria: "lavarropas",
    precio: 500,
  },
  {
    id: 87,
    categoria: "tv",
    precio: 1500,
  },
];

const laptopp = productos.find(
  (elProducto) => elProducto.categoria == "laptop"
);

console.log(laptopp); */

/* ## 3. Aumentar los precios un 10%

Dado un array de productos, devolver un nuevo array donde todos los productos tengan el precio aumentado en un 10%. */

/* const productos = [
  {
    id: 1,
    categoria: "pc",
    precio: 3000,
  },
  {
    id: 12,
    categoria: "laptop",
    precio: 123,
  },
  {
    id: 98,
    categoria: "lavarropas",
    precio: 500,
  },
  {
    id: 87,
    categoria: "tv",
    precio: 1500,
  },
];

const productoAumentado = productos.map((producto) => ({
  ...producto, ///expred
  precio: producto.precio * 1.1,
}));
console.log(productoAumentado);
 */
/* ## 4. Filtrar películas recomendadas

Dado un array de películas ({ titulo, puntaje }), quedate solo con las que tienen puntaje mayor a 7. */

/* const peliculas = [
    {titulo: "Lluvia de hamburguesas", puntaje: ,};
    {titulo: "Los Simpson: La pelicula" , puntaje: ,};
    {titulo: "Aladin" , puntaje: ,};
    {titulo: "Interstellar", puntaje: 8.7 ,};
]; */

/* ## 5. Marcar tareas completadas

Dado un array de tareas ({ id, descripcion, completada }), devolver un nuevo array donde todas las tareas estén marcadas como completadas (completada: true). */

/* const tareas = [
  { id: 1, descripcion: "Lavar los platos", completada: false },
  { id: 2, descripcion: "Hacer la tarea", completada: false },
  { id: 3, descripcion: "Sacar la basura", completada: false },
  { id: 4, descripcion: "Regar las plantas", completada: true },
];

const tareascompletadas = tareas.map((completadas) => ({
  ...completadas,
  completada: (tareas.completada = true),
}));

console.log(tareascompletadas); */

/* # Nivel 2

## 1. Filtrar productos en oferta y calcular precios finales

Dado un array de productos ({ nombre, precio, descuento }), quedate solo con los que tengan un descuento mayor a 0. Luego calcular el precio final de cada uno (restando el descuento).
 */

const productosTienda = [
  { nombre: "Laptop", precio: 1200, descuento: 10 }, // 10% de descuento
  { nombre: "Smartphone", precio: 800, descuento: 5 },
  { nombre: "Auriculares", precio: 150, descuento: 15 },
  { nombre: "Monitor", precio: 300, descuento: 0 },
  { nombre: "Teclado mecánico", precio: 100, descuento: 20 },
  { nombre: "Mouse inalámbrico", precio: 50, descuento: 10 },
  { nombre: "Impresora", precio: 200, descuento: 5 },
];

const productosEnOferta = productosTienda.filter(
  ((productos) => productos.descuento > 0).map((elprod) => ({
    nombre: elprod.nombre,
    precio: elprod.precio,
  }))
);

console.log(productosEnOferta);

//cursor.com/students descuento
