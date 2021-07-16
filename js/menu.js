var loca;
var cart = [];
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
    document.getElementById("order").setAttribute("href", "order.html");

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

function addLocation(id) {

    var truck = document.getElementById(id);
    loca = truck.querySelector("h3").innerHTML;
    truck.querySelector(".explanation").style.background = "green";

    var trucks = document.getElementsByClassName("truck");
    for (var i = 0, j=trucks.length; i<j; i++) {
        if (trucks[i].querySelector(".explanation").style.background == "green" && i+1 != id) {
            trucks[i].querySelector(".explanation").style.background = "rgba(0,0,0,0.8)";
        }
    }

    document.getElementById("order2").disabled = false;
    document.getElementById("order2").style.background = "rgba(255, 166, 0, 1)";
    document.getElementById("order2").style.cursor = "pointer";

}

function casheCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

var userID = 0;

function well() {
    //document.getElementById("order").addEventListener("click", order(), false);

    document.getElementById("order2").addEventListener("click", event => {order();}, {passive: false});
    document.getElementById("order2").disabled = true;

    console.log("well");
}

function order() {

    var trucks = document.getElementsByClassName("truck");
    for (var i = 0, j=trucks.length; i<j; i++) {
        trucks[i].querySelector(".explanation").style.background = "rgba(0,0,0,0.8)";
    }

    var foods = document.getElementsByClassName("item");

    //var foodsTitle = foods.querySelector("h4").innerHTML;

    for (var i = 0, k=foods.length; i<k; i++) {
        for (var j = 0, t=cart.length; j<t; j++) {
            var title = foods[i].querySelector("h4").innerHTML;
            if (title == cart[j]) {
                foods[i].querySelector("#counter").innerHTML = 0;
                foods[i].querySelector("#counter").style.display = "none";
                foods[i].querySelector("#minus").style.display = "none";
                foods[i].querySelector("#plus").style.display = "block";
            }
        }
    }

    var newCart = JSON.parse(sessionStorage.getItem("cart"));

    var email = newCart.toString();

    cart = [];
    
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
        Subject : "Food Order: " + userID + " | Location: " + loca,
        Body : email,
        }).then(
            message => alert("Order sent successfully. Your order number is: " + userID)
        );

}

window.addEventListener("load", event => {well();}, {passive: true}); 