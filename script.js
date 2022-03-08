"use strict";
// console.log("Hi");

// Select all elements and store them in a variable
const modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  btnsClosedModal = document.querySelector(".close-modal"),
  btnsOpenModal = document.querySelectorAll(".show-modal");

// Close Modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Open Modal Function
const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnsClosedModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// Implementing Keydown ESC Key Event
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
