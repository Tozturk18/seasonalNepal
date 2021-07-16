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

var cart = [];

function addCart(id) {

    var foodCount = 0;

    var food = document.getElementById(id);

    var foodName = food.querySelector("h4").innerHTML;

    cart.push(foodName);

    var counter = food.querySelector("#counter");

    for (var i = 0, j=cart.length; i<j;i++) {
        if (cart[i] == foodName) {
            foodCount++;
        }
    }

    document.getElementById("order").style.background = "rgba(255, 166, 0, 1)";
    document.getElementById("order").style.cursor = "pointer";
    //document.getElementById("order").setAttribute("href", "order.html");

    counter.innerHTML = foodCount;
    counter.style.display = "block";
    food.querySelector("#minus").style.display = "block";

}

function subCart(id) {
    
    var foodCount = 0;
    
    var food = document.getElementById(id);

    var foodName = food.querySelector("h4").innerHTML;

    var counter = food.querySelector("#counter");

    var pos = -1;

    for (var i = 0, j=cart.length; i<j; i++) {
        if (cart[i] == foodName) {
            pos = i;
        }
    }

    if (pos != -1) {
        cart.splice(pos,1);
    }

    for (var i = 0, j=cart.length; i<j;i++) {
        if (cart[i] == foodName) {
            foodCount++;
        }
    }

    counter.innerHTML = foodCount;

    if (foodCount == 0) {

        document.getElementById("order").style.background = "rgba(255, 166, 0, 0.5)";
        document.getElementById("order").style.cursor = "default";
        document.getElementById("order").removeAttribute("href");
        

        counter.style.display = "none";
        food.querySelector("#minus").style.display = "none";
        food.querySelector("#plus").style.display = "block";
    }

}

var userID = 0;

function well() {
    //document.getElementById("order").addEventListener("click", order(), false);

    document.getElementById("order").addEventListener("click", event => {order();}, {passive: false});

    console.log("well");
}

function order() {
    
    var email = cart.toString();
    
    sendEmail(userID, email);

    userID++;
    
}

function sendEmail(userID, email) {

    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : "niyyahfoundation2@gmail.com",
        From : "niyyahfoundation2@gmail.com",
        Subject : "Food Order" + userID,
        Body : email,
        }).then(
            message => alert("mail sent successfully")
        );

}

window.addEventListener("load", event => {well();}, {passive: true}); 