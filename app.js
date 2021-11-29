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
    info: "test",
    img: "./images/clay-item-1.jfif",
  },
];

const productsList = products
  .map((element) => {
    return `<div class="item"><img src="${element.img}" alt="${element.name}"><h2>${element.name}</h2><p>${element.info}</p></div>`;
  })
  .join("");

productsGrid.innerHTML = productsList;
