const arr = ["수학", "국어"];

function testAvg() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr} 점수는?`));
  }
  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}점 입니다`);

// const userNum1 = Number(prompt("국어 점수를 입력해주세요"));
// const userNum2 = Number(prompt("수학 점수를 입력해주세요"));

// if (!isNaN(userNum1) && !isNaN(userNum2)) {
//   const average = (userNum1 + userNum2) / 2;
//   alert(`당신의 평균 점수는 ${average}입니다.`);
// } else {
//   alert("잘못 입력하셨습니다. 다시 입력해주세요.");
// }

// const userNum1 = Number(prompt("국어 점수를 입력해주세요"));
// const userNum2 = Number(prompt("수학 점수를 입력해주세요"));

// if (userNum1) {
//   const userNum3 = userNum1 + (userNum2 % 2);
//   alert(`당신의 평균 점수는 ${userNum3}입니다.`);
// } else {
//   alert(`잘못 입력하셨습니다. 다시 입력해주세요`);
// }
