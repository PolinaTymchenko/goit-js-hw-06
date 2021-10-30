const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onNameInput);

function onNameInput() {
    nameOutputEl.textContent = nameInputEl.value;
    if (nameInputEl.value === "") {
        nameOutputEl.textContent = "Anonymous";
    };
};



