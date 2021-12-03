/* Shop page */

/* Class for product objects */
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
let names = ['Liten oval tallrik', 'Rundad lerskål', 'Ostbräda', 'Stor frukostskål', 'Liten mjölkkanna i stengods', 'Grönglaserad skål', 'Grön glaserad kopp', 'Kaffekopp i stengods', 'Liten vas i stengods'];
let info = ['En tallrik som passar perfekt för plockmat.', 'En lerskål för snacks.', 'En elegant ostbrädda i mjuka färger.', 'En skål som blir fin till frukosten eller glass.', 'En liten kanna som kan servera både mjölk och vatten.', 'En fin grönglaserad skål som blir fin till efterrätter på middagar.', 'En kopp som blir perfekt till fikat på eftermiddagen när det ska serveras te och kaffe.', 'En brun kaffekopp i stengods som man ser fram emot att dricka kaffe i.', 'En liten vas i stengods för de första blommorna i maj.'];

let ceramics = [];

/* for loop to create objects */
for (let i = 0; i < 9; i++) {
  ceramics.push(new Ceramic(names[i], info[i]));
}

/* end of shop page */


/* Expandable sidebar  */


const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
  document.getElementById("sidebarmenu-list").style.height = "2000px";

}

navButton.addEventListener('click', toggleNav);


/* Zoom on each product image on products pages */

var addZoom = function (target) {
  // get container and image
  var container = document.getElementById(target),
    imgsrc = container.currentStyle || window.getComputedStyle(container, false),
    imgsrc = imgsrc.backgroundImage.slice(5, -1).replace(/"/g, ""),
    img = new Image();

  // load image and attach zoom
  img.src = imgsrc;
  img.onload = function () {
    var imgWidth = img.naturalWidth,
      imgHeight = img.naturalHeight,
      ratio = imgHeight / imgWidth,
      percentage = ratio * 100 + '%';

    // zoom when the mouse moves
    container.onmousemove = function (e) {
      var boxWidth = container.clientWidth,
        rect = e.target.getBoundingClientRect(),
        xPos = e.clientX - rect.left,
        yPos = e.clientY - rect.top,
        xPercent = xPos / (boxWidth / 100) + "%",
        yPercent = yPos / ((boxWidth * ratio) / 100) + "%";

      Object.assign(container.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: imgWidth + 'px'
      });
    };

    // reset when the mouse leaves the pictures
    container.onmouseleave = function (e) {
      Object.assign(container.style, {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      });
    };
  }
};

window.addEventListener("load", function () {
  addZoom("zoom-img");
});

/* Carousel/slideshow on presentation page */

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 7000);
}


