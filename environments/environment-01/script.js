"use strict";
window.addEventListener("load", start);

async function start() {
  const userData = await loadJsonFile("users.json");
  console.log(userData);
  showUser(userData);
}

async function loadJsonFile(url) {
  const users = await fetch(url);
  const data = await users.json();
  return data;
}

function showUser(userList) {
  for (const user of userList) {
    const userHTML = /*HTML*/ `
    
        <li>Name: ${user.name} Active?: ${user.active}</li>
    
    
    `;

    document
      .querySelector("#userlist")
      .insertAdjacentHTML("beforeend", userHTML);
  }
}
