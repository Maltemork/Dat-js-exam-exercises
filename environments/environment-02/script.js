"use strict";

window.addEventListener("load", start);

let animals = [
  {
    name: "Thomas",
    type: "Cow",
    age: 23,
  },
  {
    name: "Mikael",
    type: "Cat",
    age: 12,
  },
  {
    name: "Mis",
    type: "Dog",
    age: 4,
  },
];

function start() {
  sortAnimals();
  document
    .querySelector("#create-form")
    .addEventListener("submit", submitAnimal);
}

function sortAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  const sortedAnimals = animals.sort((a, b) => b.age - a.age);
  sortedAnimals.forEach(showAnimalsInHTML);
}

function showAnimalsInHTML(animal) {
  let HTMLobject =
    /*HTML*/
    `
  <tr>
    <td>${animal.name}</td>
    <td>${animal.type}</td>
    <td>${animal.age}</td>
  </tr>
  `;
  document
    .querySelector("#list-container tbody")
    .insertAdjacentHTML("beforeend", HTMLobject);
}

function submitAnimal(event) {
  event.preventDefault();

  let nameParm = document.querySelector("#animal-name").value;
  let typeParm = document.querySelector("#animal-type").value;
  let ageParm = document.querySelector("#animal-age").value;

  let animal = {
    name: nameParm,
    type: typeParm,
    age: ageParm,
  };

  animals.push(animal);

  document.querySelector("#create-form").reset();

  sortAnimals();
}
