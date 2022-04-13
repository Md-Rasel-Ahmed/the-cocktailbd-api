let searchField = document.querySelector("#searchField");
let allProducts = document.querySelector(".allProducts");
const loadDrinks = () => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchField.value}`
  )
    .then((res) => res.json())
    .then((data) => displayDrinks(data.drinks));
};
const displayDrinks = (data) => {
  allProducts.textContent = "";
  console.log(data);
  data.forEach((drink) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img onclick="ingridiance('${drink.strIngredient2}')" src="${drink.strDrinkThumb}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${drink.strDrink}</h5>
        </div>
    </div>
    `;
    allProducts.appendChild(div);
  });
};
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadDrinks();
});
const ingridiance = (name) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
let obj1 = {
  name: "rasel",
  age: 21,
  gf: "nahida",
  father: "hasan",
};
let obj2 = {
  name: "rasel",
  age: "21",
  gf: "nahida",
  father: "hasan",
};

let r = ``;
let n = ``;
for (const key in obj1) {
  r += key + obj1[key];
}
for (const key in obj2) {
  n += key + obj2[key];
  // n += obj2;
}
console.log(r === n);
// console.log(n);
// let re = new Set([...r, ...n]);
// console.log(re);
// let emty = "";
// for (let i = 0; i < r.length; i++) {
//   const element = r[i];
//   console.log(r[i]);
//   emty += r[i];
// }
// console.log(emty);
