function setDate() {
    // Use Javascript
    var delayDate = new Date();
    var dd = delayDate.getDate() + 5;
    var mm = delayDate.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = delayDate.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 

    delayDate = yyyy+'-'+mm+'-'+dd;
    document.getElementById("datefield").setAttribute("min", delayDate);
}

function eventFilled() {
    var firstName = document.getElementById("firstName1");
    var lastName = document.getElementById("lastName1");
    var email = document.getElementById("email1");
    var button = document.getElementById("submit1");

    if (firstName.value != "" && lastName.value != "" && email.value != "") {
        button.disabled = false;
    }
}

function expand() {
    var purchaseScreen = document.getElementById("book1");

    purchaseScreen.style.visibility = "visible";
    purchaseScreen.style.height = "auto";
    purchaseScreen.style.opacity = "1";
}

function purchase() {

    sendReceipt();

}

function sendReceipt() {

    var firstName = document.getElementById("firstName1");
    var lastName = document.getElementById("lastName1");
    var tel = document.getElementById("tel1");
    var email = document.getElementById("email1")
    var button = document.getElementById("submit1");
    var eventName = document.getElementById("1").querySelector("#title").innerHTML;


    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : "niyyahfoundation2@gmail.com",
        From : "niyyahfoundation2@gmail.com",
        Subject : "Event Booking",
        Body : "<br>" + firstName.value + " " + lastName.value + " has purchased a ticket for " + eventName + "<br><br>Their phone number: " + tel.value + "<br>Their email address: " + email.value,
        }).then(
            message => alert("Ticket for " + eventName + "has been booked successfully.")
        );

    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : email.value,
        From : "niyyahfoundation2@gmail.com",
        Subject : "Event Booking",
        Body : "<br>" + "Hello, " + firstName.value + " " + lastName.value + ",<br><br>Your ticket for " + eventName + " has been booked successfuly. <br><br>Thank you for purchasing a ticket,<br>Seasonal Nepalese",
        }).then(
            console.log("mail sent to user successfuly")
        );

    firstName.value = "";
    lastName.value = "";
    tel.value = "";
    email.value = "";
        
    button.disabled = true;
    var purchaseScreen = document.getElementById("book1");

    purchaseScreen.style.visibility = "hidden";
    purchaseScreen.style.height = "0";
    purchaseScreen.style.opacity = "0";

}

function filled() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dateField = document.getElementById("datefield");
    var email = document.getElementById("email")
    var button = document.getElementById("submit");

    if (firstName.value != "" && lastName.value != "" && dateField.value != "" && email.value != "") {
        button.disabled = false;
    }

}

function loader() {

    //document.getElementsByClassName("submit").disabled = true;

    var buttons = document.getElementsByClassName("submit");

    for (var i=0, j=buttons.length; i<j; i++) {
        buttons[i].disabled = true;
    }

    console.log("well");
}

function order() {

    sendEmail();
    
}

function sendEmail() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dateField = document.getElementById("datefield");
    var timE = document.getElementById("time");
    var tel = document.getElementById("tel");
    var email = document.getElementById("email")
    var button = document.getElementById("submit");


    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : "niyyahfoundation2@gmail.com",
        From : "niyyahfoundation2@gmail.com",
        Subject : "Event Booking",
        Body : "<br>" + firstName.value + " " + lastName.value + " has requested booking an event for " + dateField.value + " at " + timE.value + ". <br><br>Their phone number is: " + tel.value + "<br>Their email is: " + email.value,
        }).then(
            message => alert("Event booking request has been sent. We will reply to you as soon as possible with confirmation.")
        );

    firstName.value = "";
    lastName.value = "";
    dateField.value = "";
    timE.value = "";
    tel.value = "";
    email.value = "";
        
    button.disabled = true;

}

window.addEventListener("load", event => {setDate(); loader();}, {passive: true});