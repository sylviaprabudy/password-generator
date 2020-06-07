// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {

//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;

//}

// Create funstions for each criterias
function getRandomSpecial() {
    var special = "!@#$%^&*(){}[]<>-=_+/?"
    return special[Math.floor(Math.random() * special.length)];
}

// Get fromCharCode from Character Set http://net-comber.com/charset.html
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


var choices;

// Generate password function starts here
function generatePassword() {
    // Ask user how many characters of password they want to generate
    var passwordLength = window.prompt("How many characters would you like your password to contain? It has to be between 8 - 128 characters.")

    // Check if the answer meets the requirement
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        window.alert("Please enter a valid answer. It has to be between 8 to 128.");
        generatePassword();
    } else {
        // Ask if user want to include any of these criterias
        var specialChar = window.confirm("Click OK to confirm including special characters.")
        var numericChar = window.confirm("Click OK to confirm including numeric characters.")
        var lowerCaseChar = window.confirm("Click OK to confirm including lowercase characters.")
        var upperCaseChar = window.confirm("Click OK to confirm including uppercase characters.")
    };

    // If user didn't choose any criterias 
    if (!specialChar && !numericChar && !lowerCaseChar && !upperCaseChar) {
       choices = window.alert("You must choose at least one criteria.");
    } 
    
    // User chose all 4 criterias
    else if (specialChar && numericChar && lowerCaseChar && upperCaseChar) {
        choices = getRandomSpecial.concat(getRandomNumber, getRandomLower, getRandomUpper);
    };


    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection 
    for (var i = 0; i < passwordLength; i++) {
        var passwordChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(passwordChoices);
    }
   

};


generatePassword();




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
