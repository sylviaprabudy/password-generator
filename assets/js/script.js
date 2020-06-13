// Generate Password CTA
var generateBtn = document.querySelector("#generate");

// Write password in textarea
var passwordText = document.querySelector("#password");

// Write createPass function
function createPass() {
    // Create string for each criteria
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
    var special = "!@#$%^&*(){}[]<>=-_+/?~|"
    var number = "0123456789"
    var characterSet = "";
    var password = "";
    // Ask user how many characters of password they want to generate
    var passwordLength = prompt(
        "How many characters would you like your password to contain? Enter a value between 8 to 128"
    );
    //Check if the answer meets the requirement
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid answer. It has to be between 8 to 128");        
        return;

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

    if (lowerCaseChar) {
        characterSet += lowercase;
    }
    if (upperCaseChar) {
        characterSet += uppercase;
    }
    if (specialChar) {
        characterSet += special;
    }
    if (numericChar) {
        characterSet += number;
    }
    // Generate password function. While length of passwordLenght isn't met yet, keep looping
    for (i = 0; i < passwordLength; i++) {
        // Create random selections
        password += characterSet[Math.floor(Math.random() * characterSet.length)]
    }
    return(password);
}

// Write password to the #password input
function writePassword(password) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(createPass()) });