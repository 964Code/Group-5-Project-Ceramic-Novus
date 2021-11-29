
/* CLass for product objects */
class Ceramic {
  constructor(name, info) {
    this.name = name;
    this.info = info;
  }

  /* toString method to return information about products */
  toString() {

    return ('<h1>' + this.name + '</h1>' + '<br>' + '<p>' + this.info + '</p>');

  }
}

/* Arrays for object properties */
let names = ['Pitcher', 'Rounded Clay Pots', 'Small Green Plate', 'Small Dessert Plates', 'Green Tea Mug', 'Natural Fruit Plate', 'Glazed Vase', 'High Pot', 'Deep Plate'];
let info = ['A beautifully glazed pitcher in naturally colored clay in a classical antique shape.', 'Smaller circular pots with lids with practical handles. Created in dark, unglazed clay with a natural and comfortable shape.', 'Classic circular small plate. Glazed in a beautiful natural deep green nuance with darker color shiftings.', 'Small circular dessert plates in a playfully natural shape. Perfected with a shiny glaze in a natural color with darker nuances.', 'Big tea mug in a heartily rounded shape with a big ergonomical handle that fits nicely in your hand. Glazed in a beautiful natural deep green color.', 'A fruit plate as natural as the fruit to be placed in it, designed in a playfully natural rounded shape. Created in a naturally colored clay left matt unglazed.', 'A beautiful vase in a classical antique design and shape. Created in naturally colored clay with darker nuances and playfully glazed half way, leaving the bottom half matt.', 'A high and slim pot with a practical lid with a handle. Created in a naturally colored clay creatively glazed with a darker nuance in darker patches.', 'A classic circular deep plate in a soft shape. Glazed in a shiny natural deep green nuance with beautiful darker nuances shining through in the bottom.'];

let ceramics = [];

/* for loop to create objects */
for (let i = 0; i < 9; i++) {
  ceramics.push(new Ceramic(names[i], info[i]));
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidenav").style.top = "64px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}


 Set the width of the side navigation to 0 and the left margin of the page content to 0
function closeNav() {
  document.getElementById("menu-list").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";

}*/



