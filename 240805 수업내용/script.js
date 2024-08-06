window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollwidth = hashContent.clientWidth + 200;

// console.log(hashContent);

// 최초 터치 및 마우스 다운 지점 의미
let startX = 0;

// 현재 이동중인 지점
let nowX = 0;

// 터치가 종료되는 지점
let endX = 0;

// 두번째 터치 시작되는 지점
let listX = 0;

const getClientX = (e) => {
  //   const isTouches = e.touches ? true : false;
  //   return isTouches ? e.touches[0].clientX : e.clientX;
  return e.touches ? e.touches[0].clientX : e.clientX;
};
// 보이지 않는 곳으로 빠졌지만 우리가 바라보는 매체 너비는 불변하기 때문에
// 
const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollwidth) {
    setTranslateX(listClientWidth - listScrollwidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollwidth;
  }
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchend", onScrollMove);
  window.removeEventListener("mouseup", onScrollMove);
  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

const onScrollstart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mounsemove", onScrollMove);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
