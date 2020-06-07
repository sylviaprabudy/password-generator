// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
    
    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;

//}

function writePassword() {
    // Ask user how many characters of password they want to generate
    var passwordLength = window.prompt("How many characters would you like your password to contain? It has to be between 8 - 128 characters.")

    // Check if the answer meets the requirement
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength >128 ) {
        window.alert("Please enter a valid answer. It has to be between 8 to 128.");
        writePassword();
    }

    // Ask if user want to include lowercase characters
    var lowerCaseChar = window.confirm("Click OK to confirm including lowercase characters.")

    var upperCaseChar = window.confirm("Click OK to confirm including uppercase characters.")

    var numericChar = window.confirm("Click OK to confirm including numeric characters.")

    var specialChar = window.confirm("Click OK to confirm including special characters.")
    
};

writePassword();

// Get fromCharCode from Character Set http://net-comber.com/charset.html
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
    var special = "!@#$%^&*(){}[]<>-=_+/?"
    return special[Math.floor(Math.random() * special.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecial());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
