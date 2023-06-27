const output = document.querySelector(".output");
const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", changeColor);

function changeColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const color = event.target.dataset.color;
  output.textContent = `Selected color: ${color}`;
  output.style.color = color;
}

createColor();

function createColor() {
  const buttonElArray = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.dataset.color = color;
    buttonEl.style.backgroundColor = color;
    buttonEl.classList.add("item");
    buttonElArray.push(buttonEl);
  }

  colorPalette.append(...buttonElArray);
}
function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
