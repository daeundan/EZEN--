// 현재 날짜 정보 알기 위해 Date 함수 사용
// 현재 연도 정보 값만 current 에 넣기 위해 getFullYear 사용
const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
current.innerText = `⏰ 오늘은 ${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 입니다 :) ⏰`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  const resultDays = document.querySelector("#days");

  //   console.log(resultDays);
  const resultHours = document.querySelector("#hours");

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365);

  resultDays.innerText = `현재 나이는 ${passedAges} 살 입니다`;
  resultHours.innerText = `살아온 지 ${passedHours}의 시간이 흘렀습니다.`;

  //   console.log(passedDays, passedHours, passedAges);
  //   console.log(passed);
  //   console.log(birthDay);
});

// 비효율적인 방법이라 위에 처럼 씀.
// const today = new Date();
// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth() + 1; // 우리가 인식하는 월은 0부터 시작안함
// const currentDate = today.getDate();

// current.innerText = `⏰ 오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다 :) ⏰`;

// console.log(birthYear, birthMonth, birthDate, form);
// console.log(current);
// console.log(today);
// console.log(currentYear, currentMonth, currentDate);

// new Date() 안에 값 넣는 방법은 ("2024-08-12") 연, 월, 일 ("2024", "08", "12") 쪼개서 가져올 시 주의해야 됨.
// 쪼개서 가져오는 경우 값을 컴퓨터 방식으로 읽기 때문에 월에는 -1 을 해주어야 함.

// 하루를 밀리초 단위로 변환할 때 공식
// 1초 = 1000밀리초
// 1분 = 60초 = (분의 단위 : 60 * 1000)
// 1시간 = 60분 = 3600초 = (60 * 60 * 1000)
// 1일 = 24시간 = (24 * 60 * 60 * 1000)
