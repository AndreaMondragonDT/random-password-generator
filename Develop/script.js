var specialCharacters = [];
var numberArray = [];
var upperCaseArray = [];
var lowerCaseArray = [];
var passwordLength = 



// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Prompt user for password criteria when button is clicked
    // Prompt to choose password between 8-128 characters
    // User prompted to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected, pw should be between 8-128 characters
// Generate the password based on the criteria





// Display password in box
  return "password";
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}