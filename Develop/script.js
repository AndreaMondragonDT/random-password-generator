var choiceArray = [];
var specialCharacters = ['/', ';', ']', '[', '=', '-', '+', '-', '*', '?', '>', '<', '"', ':', '|', '}', '{', ')', '(', '&', '^', '%', '$', '#', '@', '!', '`', '~'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var upperCaseArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var lowerCaseArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
var passwordLength = 8;



// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Prompt user for password criteria when button is clicked
  

      // Prompt to choose password between 8-128 characters
      // User prompted to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // Input should be validated and at least one character type should be selected, pw should be between 8-128 characters
  // Generate the password based on the criteria
  
  
  
  
  
  // Display password in box
    return "password";
  }

  function promptsForPassword () {
    passwordLength = parseInt(prompt ("Choose password length between 8 and 128 characters"));
    if passwordLength < 8 || passwordLength >128

  }