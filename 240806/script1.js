document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector("#result");
  result.innerText = `code : ${e.key}`;
  //   console.log(result);
  if (e.key == "y" || e.key == "Y") {
    result.innerText = `code : ${e.key}, yes`;
  }
});
