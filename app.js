// ------------------- NAVBAR JS -------------------------------------
const toggleButton = document.querySelectorAll(".toggle-button")[0];
const navbarLinks = document.querySelectorAll(".navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// ----------------- NAVBAR JS END -----------------------------------

// Product-page JS.

const productsGrid = document.querySelector(".products-grid");
const modalWrapper = document.querySelector(".modal-wrapper");

// Object array containing information
const products = [
  {
    name: "clay1",
    info: "test",
    img: "./images/clay-item-1.jfif",
  },
];

const productsList = products
  .map((element) => {
    return `<div js-grid-item class="item"><img js-grid-item-img src="${element.img}" alt="${element.name}"><h2 js-grid-item-label>${element.name}</h2><p js-grid-item-text>${element.info}</p></div>`;
  })
  .join("");

productsGrid.innerHTML = productsList;

const productsItem = document.querySelectorAll("[js-grid-item]");

productsItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    let image = item.querySelector("[js-grid-item-img]").src;
    let label = item.querySelector("[js-grid-item-label]").innerHTML;
    let text = item.querySelector("[js-grid-item-text]").innerHTML;

    //open modal, populate modal with these values
    console.log(image, label, text);
    modalWrapper.classList.add("active");
  });
});

modalWrapper.addEventListener("click", (e) => {
  e.currentTarget.classList.remove("active");
});
