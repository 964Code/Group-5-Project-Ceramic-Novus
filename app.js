// ------------------- NAVBAR JS -------------------------------------
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// ----------------- NAVBAR JS END -----------------------------------

// Product-page JS.
// Variables declared for targeting specific elements.
if (document.querySelector(".products-grid")) {
  const productsGrid = document.querySelector(".products-grid");
  const modalWrapper = document.querySelector(".modal-wrapper");
  const modal = modalWrapper.querySelector("[js-modal]");

  // Object array containing information about products.
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

  // Variable containing HTML-elements. Map-function returnes value, in this case a div for each index in products array.
  const productsList = products
    .map((element) => {
      return `<div js-grid-item class="item"><img src="${element.img}" alt="${element.name}"><h2>${element.name}</h2></div>`;
    })
    .join("");
  // Join had to be added so no characters get inbetween. W/o join all elements would follow with a ",", quirk of JS?

  //productsGrid inner HTML becomes the result of the array-function above.
  productsGrid.innerHTML = productsList;

  // Selects and saves all the new DOM-elements created above in a array.
  const productsItem = document.querySelectorAll("[js-grid-item]");

  // forEach array/item add a click-event listener.
  productsItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      console.log(index);
      //open modal, populate modal with these values

      //ModalWrapper is hidden by default with display:none. This adds class active which has display:block, makes it visable.
      modalWrapper.classList.add("active");
      //Modal-active has overflow hidden, no scrolling along y-axis.
      document.querySelector("body").classList.add("modal-active");
      // Outputs information on the modal from the array products with the right index which we get when clicking item.
      modal.querySelector("[js-modal-label]").innerHTML = products[index].name;
      modal.querySelector("[js-modal-text]").innerHTML = products[index].info;
      modal.querySelector("[js-modal-img]").src = products[index].img;
    });
  });

  modalWrapper.addEventListener("click", () => {
    // Hides modal.
    modalWrapper.classList.remove("active");
    // Removes active class that hinders scrolling along y-axis
    document.querySelector("body").classList.remove("modal-active");
  });
}
