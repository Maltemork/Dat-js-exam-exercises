"use strict";

window.addEventListener("load", start);

const users = [];

async function start() {
  await getData();
  users.forEach(showInHTML);
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();

  for (const key in data) {
    users.push(data[key]);
  }
}

function showInHTML(user) {
  let HTMLobject =
    /*HTML*/
    `
  <article>
    <li>${user.name}</li>
    <li>${user.active}</li>
    <li>${user.role}</li>
    <br>
  </article>
  `;

  if (user.active === true) {
    document
      .querySelector("#userlist")
      .insertAdjacentHTML("beforeend", HTMLobject);
  }
}

function addUser(nameParm, activeParm, roleParm) {
  let user = {
    name: nameParm,
    active: activeParm,
    role: roleParm,
  };

  document.querySelector("#userlist").innerHTML = "";
  users.push(user);
  users.forEach(showInHTML);
}
