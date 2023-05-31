"use strict";

window.addEventListener("load", start);

let userArray = [];

async function start() {
  console.log("Vi kører");
  await getData();
  const adminUsers = userArray.filter(checkAdmin);
  adminUsers.forEach(showUsers);
}

async function getData() {
  const response = await fetch("users.json");
  const users = await response.json();

  prepareData(users);
}

function prepareData(users) {
  for (const key in users) {
    const userObject = users[key];
    userArray.push(userObject);
  }
}

function showUsers(user) {
  let userHTML =
    /*HTML*/
    `
    <li>Navn: ${user.name}</li>
    <li>Aktiv: ${user.active}</li>
    <li>Type: ${user.role}</li>
    <br>
    `;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", userHTML);
}

function checkAdmin(user) {
  return user.role === "admin";
}
