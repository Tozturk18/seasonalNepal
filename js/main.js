var buttonPressed = false;

function addBorder() {
    if (!buttonPressed) {
        document.getElementById('title').style.borderBottom = "1px solid rgba(211, 211, 211, 0.185)";
        buttonPressed = true;
    } else {
        document.getElementById('title').style.borderBottom = "";
        buttonPressed = false;
    }
    
}

function setCurrent(key) {

    switch (key) {
        case 1:
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "<span id=\"current\"><b>ABOUT</b></span>";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
            break;

        case 2:
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "<span id=\"current\"><b>MENU</b></span>";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
            break;

        case 3:
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "<span id=\"current\"><b>ORDER & CONTACT</b></span>";
            document.getElementById("navEvent").innerHTML = "EVENTS";
            break;

        case 4:
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "<span id=\"current\"><b>EVENTS</b></span>";
            break;
    
        default:
            document.getElementById("navHome").innerHTML = "<span id=\"current\"><b>HOME</b></span>";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
            break;
    }

}

function setScroll(deltaY) {
    var yOffset = window.pageYOffset;
    console.log(yOffset);
    console.log(deltaY);

    if (deltaY < 0) {

        if (0 <= yOffset && yOffset <= 270) {
            document.getElementById("navHome").innerHTML = "<span id=\"current\"><b>HOME</b></span>";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (270 < yOffset && yOffset <= 614) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "<span id=\"current\"><b>ABOUT</b></span>";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else {
            console.log("fuck");
        }

    } else {
        if (0 <= yOffset && yOffset < 250) {
            document.getElementById("navHome").innerHTML = "<span id=\"current\"><b>HOME</b></span>";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (250 <= yOffset && yOffset <= 614) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "<span id=\"current\"><b>ABOUT</b></span>";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else {
            console.log("fuck");
        }
    }
    

}

window.addEventListener("wheel", event => {setScroll(event.deltaY)}, false);


const prev  = document.querySelector('.prev');
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
})