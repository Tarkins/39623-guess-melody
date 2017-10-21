import welcomeScreen from './welcomeScreen';
import changeScreen from './changeScreen';

const mainScreen = document.querySelector(`.app`);

changeScreen(welcomeScreen);

export {mainScreen};
