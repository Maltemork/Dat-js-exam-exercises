"use strict";

window.addEventListener("load", start);

let products = [
  {
    name: "Bananer",
    price: 19.0,
    inStock: false,
  },
  {
    name: "Æbler",
    price: 29.0,
    inStock: true,
  },
  {
    name: "Appelsiner",
    price: 25.0,
    inStock: true,
  },
];

function start() {
  showProducts();
  document
    .querySelector("#create-form")
    .addEventListener("submit", createProduct);
}

function showProducts() {
  let sortedList = products.sort(
    (a, b) => Number(b.inStock) - Number(a.inStock)
  );

  sortedList.forEach(displayProductOnPage);

  function displayProductOnPage(product) {
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
}

function createProduct(event) {
  event.preventDefault();
  let nameParm = document.querySelector("#product-name").value;
  let priceParm = document.querySelector("#product-price").value;
  let inStockParm = document.querySelector("#stock").checked;

  let product = {
    name: nameParm,
    price: priceParm,
    inStock: inStockParm,
  };

  products.push(product);
  document.querySelector("#list-container").innerHTML = "";
  showProducts();
  document.querySelector("#create-form").reset();
}
