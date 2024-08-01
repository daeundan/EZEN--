const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS ex.3");

if (subject !== null) {
  switch (subject) {
    case "1":
      alert("HTML을 신청하셨습니다!");
      break;
    case "2":
      alert("CSS를 신청하셨습니다!");
      break;
    case "3":
      alert("JS를 신청하셨습니다!");
      break;
    default:
      alert("잘못 입력하셨습니다. 1,2,3번 중 입력해주세요");
  }
}
