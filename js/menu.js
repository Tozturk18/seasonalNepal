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

function casheCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function filled() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var text = document.getElementById("text");
    var button = document.getElementById("submit");

    if (firstName.value != "" && lastName.value != "" && email.value != "" && text.value != "") {
        button.disabled = false;
    }

}

function loader() {

    document.getElementById("submit").disabled = true;

    console.log("well");
}

function order() {

    sendEmail();
    
}

function sendEmail() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var text = document.getElementById("text");
    var button = document.getElementById("submit");


    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : "niyyahfoundation2@gmail.com",
        From : "niyyahfoundation2@gmail.com",
        Subject : "Contacted by " + firstName.value,
        Body : "<br>" + firstName.value + " " + lastName.value + " has contacted us. <br><br>Their email is: " + email.value + "<br>Their message is: <br><br>" + text.value,
        }).then(
            message => alert("Thank you for contacting us. We will reply to your message as soon as possible. Have a great day!")
        );

    firstName.value = "";
    lastName.value = "";
    text.value = "";
    email.value = "";
        
    button.disabled = true;

}

window.addEventListener("load", event => {loader();}, {passive: true});