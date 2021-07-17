var loca;
var locaSelected = false;

var firstName;
var lastName;
var email;

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

    locaSelected = true;

}

function loader() {

    document.getElementById("order2").disabled = true;

    console.log("well");
}

function order() {

    var userID = 0;

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

    var newCart = [];
    var newCart = JSON.parse(sessionStorage.getItem("cart"));
    sessionStorage.removeItem("cart");

    var emailContent = newCart.toString() + "<br><br> Order from: " + firstName + " " + lastName;

    var userEmail = document.getElementById("email").value;

    cart = [];

    userID = setUserID();
    
    sendEmail(userID, emailContent, userEmail);

    userID++;
    
}

function sendEmail(userID, emailContent, userEmail) {

    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : "niyyahfoundation2@gmail.com",
        From : "niyyahfoundation2@gmail.com",
        Subject : "Food Order: " + userID + " | Location: " + loca,
        Body : emailContent,
        }).then(
            message => alert("Order sent successfully. Your order number is: " + userID + "\n\n The receipt has been sent to your email. Thank you for your purcahse!")
        );

    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : userEmail,
        From : "niyyahfoundation2@gmail.com",
        Subject : "Food Order: " + userID + " | Location: " + loca,
        Body : emailContent,
        }).then(
            console.log("receipt has been sent to the user")
        );

    document.getElementById("order2").disabled = true;

}

window.addEventListener("load", event => {loader();}, {passive: true}); 



function filled() {

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;

    if (firstName != "" && lastName != "" && email != "" && locaSelected) {
        document.getElementById("order2").disabled = false;
        document.getElementById("order2").style.background = "whitesmoke";
        document.getElementById("order2").style.cursor = "pointer";
    }
    
}

function setUserID() {

    var date = new Date();
    var userIDs = parseInt(date.getUTCDate().toString() + date.getUTCHours().toString() + date.getUTCMinutes().toString());

    return userIDs

}