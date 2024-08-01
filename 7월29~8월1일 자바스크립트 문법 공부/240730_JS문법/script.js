// const jsBookTitle = jsBook.title;
// console.log(jsBookTitle);

// const jsBookPages = jsBook["pages"];
// console.log(jsBookPages);

// jsBook.title = "천국에서 온 깃허브";
// console.log(typeof jsBook);

// const arr = ["red", "green", "blue"];

// console.log(arr[arr.length - 1]);

// let test01 = Symbol();
// let test02 = Symbol();

// console.log(test01 === test02);

// let id = Symbol();

// const member = {
//   name: "David",
//   [id]: 12345,
// };

// console.log(member);

// const fncTest = () => {
//   console.log("click");
// };

// let a = 10;
// let b = a;

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;

// b = 15;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];
// const favorite = [...fruits]; //전개연산자 구문 사용하면 원본 데이터 안바뀜

// favorite[1] = "orange";

// console.log(fruits);

// const one = "20";
// const two = 10;

// const sum = one + two;

// Single-thereaded 방식 비동기처리 방식 사용방법 = setTimeout
// console.log("시작");

// // 비동기 함수 호출
// setTimeout(() => {
//   console.log("비동기 작업 완료");
// }, 1000);

// console.log("끝");

// String 의도적 문자의 형태로 변환하는 방법

// console.log(parseFloat("36.4"));

// console.log(parseFloat(36.4));

// const num = null;

// console.log(typeof num.toString());

// console.log(typeof String(num));

// console.log(Boolean("Hi!"));

//사용자의 값을 반영하기 위해 팝업창 띄우는 기능
const number = prompt("자연수를 입력해주세요!");

console.log(number);
//사용자가 넣은 값은 변수에 보관해야함
//사용자가 입력한 값을 number 에 넣겠다
