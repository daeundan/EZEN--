// 새로고침 할 때마다 백 그라운드 이미지 바꾸기
// onload 사용, Math 수학객체 사용
// window안에 document지만 생략 가능
// css를 script에서 제어하려면 Style 앞에 써야함.

window.onload = function () {
  let randomNumber = Math.floor(Math.random() * 5) + 1; // 4.9999의 최대 숫자, floor 는 소숫점 없애기 위함
  document.body.style.backgroundImage = `url(./img/bg-${randomNumber}.jpg)`;
};

// 버튼 클릭 시 배경 이미지 변경
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
changeBackgroundBtn.addEventListener("click", function () {
  this.classList.add.document.body.style.backgroundImage = `url(./img/bg-${randomNumber}.jpg)`;
});
