"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  let sortedCourses = courses.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  sortedCourses.forEach(showCourse);
}

function showCourse(course) {
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
