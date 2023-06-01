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
    data[key].count = 0;
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
      addToBasket(product);
    });

  function addToBasket() {
    if (product.count == 0) {
      product.count++;
      basket.push(product);
      showBasketTotals();

      let HTMLelement = /*HTML*/ `
      <tr id="element-${product.id}">
      <td>
        <button class="remove">-</button>
        <div id="antal-${product.id}">${product.count}</div>
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
      document
        .querySelector(`#element-${product.id} .remove`)
        .addEventListener("click", () => {
          removeFromBasket(product);
        });
      document
        .querySelector(`#element-${product.id} .add`)
        .addEventListener("click", () => {
          addToBasket(product);
        });
    } else {
      product.count++;
      showBasketTotals();
      document.querySelector(`#antal-${product.id}`).textContent =
        product.count;
      console.log(product);
    }
  }

  function removeFromBasket() {
    product.count--;
    showBasketTotals();
    if (product.count > 0) {
      document.querySelector(`#antal-${product.id}`).textContent =
        product.count;
    } else {
      product.count = 0;
      basket.splice(
        basket.findIndex(a => a.id === product.id),
        1
      );
      document.querySelector(`#element-${product.id}`).remove();
    }
  }
}

function showBasketTotals() {
  let totalWeight = 0;
  let totalProducts = 0;
  let totalPrice = 0;

  //total products
  products.forEach(product => {
    totalProducts = totalProducts + product.count;
  });
  document.querySelector("#total-in-basket").textContent = totalProducts;

  //total weight
  products.forEach(product => {
    totalWeight = totalWeight + product.weight * product.count;
  });

  document.querySelector("#total-weight").textContent = totalWeight;

  //total price
  products.forEach(product => {
    totalPrice = totalPrice + product.price * product.count;
  });

  if (totalWeight > 2000) {
    document.querySelector(".warning").classList.add("show");
  } else {
    document.querySelector(".warning").classList.remove("show");
  }

  document.querySelector("#total-price").textContent = totalPrice;
}
