const navEl = document.querySelector("#categories");
const allItemsEl = navEl.querySelectorAll(".item");
console.log(`Number of categories: ${allItemsEl.length}`);

allItemsEl.forEach((element) => {
    const headingsEl = element.querySelector("h2");
    console.log(`Category: ${headingsEl.textContent}`);
    
    const categoryItemsEl = element.querySelectorAll("li");
    console.log(`Elements: ${categoryItemsEl.length}`);
});