"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  showCourses();
}

function showCourses() {
  let ByEcts = (a, b) => b.ectsPoints - a.ectsPoints;

  courses.sort(ByEcts);

  document.querySelector("#courses-list").innerHTML = "";
  courses.forEach(showInHTML);

  function showInHTML(course) {
    let HTMLelement = /*HTML*/ `
    <article>
      <li>Course: ${course.name}</li>
      <li>Starts: ${course.startDate}</li>
      <li>Ends: ${course.endDate}</li>
      <li>ECTS Points: ${course.ectsPoints}</li>
      <li>Student capacity: ${course.maxStudents}</li>
      <li>Teacher: ${course.teacher}</li>
      <br>
    </article>
  `;

    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", HTMLelement);
  }
}
