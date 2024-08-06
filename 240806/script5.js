const openbutton = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

openbutton.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

const closeButton = modalBox.querySelector("#profile > button");

closeButton.addEventListener("click", function () {
  this.classList.remove("btnActive");
  modalBox.classList.remove("active");
});
