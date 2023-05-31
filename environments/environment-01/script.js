"use strict";

window.addEventListener("load", start);

let users = [];

async function start() {
  await getData();
  users.forEach(showUserInHTML);
  countTypes();
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();
  for (const key in data) {
    users.push(data[key]);
  }
}

function showUserInHTML(user) {
  let insertHTML =
    /*HTML*/
    `
  <article>
    <p>Name: ${user.name}</p>
    <p>Aktiv: ${user.active}</p>
    <p>Rolle: ${user.role}</p>
    <br>
  </article>
  `;

  document
    .querySelector("#userlist")
    .insertAdjacentHTML("beforeend", insertHTML);
}

function countTypes() {
  document.querySelector("#admin-count").textContent = users.filter(
    user => user.role === "admin"
  ).length;
  document.querySelector("#user-count").textContent = users.filter(
    user => user.role === "user"
  ).length;
  document.querySelector("#guest-count").textContent = users.filter(
    user => user.role === "guest"
  ).length;
}
