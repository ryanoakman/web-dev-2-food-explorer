"use strict";

// Event Listener
const hamburgerBtn = document.getElementById("hb-menu");
const hbDropdown = document.querySelectorAll(".dropdown-menu");

// Hamburger Menu Show/Hide
hamburgerBtn.addEventListener("click", () => {
  hbDropdown.forEach((dropdown) => {
    dropdown.classList.toggle("show");
  });
});
