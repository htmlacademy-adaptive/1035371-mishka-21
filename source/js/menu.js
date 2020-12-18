// Const
const menu = document.querySelector(".main-nav");
const toggleButton = document.querySelector(".main-nav__toggle");

// Menu JS
menu.classList.remove("main-nav--nojs", "main-nav--opened");

//Function
toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("main-nav--opened");
});
