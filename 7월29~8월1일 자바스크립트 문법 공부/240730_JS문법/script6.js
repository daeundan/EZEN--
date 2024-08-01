// 사용자에게 숫자 1개를 받는다
// 해당 숫자가 짝수인지 홀수인지 확인하여
// 짝수라면, 알림창에 "짝수"출력
// 홀수라면, 알림창에 "홀수"출력
// 사용자가 취소 버튼을 클릭할 수 있다는 것을 감안하여
// 예외 조항처리를 하여라

// const num1 = 2 / 1;
// const userInput = prompt("숫자를 입력하세요");

// if (num1) {
//   alert("짝수입니다.");
// } else if
// alert("홀수입니다.");
// else {
//   alert("취소하겠습니다");
// }

// small = num1 < num2 ? num1 : num2;
// console.log(small);

let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== null) {
  userNumber = parseInt(userNumber);
  //삼항 조건 연산자
  userNumber % 2 === 0
    ? alert(`${userNumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
}
