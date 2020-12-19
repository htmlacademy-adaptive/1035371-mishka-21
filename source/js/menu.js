// Const
const menu = document.querySelector(".main-nav");
const toggleButton = document.querySelector(".main-nav__toggle");
const buttonText = document.querySelector(".main-nav__toggle-text");

// Menu JS
menu.classList.remove("main-nav--nojs", "main-nav--opened");

//Function
toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("main-nav--opened");
});

toggleButton.addEventListener("click", (toggeButton) => {
  if (buttonText.innerHTML === "Открыть меню") {
    buttonText.innerHTML = "Закрыть меню";
  } else {
    buttonText.innerHTML = "Открыть меню";
  }
});
