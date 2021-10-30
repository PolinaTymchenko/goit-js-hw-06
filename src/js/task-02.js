const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const makeIngredientsList = items => {
  return items.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    itemEl.classList.add("item");
    return itemEl;
  });
};

const elements = makeIngredientsList(ingredients);
listEl.append(...elements);
