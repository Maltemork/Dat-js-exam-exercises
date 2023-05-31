"use strict";

window.addEventListener("load", start);

let products = [
  {
    name: "Bananer",
    price: 98.2,
    inStock: true,
  },
  {
    name: "Pærer",
    price: 19.0,
    inStock: true,
  },
  {
    name: "Appelsiner",
    price: 8.2,
    inStock: false,
  },
];

function start() {
  document
    .querySelector("#select-sort-by")
    .addEventListener("change", showProducts);
  showProducts();
}

function showProducts() {
  document.querySelector("#list-container").innerHTML = "";

  for (const key in products) {
    const product = products[key];
    product.id = key;
  }

  let sortByName = (a, b) => a.name.localeCompare(b.name);

  let sortByPrice = (a, b) => b.price - a.price;

  let sortByStock = (a, b) => Number(b.inStock) - Number(a.inStock);

  if (document.querySelector("#select-sort-by").value == "name") {
    products.sort(sortByName);
  } else if (document.querySelector("#select-sort-by").value == "price") {
    products.sort(sortByPrice);
  } else if (document.querySelector("#select-sort-by").value == "inStock") {
    products.sort(sortByStock);
  } else {
    products.sort((a, b) => b.id - a.id);
  }

  function insertHTML(product) {
    let HTMLelement =
      /*HTML*/
      `
    <article>
      <p>${product.name}</p>
      <p>${product.price}</p>
      <p>${product.inStock}</p>
      <br>
    </article>
    `;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", HTMLelement);
  }

  products.forEach(insertHTML);
}
