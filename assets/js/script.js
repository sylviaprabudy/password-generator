// Generate Password CTA
var generateBtn = document.querySelector("#generate");

// Write password in textarea
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create functions for each criterias
function getRandomSpecial() {
    var special = "!@#$%^&*(){}[]<>=-_+/?~|";
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

// Write password to the #password input
function writePassword() {
    // Ask user how many characters of password they want to generate
    var passwordLength = prompt(
        "How many characters would you like your password to contain? Enter a value between 8 to 128"
    );

    // Check if the answer meets the requirement
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid answer. It has to be between 8 to 128");
        writePassword();
    } else {
        // Ask if user want to include any of these criterias
        var specialChar = confirm(
            "Click OK to confirm including special characters"
        );
        var numericChar = confirm(
            "Click OK to confirm including numeric characters"
        );
        var lowerCaseChar = confirm(
            "Click OK to confirm including lowercase characters"
        );
        var upperCaseChar = confirm(
            "Click OK to confirm including uppercase characters"
        );
    }

    var criteria = {
        passwordLength: passwordLength,
        specialChar: specialChar,
        numericChar: numericChar,
        lowerCaseChar: lowerCaseChar,
        upperCaseChar: upperCaseChar
    };

    createPass(criteria);
}

// Generate createPass function. While length of passwordLenght isn't met yet, keep looping
function createPass(criteria) {
    var passwordArray = [];
    while (password.length < criteria.passwordLength) {
        if (criteria.specialChar) {
            passwordArray.push(getRandomSpecial[randomPass(getRandomSpecial)]);
        }
        if (criteria.numericChar) {
            passwordArray.push(getRandomNumber[randomPass(getRandomNumber)]);
        }
        if (criteria.lowerCaseChar) {
            passwordArray.push(getRandomLower[randomPass(getRandomLower)]);
        }
        if (criteria.upperCaseChar) {
            passwordArray.push(getRandomUpper[randomPass(getRandomUpper)]);
        }
    }
    var passwordStr = passwordArray.join('');
    generatePassword(passwordStr);
}

// Create random selections
function randomPass(characterSet) {
    return Math.floor(Math.random() * characterSet.length);
}

// Write password to the #password input
function generatePassword(password) {
    passwordText.value = password;
}