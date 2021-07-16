/*const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})*/

var counter = 2;

function opace() {
  var items = document.getElementsByClassName("item");

  items[0].style.opacity = "0.7";
  items[1].style.opacity = "1";
  items[2].style.opacity = "0.7";
}

function scrollLeft() {
  var items = document.getElementsByClassName("item");

  console.log(items[0].id);
  var temp = items[items.length - 1];
  document.getElementById("inner").insertBefore(temp, items[0]);
  temp.id = 1;

  for (var i = 1; i < items.length; i++) {
    items[i].id = parseInt(items[i].id) + 1;

    if (items[i].id > 3) {
      items[i].style.display = "none";
    } else {
      items[i].style.display = "block";
    }
  }

  if (counter > 1) {
    counter--;
    var prevSpan = document.getElementById(counter+1 + "span");
  } else {
    counter = 5;
    var prevSpan = document.getElementById(1 + "span");
  }

  var span = document.getElementById(counter + "span");

  prevSpan.style.color = "lightgray";
  span.style.color = "lightblue";
  
  items[0].style.display = "block";

  opace();
}

function scrollRight() {
  var items = document.getElementsByClassName("item");

  console.log(items[4].id);
  var temp = items[0];
  document.getElementById("inner").appendChild(temp);
  temp.id = 5;

  for (var i = 0; i < items.length - 1; i++) {
    items[i].id = parseInt(items[i].id) - 1;

    if (items[i].id > 3) {
      items[i].style.display = "none";
    } else {
      items[i].style.display = "block";
    }
  }

  if (counter < 5) {
    counter++;
    var prevSpan = document.getElementById(counter-1 + "span");
  } else {
    counter = 1;
    var prevSpan = document.getElementById(5 + "span");
  }

  var span = document.getElementById(counter + "span");

  

  prevSpan.style.color = "lightgray";
  span.style.color = "lightblue";

  temp.style.display = "none";

  opace();
}

function pointers() {

  opace();

  var items = document.getElementsByClassName("item");

  var pointer = document.querySelector("#pointer");

  for (var i = 1; i <= items.length; i++) {
    var temp = document.createElement("span");
    temp.id = i + "span";
    temp.className = "pointers"
    temp.innerHTML = "-"
    pointer.appendChild(temp);
  }

  var span = document.getElementById(counter + "span");

  span.style.color = "lightblue";
}

document.getElementById("right").addEventListener("click", scrollRight, false);
document.getElementById("left").addEventListener("click", scrollLeft, false);

window.addEventListener(
  "load",
  (event) => {
    pointers();
  },
  { passive: true }
);
