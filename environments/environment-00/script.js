"use strict";

window.addEventListener("load", start);

function start() {
  const resultFailure = document.querySelector("#result_failure");
  const resultSuccess = document.querySelector("#result_success");

  resultFailure.classList.add("hide");
  resultSuccess.classList.add("hide");

  document.querySelector("#btn-knap").addEventListener("click", () => {
    console.log("Det virker.");
    resultSuccess.classList.add("show");
    resultFailure.classList.add("hide");
  });
}
