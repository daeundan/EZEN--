// 콜백함수

// CB.1
// count 재할당
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
// }; // 함수호출

// cbFunc(); //함수선언

// setInterval(cdFunc, 300);

// const timerId = setInterval(func: code[, delay, param1, param2, ...]);

// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (++count > 100) clearInterval(timer);
// };

// const timer = setInterval(cbFunc, 300);

// CB.2 JS에서 자주 만날 콜백함수 2번 예제
// Map !!!!
// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => {
//   item + 5;
//   console.log(item, index);
// });

// console.log(newArr);

// 위 처럼 쓰지 않고 이렇게 써야함 간단하게!!
// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => item + 5);
// console.log(newArr);

// index도 값을 줄 수 있음!!
// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => (item + 5) * index);
// console.log(newArr);

// CB.3 JS에서 자주 만날 콜백함수 3번 예제
// setTimeout(function () {
//   console.log("click");
// }, 300);

// this 객체 함수 실행하는 주체가 누구야!? window 임.
// setTimeout(function () {
//   console.log(this);
// }, 300);

// CB.4 JS에서 자주 만날 콜백함수 4번 예제
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(item);
// }); // map 처럼 반환할 의무가 없기 떄문에 중괄호 사용 {}
//console.log(this)쓰면 window가 나옴.. 내가 원하는건 1,2,3,4,5인데
// 그래서 다들 this 객체를 어려워함
// 일반적인 콜백함수 내에서 주체가 되는 item을 찾아오고 싶을 때에는
// 직접 해당 인수(인자값)를 언급하거나 경우에 따라 this 객체 사용함.

// CB.5 JS에서 자주 만날 콜백함수 5번 예제
// document.body.innerHTML += `<h5>버튼을 클릭해보세요</h5><button id="a">Click Me</button>`;
// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });

// CB.6 JS에서 자주 만날 콜백함수 6번 예제
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();
// console창에는 부모격인 "vals" 객체를 찾아옴

// const obj = {
//   vals: [1, 2, 3],
//   logValues: () => {
//     console.log(this);
//   },
// };

// obj.logValues();
// 화살표 함수 사용하면 consol창에 window 찾아옴

// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);
// 객체 안에 매서드 형식으로 정의한 함수는 외부에 별도 존재하는 함수의 콜백함수로 사용할 시,
// 기존 객체와의 관계성이 제거됨(console창에 window가 나오는 것)

// 대안 ) 객체를 통해서 탄생된 매서드 함수이더라도 콜백함수로 사용하고자 할 때
//      해당요소의 부모를 찾아올 수 있는 방법

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//     // console.log(this);
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000);

// 위보다 간결하게 작성하는 방법!(더 효율적 this 객체 사용 방법)

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };
// bind 함수(바인딩) : 부모요소 유지시키면서 콜백함수에서 쓰고싶을 떄 사용
// setTimeout(obj1.func.bind(obj1), 1000);

// setTimeout(
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(
//       (name) => {
//         coffeeList += `, ${name}`;
//         console.log(coffeeList);
//         setTimeout(
//           (name) => {
//             coffeeList += `, ${name}`;
//             console.log(coffeeList);
//             setTimeout(
//               (name) => {
//                 coffeeList += `, ${name}`;
//                 console.log(coffeeList);
//               },
//               500,
//               "카페라떼"
//             );
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );

// 콜백지옥 빠져나오는 방법
// 1번
// let coffeeList = "";

// const addLatte = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
// };

// const addMocha = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addLatte, 500, "카페라떼");
// };

// const addAmericano = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addMocha, 500, "카페모카");
// };

// const addEspress = (name) => {
//   coffeeList = name;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };

// setTimeout(addEspress, 500, "에스프레소");

// 2번 : promise() => 클래스로 선언되었을 때

// new Promise(); //클래스로 생성된 프로토타입의 함수임

// let likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문하겠습니다.");
//   } else {
//     reject("피자를 주문하지 않겠습니다.");
//   }
// });

// pizza.then((result) => {
//   console.log(result);
// });

new Promise((resolve) => {
  setTimeout(() => {
    const name = "단단단";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 자바스크립트`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 화이팅`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
