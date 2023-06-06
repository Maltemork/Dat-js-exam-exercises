"use strict";

window.addEventListener("load", start);

let students = [
    {
        name: "Oskar",
        email: "oskar@oskar.dk",
        age: 52
    },
    {
        name: "Peter",
        email: "peter@peter.dk",
        age: 12
    }
];

function start() {
    document.querySelector("#create-student-form").addEventListener("submit", createNewStudent);
    showStudents();
}

function createNewStudent(event) {
    event.preventDefault();

    let nameParm = document.querySelector("#name").value;
    let emailParm = document.querySelector("#email").value;
    let ageParm = document.querySelector("#age").value;

    let newStudent = {
        name: nameParm,
        email: emailParm,
        age: Number(ageParm)
    }

    students.push(newStudent);
    document.querySelector("#create-student-form").reset();
    showStudents();
}

function sortStudents() {
    students.sort((a, b) => a.age - b.age);
    showStudents();
}

function showStudents() {
    document.querySelector("#students-table-body").innerHTML = "";

    for (const key in students) {
        let HTMLelement = `
            <tr>
                <td>${students[key].name}</td>
                <td>${students[key].email}</td>
                <td>${students[key].age}</td>
            </tr>
        `;

        document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", HTMLelement);

    }
}