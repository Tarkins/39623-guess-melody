const template = document.querySelector(`template`).content;
const sections = template.querySelectorAll(`.main`);
const mainScreen = document.querySelector(`.app`);

let currentScreenNum = 0;

const changeScreen = (num) => {
  mainScreen.replaceChild(sections[num], mainScreen.firstElementChild);
};

changeScreen(currentScreenNum);


const swipeScreen = (direction) => {
  if (direction === `right` && currentScreenNum < sections.length - 1) {
    currentScreenNum++;
    changeScreen(currentScreenNum);
  } else if (direction === `left` && currentScreenNum > 0) {
    currentScreenNum--;
    changeScreen(currentScreenNum);
  }
};

document.addEventListener(`keydown`, (key) => {
  if (!key.altKey) {
    return;
  } else if (key.altKey && key.keyCode === 39) {
    swipeScreen(`right`);
  } else if (key.altKey && key.keyCode === 37) {
    swipeScreen(`left`);
  }
});
