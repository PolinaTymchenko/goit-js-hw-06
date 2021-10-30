let counterValue = 0;

const buttonDecrementEl = document.querySelector("div#counter button[data-action=decrement]");
const buttonIncrementEl = document.querySelector("div#counter button[data-action=increment]");
const value = document.querySelector("#value");

buttonDecrementEl.addEventListener("click", onDecrementButtonClick);
buttonIncrementEl.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function onIncrementButtonClick() {
    counterValue += 1;
    value.textContent = counterValue;
};
