//이벤트 버블링
document.querySelector("p").addEventListener("click", () => {
  console.log("p");
});

document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

// 웹 브라우저가 실행 => html, js 파싱한다 : 문서를 읽으면서 기본적으로 실행될 수 있는 요소들을 실행시킨다는 의미임. 콘솔로그는 콘솔창에 바로찍어버림 = "실행컨텍스트" 라고 함 클릭이 발생되지 않았지만 콘솔로그를 윗쪽으로 끌어올려서 바로 실행시킴. 콜백함수형태가 아니니 addEventListner로 제어할 수 없는 것임. 앞으로 react에서 많이 나올 것임.

// function testFnc() {
//   alert("시작!");
// } 함수 선언 - 선언만으로는 아무것도 실행 안됨s

// testFnc(); // 함수 호출

//웹 브라우저는 우리들의 코드를 읽고 js코드도 읽어서 바로 실행시킨 것임

const elements = document.querySelectorAll("*");

// elements.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     console.log(
//       `e.target : ${e.target.tagName},
//       currentTarget : ${e.currentTarget.tagName}`
//     );
//   });
// });

// 이벤트 캡처링 : 버블링과 반대로 일어남
// 위에서부터 밑으로 내려갔다가 다시 위로 올라가며 버블링이 발생됨.(재미있는 점)

elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `e.target : ${e.target.tagName},
        currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
});
