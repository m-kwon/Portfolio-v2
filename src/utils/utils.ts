export const revealCharacters = [...'░▒▓|'.split('')];
export const ignoreCharacters = [' '];

export const fix100vhInChrome = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};