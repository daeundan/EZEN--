const contentbtn = document.querySelector(".content_btn");

contentbtn.addEventListener("click", () => {
  const info = document.querySelector("#info");
  info.classList.toggle("active");
});
