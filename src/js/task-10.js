const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const creatBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

inputEl.addEventListener("input", onInputValue);
creatBtnEl.addEventListener("click", onBtnCreate);
destroyBtnEl.addEventListener("click", onBtnDestroy);

function onInputValue() {
  return inputEl.value;
}

// const color = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnCreate() {
  const numberOfBoxes = onInputValue();
  const boxesArr = [];
  for (let i = 1, k = 30; i <= numberOfBoxes; i += 1, k += 10) {
      let boxEl = document.createElement("div");
      boxEl.style.width = `${k}px`;
      boxEl.style.height = `${k}px`;
      boxEl.style.border = "1px";
      boxEl.style.borderColor = "black";
      boxEl.style.borderStyle = "solid";
      boxEl.style.backgroundColor = getRandomHexColor();
      boxesArr.push(boxEl);
  };
  boxesEl.append(...boxesArr);
}

function onBtnDestroy() {
  while (boxesEl.firstChild) {
  boxesEl.removeChild(boxesEl.firstChild);
}
}

