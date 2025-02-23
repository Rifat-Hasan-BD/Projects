const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn1El = document.getElementById("password-btn-1");
let btn2El = document.getElementById("password-btn-2");

function generatePassword() {
    let passwordOne = "";
    let passwordTwo = "";

    for (let i = 0; i <= 15; i++) {
        passwordOne += getRandomChar()
        passwordTwo += getRandomChar()
    }
    btn1El.textContent = passwordOne;
    btn2El.textContent = passwordTwo;
}

function getRandomChar() {
    let randomCharIndex = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomCharIndex];

    return randomChar;
}

function copyText(button) {
    // Get the button text
    const textToCopy = button.innerText;

    // Get the button ID
    const buttonId = button.id;

    let pID = "";

    if (buttonId === "password-btn-1") {
        pID = "p-one";
    } else if (buttonId === "password-btn-2") {
        pID = "p-two";
    }

    // Copy text to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        document.getElementById(pID).innerText = "Copy!";

        // Clear the message after 2 seconds
        setTimeout(() => {
            document.getElementById(pID).innerText = "";
        }, 2000);

    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}