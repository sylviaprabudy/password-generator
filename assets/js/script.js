
//var password = generatePassword();
var passwordText = document.querySelector("#password");

// Generate Password CTA
var generateBtn = document.querySelector("#generate");

// Create functions for each criterias
function getRandomSpecial() {
    var special = "!@#$%^&*(){}[]<>=-_+/?~";
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

var passCriterias;

// Write password to the #password input
function writePassword() {
    // Ask user how many characters of password they want to generate
    var passwordLength = window.prompt(
        "How many characters would you like your password to contain? It has to be between 8 - 128 characters."
    );

    // Check if the answer meets the requirement
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        window.alert("Please enter a valid answer. It has to be between 8 to 128.");
        writePassword();
    } else {
        // Ask if user want to include any of these criterias
        var specialChar = window.confirm(
            "Click OK to confirm including special characters."
        );
        var numericChar = window.confirm(
            "Click OK to confirm including numeric characters."
        );
        var lowerCaseChar = window.confirm(
            "Click OK to confirm including lowercase characters."
        );
        var upperCaseChar = window.confirm(
            "Click OK to confirm including uppercase characters."
        );
    }

    // If user didn't choose any criterias
    if (!specialChar && !numericChar && !lowerCaseChar && !upperCaseChar) {
        passCriterias = alert("You must choose at least one criteria.");
    }

    // User chose all 4 criterias
    else if (specialChar && numericChar && lowerCaseChar && upperCaseChar) {
        passCriterias += getRandomSpecial() + getRandomNumber() + getRandomLower() + getRandomUpper();
    }

    // User chose 3 criterias
    else if (specialChar && numericChar && lowerCaseChar) {
        passCriterias += getRandomSpecial() + getRandomNumber() + getRandomLower();
    } else if (specialChar && numericChar && upperCaseChar) {
        passCriterias += getRandomSpecial() + getRandomNumber() + getRandomUpper();
    } else if (specialChar && lowerCaseChar && upperCaseChar) {
        passCriterias += getRandomSpecial() + getRandomLower() + getRandomUpper();
    } else if (numericChar && lowerCaseChar && upperCaseChar) {
        passCriterias += getRandomNumber() + getRandomLower() + getRandomUpper();
    }

    // User chose 2 criterias
    else if (specialChar && numericChar) {
        passCriterias += getRandomSpecial() + getRandomNumber();
    } else if (specialChar && lowerCaseChar) {
        passCriterias += getRandomSpecial() + getRandomLower();
    } else if (specialChar && upperCaseChar) {
        passCriterias += getRandomSpecial() + getRandomUpper();
    } else if (numericChar && lowerCaseChar) {
        passCriterias += getRandomNumber() + getRandomLower();
    } else if (numericChar && upperCaseChar) {
        passCriterias += getRandomNumber() + getRandomUpper();
    } else if (lowerCaseChar && upperCaseChar) {
        passCriterias += getRandomLower() + getRandomUpper();
    }

    // User chose 1 criteria
    else if (specialChar) {
        passCriterias += getRandomSpecial();
    } else if (numericChar) {
        passCriterias += getRandomNumber();
    } else if (lowerCaseChar) {
        passCriterias += getRandomLower();
    } else if (upperCaseChar) {
        passCriterias += getRandomUpper();
    }

    // Password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection
    for (var i = 0; i < passwordLength; i++) {
        var passwordChoices =
            passCriterias[Math.floor(Math.random() * passCriterias.length)];
            password.push(passwordChoices);
        console.log(passCriterias);
        console.log(password);
    }
    
    passwordText.value = password.join("");
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);