const body = document.body;
const switchButton = document.getElementById("switch-button");
const switchParagraph = document.getElementById("switch-paragraph");

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function handleSwitchButton() {
  let colorRed = getRandomNumber();
  let colorGreen = getRandomNumber();
  let colorBlue = getRandomNumber();
  const colorString = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
  body.style.backgroundColor = colorString;
  switchParagraph.innerText = colorString;
}

switchButton.addEventListener("click", handleSwitchButton);
