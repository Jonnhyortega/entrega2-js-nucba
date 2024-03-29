// Utilizando métodos de array e iterando sobre el
// array de pizzas, realizar las siguientes actividades,
// imprimiendo en consola:

// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza
// del array de pizzas tiene una propiedad "ingredientes" cuyo valor
// es un array con ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY.
// Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Las pizzas que tengan un id impar.
pizzas.forEach((pizza) => {
  if (pizza.id % 2 === 1) {
    console.log(`Por aqui les dejo las pizzas con id impar! ${pizza.nombre}`);
  }
});

console.log("------------------- ----------------------");
console.log("------------------- ----------------------");
console.log("------------------- ----------------------");

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

let excercise2 = pizzas.some((pizza) => pizza.precio < 600);

console.log(
  excercise2 ? "Sí hay pizzas por menos de $600" : "No hay pizzas con ese valor"
);

console.log("------------------- ----------------------");
console.log("------------------- ----------------------");
console.log("------------------- ----------------------");

// c) El nombre de cada pizza con su respectivo precio.

let = excercise3 = pizzas.forEach((pizza) => {
  const mensaje = `La ${pizza.nombre} cuesta $${pizza.precio}`;
  console.log(mensaje);
});

console.log("------------------- ----------------------");
console.log("------------------- ----------------------");
console.log("------------------- ----------------------");

// d) Todos los ingredientes de cada pizza (En cada iteración
// imprimir los ingredientes de la pizza que se esta recorriendo).

pizzas.forEach((pizza) => {
  const mensaje = `La ${pizza.nombre} contiene ${pizza.ingredientes} `;
  console.log(mensaje);
});

console.log("------------------- ----------------------");
console.log("------------------- ----------------------");
console.log("------------------- ----------------------");
