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
        } else if (270 < yOffset && yOffset <= 1111) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "<span id=\"current\"><b>ABOUT</b></span>";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (1111 < yOffset && yOffset < 2356) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "<span id=\"current\"><b>MENU</b></span>";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (2356 <= yOffset && yOffset < 2588) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "<span id=\"current\"><b>EVENTS</b></span>";
        } else {
            console.log("out of boundaries");
        }

    } else {
        if (0 <= yOffset && yOffset < 250) {
            document.getElementById("navHome").innerHTML = "<span id=\"current\"><b>HOME</b></span>";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (250 <= yOffset && yOffset < 1080) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "<span id=\"current\"><b>ABOUT</b></span>";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (1080 <= yOffset && yOffset <= 2108) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "<span id=\"current\"><b>MENU</b></span>";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "EVENTS";
        } else if (2108 < yOffset && yOffset < 2588) {
            document.getElementById("navHome").innerHTML = "HOME";
            document.getElementById("navAbout").innerHTML = "ABOUT";
            document.getElementById("navMenu").innerHTML = "MENU";
            document.getElementById("navOrder").innerHTML = "ORDER & CONTACT";
            document.getElementById("navEvent").innerHTML = "<span id=\"current\"><b>EVENTS</b></span>";
        } else {
            console.log("out of boundaries");
        }
    }
    

}

window.addEventListener("wheel", event => {setScroll(event.deltaY)}, false);