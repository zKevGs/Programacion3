/* cambiar h1 */

const h1E1 = document.querySelector("h1");
const nombreUsuario = "pepito";

h1E1.addEventListener("click", () => {
  h1E1.innerText = `hola ${nombreUsuario}`;
});

/* modo oscuro/claro */

const bodyEl = document.querySelector("body");
const btnEl = document.getElementById("btn");

btn.addEventListener("click", () => {
  bodyEl.classList.toggle("oscuro");
  bodyEl.classList.contains("oscuro")
    ? (btnEl.textContent = "Modo Claro")
    : (btnEl.textContent = "Modo Oscuro");
});

/* contar caracteres: */

const textEl = document.getElementById("txt");
const contadorCaracteresEl = document.querySelector("p");
/* limite de caracteres */
const limite = 50;

textEl.addEventListener("input", () => {
  const largoFrase = textEl.value.length;

  if (largoFrase <= limite) {
    contadorCaracteresEl.innerText = `Te quedan: ${
      limite - largoFrase
    } caracteres`;
    contadorCaracteresEl.style.color = "black";
  } else {
    contadorCaracteresEl.innerText = `Te pasaste por: ${
      largoFrase - limite
    } caracteres`;
    contadorCaracteresEl.style.color = "red";
  }
});

/* buscador */

const buscadorEl = document.getElementById("buscador");
const itemsEl = document.querySelector(".nombre li");
const listaEl = document.querySelector(".nombre");

const itemsLista = [...itemsEl].map((item) => item.textContent);

buscadorEl.addEventListener("input", () => {
  const palabra = buscadorEl.value.ToLowerCase();
  const filtrados = itemsLista.filter((nombre) =>
    nombre.ToLowerCase().includes(palabra)
  );

  listaEl.innerHTML = "";

  filtrados.forEach((nombre) => {
    const li = document.createElement("li");
    li.innerText = nombre;

    listaEl.appendChild(li);
  });
});

/* productos */



const productos = [
  {
    id: 1,
    titulo: "Camiseta",
    descripcion: "Camiseta de algodón 100% con diseño moderno.",
    precio: 19.99,
    descuento: 10,
  },
  {
    id: 2,
    titulo: "Pantalón",
    descripcion: "Pantalón de mezclilla azul, corte clásico.",
    precio: 34.99,
    descuento: 15,
  },
  {
    id: 3,
    titulo: "Auriculares Bluetooth",
    descripcion: "Auriculares inalámbricos con cancelación de ruido.",
    precio: 59.99,
    descuento: 20,
  },
  {
    id: 4,
    titulo: "Libro de cocina",
    descripcion: "Recetas fáciles y saludables para todos los días.",
    precio: 14.99,
    descuento: 5,
  },
  {
    id: 5,
    titulo: "Botella térmica",
    descripcion: "Mantiene tus bebidas frías o calientes por 12 horas.",
    precio: 24.99,
    descuento: 12,
  },
];

const descuentoAplicado = (precio, descuento) =>
  precio - (precio * descuento) / 100;

/* cuando retorno un objeto tengo que poner parentesis(en una funcion flecha) => ({}) */
  const generarCards = productos.map((elProducto) => ({
    const precioFinal = (productos) => descuentoAplicado(elProducto.precio, elProducto.descuento)

    const card = document.createElement("div")

    card.innerHTML = 
    `
    <h3>${elProducto.titulo}</h3>
    <p>${elProducto.descripcion}</p>
    <span>${elProducto.precio}</span>
    <span>${elProducto.descuento}</span>
    <span>${precioFinal}</span>
    `

    return card;
  }));


  const contenedorEl = document.getElementById("producto-container");

  const cards = generarCards(productos);

  cards.forEach(card => {
    contenedorEl.appendChild(card)
  })
//toggle
