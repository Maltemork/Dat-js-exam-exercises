"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  showTeachers();
}

function showTeachers() {
  let ByName = (a, b) => a.name.localeCompare(b.name);
  let ByEmail = (a, b) => a.email.localeCompare(b.email);

  teachers.sort(ByEmail);

  teachers.forEach(insertHTML);

  function insertHTML(teacher) {
    let HTMLelement = /*HTML*/ `
          <li>${teacher.name}</li>
          <li>${teacher.email}</li>
          <br>
        `;

    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", HTMLelement);
  }
}
