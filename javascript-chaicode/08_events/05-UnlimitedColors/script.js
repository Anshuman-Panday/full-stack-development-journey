// generate a random color

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = () => {
  const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  // function changeColorImmediate() {
  //   changeBgColor();
  // }
  // changeColorImmediate();
  intervalId = setInterval(changeBgColor, 1000);
  return intervalId;
};
const stopChangingColor = () => {
  clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
