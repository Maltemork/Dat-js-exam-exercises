"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  showCourses();
  createNewCourse(
    "Python introductory Course",
    "2024-01-01",
    "2024-06-30",
    10,
    30,
    "Peter"
  );
}

function showCourses() {
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

function createNewCourse(
  nameParm,
  startDateParm,
  endDateParm,
  ectsPointsParm,
  maxStudentsParm,
  teacherParm
) {
  let newCourse = {
    name: `${nameParm}`,
    startDate: `${startDateParm}`,
    endDate: `${endDateParm}`,
    ectsPoints: ectsPointsParm,
    maxStudents: maxStudentsParm,
    teacher: `${teacherParm}`,
  };

  courses.push(newCourse);
  showCourses();
}
