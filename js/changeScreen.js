import {mainScreen} from './main.js';

export const changeScreen = (screenTitle) => {
  mainScreen.replaceChild(screenTitle, mainScreen.firstElementChild);
};

export default changeScreen;
