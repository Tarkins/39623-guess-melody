import {mainScreen} from './main.js';

const changeScreen = (screenTitle) => {
  mainScreen.replaceChild(screenTitle, mainScreen.firstElementChild);
};

export default changeScreen;
