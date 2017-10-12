const template = document.querySelector(`template`).content;
const sections = template.querySelectorAll(`.main`);
const mainScreen = document.querySelector(`.app`);

const arrowCodes = {
  rightArrow: 39,
  leftArrow: 37
};

const swipeDirections = [`right`, `left`];

let currentScreenNum = 0;

const changeScreen = (num) => {
  mainScreen.replaceChild(sections[num], mainScreen.firstElementChild);
};

changeScreen(currentScreenNum);


const swipeScreen = (direction) => {
  if (direction === swipeDirections[0] && currentScreenNum < sections.length - 1) {
    currentScreenNum++;
    changeScreen(currentScreenNum);
  } else if (direction === swipeDirections[1] && currentScreenNum > 0) {
    currentScreenNum--;
    changeScreen(currentScreenNum);
  }
};

document.addEventListener(`keydown`, (event) => {
  if (!event.altKey) {
    return;
  } else if (event.altKey && event.keyCode === arrowCodes.rightArrow) {
    swipeScreen(swipeDirections[0]);
  } else if (event.altKey && event.keyCode === arrowCodes.leftArrow) {
    swipeScreen(swipeDirections[1]);
  }
});
