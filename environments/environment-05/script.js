"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  courses.forEach(insertHTML);
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", filterCourses);
}

function insertHTML(course) {
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

function filterCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  let selectedFilter = document.querySelector("#select-filter-ects").value;
  console.log(selectedFilter);

  let filteredList = courses.filter(
    course => course.ectsPoints == selectedFilter
  );

  filteredList.forEach(insertHTML);
}
