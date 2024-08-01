// const students = ["David", "Jullian", "Chole"];

// 일반 for 문
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//forEach 문
// students.forEach((student, index, arr) => {
//   console.log(`${index + 1}번째 학생 : ${student} in [${arr}]`);
// });

// For...of 문
// for (let student of students) {
//   console.log(student);
// }

// for...in 문
// const theBook = {
//   title: "Javascript",
//   pages: 250,
//   published: "2024-07-31",
// };

// for (let key in theBook) {
//   console.log(`${key}`);
// }

let stars = Number(prompt("별의 개수 입력!"));

// while (stars > 0) {
//   document.write("*");
//   console.log("*");
//   stars--;
// }

do {
  document.write("*");
  stars--;
} while (stars > 0);
