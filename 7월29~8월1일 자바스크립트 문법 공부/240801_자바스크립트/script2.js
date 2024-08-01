// 함수에 반환값으로 함수를 넣을 수 있다는 예제
const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};
// 고차함수
console.log(`${init()(10, 20)}`);

// init(4)(12)(70)(54) = 1002457
