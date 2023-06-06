"use strict";

window.addEventListener("load", start);

let students = [
    {
        name: "Peter",
        email: "peter@peter.dk",
        age: 26
    },
    {
        name: "Oskar",
        email: "oskar@oskar.dk",
        age: 19
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
        age: ageParm
    }

    students.push(newStudent);
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

        if (students[key].age > 18) {
            document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", HTMLelement);
        }
    }
}

function sortStudents() {
    students.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 1;
        }
    );
}