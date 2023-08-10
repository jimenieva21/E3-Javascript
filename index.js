const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const buscador = document.querySelector("#buscador");
const contador = document.querySelector("#contador");
const searchButton = document.querySelector(".searchButton");
const container = document.querySelector("#container");
const error = document.querySelector("#error");

const mostrarDetallesPizza = (pizza) => {
  container.innerHTML = `
    <div class="pizzaCard">
      <h2>Detalles de la ${pizza.nombre}</h2>
      <img src="${pizza.imagen}">
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
    </div>
  `;
};

const init = () => {
  buscador.addEventListener("submit", searchPizza);
  const ultimaPizzaBuscada = localStorage.getItem("ultimaPizzaBuscada");
  if (ultimaPizzaBuscada) {
    const pizza = JSON.parse(ultimaPizzaBuscada);
    mostrarDetallesPizza(pizza);
  }
};

const searchPizza = (e) => {
  e.preventDefault();

  if (contador.value === "") {
    container.innerHTML = `
    <div class = "error-content">
    <p>ingrese un número</p>
    </div>
    `;
    return;
  }

  const pizza = pizzas.find((pizza) => pizza.id == contador.value);

  if (!pizza) {
    container.innerHTML = `
    <div class = "error-content">
    <p>PIZZA NO EXISTENTE</p>
    <img src="./img/error404-nopizza.jpg" alt="" width=20%>
    </div>
    `;

    return;
  }

  if (pizza) {
    container.innerHTML = `
    <div class = "pizzaCard">
    <h2>${pizza.nombre}</h2>
    <img src="${pizza.imagen}">
    <p>Precio: $${pizza.precio}</p>
    </div>
    `;
    error.textContent = "";
    localStorage.setItem("ultimaPizzaBuscada", JSON.stringify(pizza));
  }
};

init();
