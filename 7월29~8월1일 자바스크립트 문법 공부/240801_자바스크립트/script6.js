// 사용자에게 숫자 1개를 받는다.
// 단, 조건은 무조건 1보다 큰 숫자 받음
// 사용자에게 받은 숫자 중 1부터 해당 숫자 수들 중 짝수만 찾아 콘솔에 출력

//선생님 답
const number = Number(prompt("1보다 큰 숫자를 입력해주세요."));
let sum = 0;

if (number > 1 && number !== null) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }
  console.log(sum);
}

// const userInput = Number(prompt("1부터 큰 숫자를 입력해주세요."));

// for (let i = 0; i < number.length; i++) {
//   const arr = [i] + [i];

//   if (number[i] / 2) {
//     console.log(`${arr}`);
//   }
// }
