// 힘수 선언!
// 함수는 매개변수가 꼭 필수는 아님
// 함수를 호풀할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값을 삽입해야함.

// function calcSum(str) {
//   prompt(`${str}`);
// }

// calcSum("아이언맨");

// 일반함수 혹은 function 함수
// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcSum(); //호출해야지만 나옴

// function add(x, y) {
//   return x + y;
// }

// add(2, 5);
// console.log(add);

//익명함수
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다`);
// }

// sum(1, 2);
// console.log(`${result}`);

// return 문
// const num = Number(prompt("숫자를 입력하세요!"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// calcSum(num);

// alert(`1부터 ${num}까지 차례대로 더하면 ${calcSum(num)} 이/가 나옵니다`);

// function multiple(a, b, c) {
//   console.log(a + b + c);
// }

// multiple(2, 4, 8);
//값을 정의해야 console창에 값이 나옴. 하나라도 빠지면 안됨. NaN 나옴.

// 하지만 만약, 올리브영 프론트엔드 개발자인데
// 회원가입시 => *이름, *나이, 옵션:피부타입
// 그럼 3번째 값이 오류가 생김

// 기본 매개 변수
// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }

// multiple(2, 4);

// c가 옵션값임. 2개만 입력해도 c는 10으로 판단되어 계산됨.
// 왼쪽부터 값을 받아 입력 2 + 4 + c(10) = 16

document.body.innerHTML += `<button id="btn">Click!</button>`;

const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  alert("클릭하셨습니다!");
});

function display() {
  alert("클릭했습니다!");
}

button.addEventListener("click", display);
