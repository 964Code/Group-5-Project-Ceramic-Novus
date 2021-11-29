// ------------------- NAVBAR JS -------------------------------------
const toggleButton = document.querySelectorAll(".toggle-button")[0];
const navbarLinks = document.querySelectorAll(".navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// ----------------- NAVBAR JS END -----------------------------------

// Product-page JS.

const productsGrid = document.querySelector(".products-grid");

const products = [
  {
    name: "clay1",
    info: "adasdsadasdasdasdas asda sas das das d",
  },
  {
    name: "clay2",
    info: "adasdsadasdasdasdas asda sas das das d",
  },
  {
    name: "clay3",
    info: "adasdsadasdasdasdas asda sas das das d",
  },
];

const productsList = products.map((element) => {
  return `<a class="item">${element.name}</a>`;
});

productsGrid.innerHTML = productsList;
