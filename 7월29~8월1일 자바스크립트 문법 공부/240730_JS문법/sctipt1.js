// 사용자에게 화씨온도를 받아서 콘솔창에서 해당 온도를 섭씨 온도로 변환 했을때의 값을 출력해줘

// const number = prompt("화씨 온도를 입력해주세요!");

// console.log(number - 32 / 1.8);

// const ondo1 = prompt("화씨 온도를 입력하세요", "ex. 45");

// const ondo2 = ((ondo1 - 32) * 5) / 9;

// console.log("섭씨 온도: " + ondo2);

// const fah = paseFloat(prompt("화씨 온도를 입력해주세요!", "ex. 45"));

// const cel = (fah - 32) / 1.8;

// console.log(cel);

const fah = parseFloat(prompt("화씨 온도를 입력하세요!"));

const cel = ((fah - 32) / 1.8).toFixed(2);


alert(`화씨온도 ${fah}도는 섭씨온도 ${cel}도 입니다`);
