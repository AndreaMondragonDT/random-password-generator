var choiceArray = [];
var specialCharacters = ['/', ';', ']', '[', '=', '-', '+', '-', '*', '?', '>', '<', '"', ':', '|', '}', '{', ')', '(', '&', '^', '%', '$', '#', '@', '!', '`', '~'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var upperCaseArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var lowerCaseArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
var passwordLength = 8;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var promptCriteriaMet = promptsForPassword();

if(promptCriteriaMet) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

} else {
  passwordTest.value = "";
}


}

  // Prompt user for password criteria when button is clicked
function generatePassword() {
var password = " ";
for (var i = 0; i < passwordLength; i++){
  var randomLetter = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[randomLetter];
}
  
    return password;
  }

  function promptsForPassword (){
    choiceArray = [];
    passwordLength = parseInt(prompt("Choose password length between 8 and 128 characters"));

    if  (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be a number between 8 - 128 digits.");
      return false;
    }
     
    if (confirm("Do you want your password to have $pe<i@l <h@r@a<+er$?")) {
      choiceArray = choiceArray.concat(specialCharacters);
     }

     if (confirm("Do you want your password to have numbers?")) {
      choiceArray = choiceArray.concat(numberArray);
     }

    if (confirm("Do you want your password to have UPPERCASE letters?")) {
      choiceArray = choiceArray.concat(upperCaseArray);
     }
    
    if (confirm("Do you want your password to have lowercase letters?")) {
      choiceArray = choiceArray.concat(lowerCaseArray);
     }
     return true;
  }