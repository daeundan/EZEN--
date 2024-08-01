//사용자에게 이름값/ 키 / 몸무게 값 받고싶음

const name = prompt("당신의 이름을 입력하세요!", "ex. 김태희");

const height = parseFloat(prompt("당신의 키는 몇센치 인가요?", "ex.163.2"));

const weight = parseFloat(prompt("당신의 몸무게는 몇 kg 인가요?", "ex. 53.2"));

const normalWeight = (height - 100) * 0.9;

let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;
//3항조건연산자
result = result
  ? "적정체중입니다! 식단관리 하세요!"
  : "적정체중이 아닙니다! 밥 많이 드세요";

alert(`${name}님의 키는 ${height}센치미터, ${weight}kg으로 ${result}`);
