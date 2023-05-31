"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  showTeachers();
  createTeacher("Malte", "maltems1996@gmail.com");
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  teachers.forEach(insertHTML);

  function insertHTML(teacher) {
    let HTMLelement = /*HTML*/ `
      <article>
        <li>${teacher.name}</li>
        <li>${teacher.email}</li>
        <br>
      </article>
    `;

    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", HTMLelement);
  }
}

function createTeacher(nameParm, emailParm) {
  let newTeacher = {
    name: nameParm,
    email: emailParm,
  };
  teachers.push(newTeacher);
  showTeachers();
}
