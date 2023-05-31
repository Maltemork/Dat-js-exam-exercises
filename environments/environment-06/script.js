"use strict";

window.addEventListener("load", start);

let products = [];
let basket = [];

async function start() {
  await getData();

  products.forEach(showProduct);
}

async function getData() {
  let response = await fetch("./products.json");
  let data = await response.json();
  for (const key in data) {
    data[key].id = key;
    products.push(data[key]);
  }
}

function showProduct(product) {
  let HTMLelement = /*HTML*/ `
  <article>
    <h3>${product.name}</h3>
    <p>vægt: ${product.weight} g</p>
    <p>pris: ${product.price},-</p>
    <button class="addToBasket-btn">Læg i kurv</button>
  </article>
  `;
  document
    .querySelector("#products")
    .insertAdjacentHTML("beforeend", HTMLelement);
  document
    .querySelector("#products :last-child button")
    .addEventListener("click", () => {
      basket.push(product);
      addToBasket(product);
    });

  function addToBasket() {
    let HTMLelement = /*HTML*/ `
    <tr>
      <td>
        <button class="remove">-</button>
          ANTAL
        <button class="add">+</button>
      </td>
      <td>${product.name}</td>
      <td>${product.price},-</td>
      <td>PRIS I ALT,-</td>
    </tr>
  `;

    document
      .querySelector("#basket tbody")
      .insertAdjacentHTML("beforeend", HTMLelement);
  }
}
