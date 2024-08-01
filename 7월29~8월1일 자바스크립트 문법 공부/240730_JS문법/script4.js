// let x = 10;
// let y = 4;
// 복합 대입 연산자(=할당연산자)
// y = y + x;

// y += x;
//안나옴!!!
// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";

// document.write(str);

// 증감 연산자
// 사용하는 위치에 따라 결과값이 다름
// 피연산자(x, y) 앞에 오면 연산작업을 먼저 실행함
// 피연산자(x, y) 뒤에 오면 연산작업 나중에 실행함
// x--;

// console.log(x--);

// y++;
// console.log(--y);

// 사칙 연산
// let result = x + y;

// console.log(result);

// result = x - y;
// console.log(result);

// result = x * y;
// console.log(result);

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);

// result = (x + y) * 3;
// console.log(result);

// 느슨한 연산자 : 텍스트만 판단
// console.log(2 == "2");
// 엄격한 연산자 : 자료의 형태까지
// console.log(2 === "2");

// 비교 연산자, 부정연산자(!)
// let varTest = 2;

// varTest = "hi";
// 다른 타입으로 못 줌. 숫자 --표현식으로 다시정의 못함

// console.log(2 !== "2");

// 논리연산자 : 참과 거짓 판독 &&/ || or 연산자(버티컬바)
// && : 좌항과 우항이 모두 참이어야 최종 결과값 true
// || : 좌항과 우항 둘중 하나만 참이어도 true

// 조건문
// 만약 ~ 라면 A일 때 무언가 실행, 그게 아니면 다른 무언가 실행!
//  if else 문
// 반드시 조건식 true 여야 실행됨.

// if(조건식 공간 => true 여야 함) {
//   실행문 공간
// }

// const x = 10;

// if (x > 5) {
//   console.log(`${x}는/은 5보다 큽니다`);
// }

// if (x < 20) {
//   console.log(`${x}는/은 20보다 작습니다!`);
// }
// if가 있다해서 당연히 else문도 따라와야하는건 아님
// if 문 계속 써도 됨(쪼개서 써도 됨)
// if 문만 있어도 실행이 됨. BUT 실행시킬때마다 메모리공간 할애함- 비효율적
// 간결하게 쓰기 위해 else 문을 쓰는 것임

// if(조건식) {
//   조건식이 true인 경우에 실행됨
// } else {
//   조건식이 false일 때 실행시키는 것
// } 하지만 이게 보통 문법이긴 함.

// const userInput = prompt("이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하겠습니다");
// } else {
//   alert(`${userInput}님 환영합니다`);
// }
// if else if 만약에 ~라면해 그게 아닐 수도 있으면 ~ 해
// 위 조건식 다 틀렸으면 final로 else 문 쓸 수 있음 (*한번만 사용가능)
// const score = Number(prompt("자바 스크립트 시험 점수를 입력하세요"));

// if (score !== null) {
//   if (score >= 90) {
//     alert("A학점을 취득하셨습니다.");
//   } else if (score >= 80) {
//     alert("B학점을 취득하셨습니다.");
//   }
//   // 중첩 if문(예외 조항처리 쓸 떄)
// } else {
//   alert("C학점을 취득하셨습니다.");
// }
// const score = Number(prompt("자바 스크립트 시험 점수를 입력하세요"));

// if (score !== null) {
//   if (score >= 90) alert("A학점을 취득하셨습니다.");
//   else if (score >= 80) alert("B학점을 취득하셨습니다.");
//   else alert("C학점을 취득하셨습니다.");
// }

const num1 = 10;
const num2 = 20;

// let small; 실무에선 이거로 안쓰긴함. 정석적인 방법

// if (num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }
// console.log(small);

small = num1 < num2 ? num1 : num2;
console.log(small);

