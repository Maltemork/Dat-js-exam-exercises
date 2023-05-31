"use strict";

window.addEventListener("load", start);

let animals = [];

function start() {
  document
    .querySelector("#create-form button")
    .addEventListener("click", createAnimal);

  showAnimals();
}

function addToList(nameParm, typeParm, ageParm) {
  let animal = {
    name: `${nameParm}`,
    type: `${typeParm}`,
    age: `${ageParm}`,
  };
  animals.push(animal);
}

function createAnimal(event) {
  event.preventDefault();
  let nameParm = document.querySelector("#animal-name").value;
  let typeParm = document.querySelector("#animal-type").value;
  let ageParm = document.querySelector("#animal-age").value;

  addToList(nameParm, typeParm, ageParm);
  document.querySelector("#create-form").reset();
  showAnimals();
}

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = ``;

  let sortedAnimals = animals.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    return 1;
  });

  sortedAnimals.forEach(showInHTML);

  function showInHTML(animal) {
    document.querySelector("#list-container tbody").insertAdjacentHTML(
      "beforeend" /*html*/,
      `
      <tr>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
      </tr>
      `
    );
  }
}
