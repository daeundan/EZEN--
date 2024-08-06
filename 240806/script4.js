// const inputText = document.querySelector("input[type='text']");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 다른페이지로 넘어가는거 막음
  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;
  const count = word.length;
  alert(`입력하신 ${word}의 글자수는 ${count}입니다`);
});

// inputText.addEventListener("focus", function () {
//   e.preventDefault();
//   const word = this.value;
//   console.log(word);
// });
