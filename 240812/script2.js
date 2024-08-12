// 랜덤함수, 반복문 사용해서 for 반복문!

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");
  console.log(number01, number02, result);

  let winner = "";
  let pickedNumbers = [];
  for (let i = 0; i < number02.value; i++) {
    let picked;
    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));
    pickedNumbers.push(picked);
    winner += `${picked}번, `;
  }
  result.innerText = `당첨자는 "${winner}" 입니다`;
});

// GPT가 만들어줌
// const form = document.querySelector("#lotteryForm");
// const randomPeople = document.querySelector("#number01");
// const randomWiner = document.querySelector("#number02");
// const result = document.querySelector("#result");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const totalPeople = parseInt(randomPeople.value);
//   const winnersCount = parseInt(randomWiner.value);

//   if (winnersCount > totalPeople) {
//     result.innerText = "뽑을 인원 수가 전체 인원 수보다 많습니다.";
//     return;
//   }

//   const winners = new Set();
//   while (winners.size < winnersCount) {
//     const randomNumber = Math.floor(Math.random() * totalPeople) + 1;
//     winners.add(randomNumber);
//   }

//   result.innerText = `당첨자는 ${Array.from(winners)
//     .sort((a, b) => a - b)
//     .join(", ")}번 입니다.`;
// });

// const randomPeople = document.querySelector("#number01");
// const randomWiner = document.querySelector("number02");
// const submit = document.querySelector("#submit");
// const result = document.querySelector("#result");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const randomNumber = Math.floor(`${randomPeople} - ${randomWiner}`);
// });

// window.onload = function () {
//   let randomNumber = Math.floor(Math.random() * 5) + 1;
//   document.result.innerText = `${randomNumber}`;
// };
