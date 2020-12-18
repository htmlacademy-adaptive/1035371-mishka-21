// Const
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const modalButton = document.querySelector(".order");

const showModal = (modal) => {
  modal.classList.add("modal--shown");
};

const closeModal = (modal) => {
  modal.classList.remove("modal--shown");
};

// Functions
modalButton.addEventListener("click", (e) => {
  e.preventDefault();
  showModal(modal);
});

modal.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal(modal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(modal);
  }
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
