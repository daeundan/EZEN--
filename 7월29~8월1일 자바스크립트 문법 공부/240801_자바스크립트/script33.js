// 미션!
// 현재 보고있는 웹 브라우저 문서 내에 버튼 생성
//

const colors = ["white", "yellow", "aqua", "purple"];

let currentColorIndex = 0;

const button = document.querySelector("button");

button.addEventListener("click", function () {
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  document.body.style.backgroundColor = colors[currentColorIndex];
});

// 선생님 답!!
// const color = ["white", "yellow", "aqua", "purple"];
// const button = document.querySelector("button");

// let i = 0;
// button.addEventListener("click", () => {
//   i++;
//   if (i >= color.length) i = 0;
//   const bodyTag = document.querySelector("body");
//   bodyTag.style.backgroundColor = color[i];
// })
