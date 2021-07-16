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