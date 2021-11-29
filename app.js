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
const modal = modalWrapper.querySelector("[js-modal]");

// Object array containing information
const products = [
  {
    name: "clay1",
    info: "Item 1",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay2",
    info: "Item 2",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay3",
    info: "Item 3",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay4",
    info: "Item 4",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay5",
    info: "Item 5",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay6",
    info: "Item 6",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay7",
    info: "Item 7",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay8",
    info: "Item 8",
    img: "./images/clay-item-1.jfif",
  },
  {
    name: "clay9",
    info: "Item 9",
    img: "./images/clay-item-1.jfif",
  },
];

const productsList = products
  .map((element) => {
    return `<div js-grid-item class="item"><img src="${element.img}" alt="${element.name}"><h2>${element.name}</h2></div>`;
  })
  .join("");

productsGrid.innerHTML = productsList;

const productsItem = document.querySelectorAll("[js-grid-item]");

productsItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(index);
    //open modal, populate modal with these values
    modalWrapper.classList.add("active");
    document.querySelector("body").classList.add("modal-active");
    modal.querySelector("[js-modal-label]").innerHTML = products[index].name;
    modal.querySelector("[js-modal-text]").innerHTML = products[index].info;
    modal.querySelector("[js-modal-img]").src = products[index].img;
  });
});

modalWrapper.addEventListener("click", (e) => {
  e.currentTarget.classList.remove("active");
  document.querySelector("body").classList.remove("modal-active");
});
