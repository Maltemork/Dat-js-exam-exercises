"use strict";

window.addEventListener("load", start);

let products = [
  {
    name: "Bananer",
    price: 79.95,
    inStock: true,
  },
  {
    name: "Jordbær",
    price: 12.5,
    inStock: false,
  },
  {
    name: "Mælk",
    price: 11.95,
    inStock: true,
  },
];

function start() {
  document
    .querySelector("#create-form")
    .addEventListener("submit", submitProduct);
  products.forEach(showInHTML);
}

function showInHTML(product) {
  let HTMLobject =
    /*HTML*/
    `
  <article>
    <p>Produkt: ${product.name}</p>
    <p>Pris: ${product.price}</p>
    <p>På lager: ${product.inStock}</p>
    <br>
  </article>
  `;

  if (product.inStock === true)
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", HTMLobject);
}

function submitProduct(event) {
  event.preventDefault();

  let nameParm = document.querySelector("#product-name").value;
  let priceParm = document.querySelector("#product-price").value;
  let stockParm = document.querySelector("#stock").checked;

  let newProduct = {
    name: nameParm,
    price: priceParm,
    inStock: stockParm,
  };

  products.push(newProduct);
  document.querySelector("#list-container").innerHTML = "";
  products.forEach(showInHTML);
  document.querySelector("#create-form").reset();
}
