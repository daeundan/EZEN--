const userInfo1 = alert(
  "지금부터 삼각형을 만들기 위한 숫자 3개를 차례대로 입력해주세요. 단, 숫자는 자연수로 입력해주세요 :)"
);
const userInfo2 = alert(
  "삼각형이 되려면 반드시 두 변의 길이 합이 나머지 한 변보다 커야 합니다! 삼각형을 만들 수 있다면 YES, 만들 수 없다면 NO가 나올거예요."
);
const userNum1 = Number(prompt("1번째 자연수 숫자를 입력해주세요."));
const userNum2 = Number(prompt("2번째 자연수 숫자를 입력해주세요."));
const userNum3 = Number(prompt("3번째 자연수 숫자를 입력해주세요."));

const numbers = [userNum1, userNum2, userNum3];

let isValid =
  numbers.length === 3 &&
  numbers.every((num) => Number.isInteger(num) && num > 0);

if (isValid) {
  const [a, b, c] = numbers;
  if (a + b > c && a + c > b && b + c > a) {
    console.log("YES! 당신은 삼각형을 만들 수 있는 숫자를 입력하였습니다.");
    alert("오! 좋아요 삼각형을 만들 수 있는 숫자를 입력하셨습니다.");
  } else {
    console.log("NO! 당신은 삼각형을 만들 수 없는 숫자를 입력하였습니다.");
    alert("오! 이런, 삼각형을 만들 수 없는 숫자를 입력하셨습니다.");
  }
} else {
  alert("잘못 입력하셨습니다. 자연수를 입력해주세요!");
}
