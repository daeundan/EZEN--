// 사용자로부터 2개의 숫자를 받는다
// 2개의 숫자의 최대 공약수를 찾아 콘솔창에 출력한다
// 최대 공약수란 ? 복수의 숫자를 동시에 나눌 수 있는 수 중에서 가장 큰 수 입니다.

// 선생님 답
// const num01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const num02 = Number(prompt("두번째 숫자를 입력하세요"));

// function getGCD() {
//   const max = num01 > num02 ? num01 : num02;
//   // 최대 공약수는 둘 중 큰 수 먼저 찾는것임
//   let gcd = 0;
//   for (let i = 1; i <= max; i++) {
//     if (num01 % i === 0 && num02 % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// }

// alert(`${num01}와 ${num02}의 최대공약수는 ${getGCD()}입니다.`);

// 내가 푼 답 + 최대공약수는 지느님
// const number1 = Number(prompt("첫번째 숫자를 입력해주세요."));
// const number2 = Number(prompt("두번째 숫자를 입력해주세요."));

// function numgcd(a, b) {
//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// const result = numgcd(number1, number2);
// alert(`두 숫자의 최대 공약수는 ${result}입니다.`);
// console.log(`두 숫자의 최대 공약수는 ${result}입니다.`);

// if (number > 1 && number !== null) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 1) continue;
//     sum += i;
//   }
//   console.log(sum);
// }
