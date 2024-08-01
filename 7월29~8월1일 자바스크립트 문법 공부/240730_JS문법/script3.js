// 사용자로부터 3개의 값을 받으세요
// 3개의 값 = 교통비, 식대, 음료비
//

// const expenses = 0;
// const expenses1 = parseFloat(
//   prompt("이번 달 교통비를 입력해주세요", "ex.23,000").replace(/,/g, "")
// );

// const expenses2 = parseFloat(
//   prompt("이번 달 식대를 입력해주세요", "ex.50,000").replace(/,/g, "")
// );

// const expenses3 = parseFloat(
//   prompt("이번 달 음료비를 입력해주세요", "ex.13,000").replace(/,/g, "")
// );

// const normalexpense = expenses1 + expenses2 + expenses3;

// let result = normalexpense < 10000 && normalexpense > 10000;
// //3항조건연산자
// result = result ? "예산 관리 잘하셨어요~" : "예산 관리 잘하셔야 겠어요ㅠㅠ";

// alert(`${result}`);

// 선생님 해답
// const traffic = Number(prompt("교통비 입력!!"));
// const food = Number(prompt("식대 입력!!!"));
// const drink = Number(prompt("음료비!!!"));

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력"));
  arr.push(userNum);
}

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
//구조분해할당 필요
const [traffic, food, drink] = arr;

console.log(traffic, food, drink);
const sum = traffic + food + drink;

console.log(sum);
if (isNaN(sum) || sum === 0) {
  alert("숫자를 입력하여 주세요.");
} else if(sum < 10000) {
  alert("예산관리 잘 하셨네요 ^^")
} else {
  alert("예산관리 하셔야 겠어요ㅠㅠ")
}
