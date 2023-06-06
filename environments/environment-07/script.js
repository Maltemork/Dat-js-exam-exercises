"use strict";

window.addEventListener("load", start);

let students = [];

function start() {
    document.querySelector("#create-student-form").addEventListener("submit", createStudentObject);
}


function createStudentObject() {
    event.preventDefault();
    let nameParm = document.querySelector("#name").value;
    let emailParm = document.querySelector("#email").value;
    let ageParm = document.querySelector("#age").value;

    let newStudent = {
        name: nameParm,
        email: emailParm,
        age: ageParm
    }

    students.push(newStudent);
    document.querySelector("#create-student-form").reset();
}

function checkEmails() {

for (const key in students) {
    let email = students[key].email;
    let slicedEmail = email.lastIndexOf(`@`);

    if (slicedEmail > -1 && email.slice(slicedEmail + 1) === `stud.kea.dk`) {
        console.log("EMAIL IS CORRECT!");

    } else {
        console.log("E-MAIL IS INCORRECT");
        students.splice(key, 1);
    }
}
}