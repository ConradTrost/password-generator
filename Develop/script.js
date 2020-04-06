// Assignment code here
// many questions in window prompts for password criteria

var arrayChar = '';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var numChar = '1234567890';
var specialChar = '!@#$%^&*()_+';
result = "";
var password = "";

function randChars() {
  // Pulls random character from arrayChar string and returns result
  result = arrayChar[Math.floor(Math.random()*Math.floor(arrayChar.length-1))];
  return result;
};


function generatePassword() {
  // Password length user input prompt / invalid entry
  var passLength = window.prompt("How many characters would you like in your password?");
    if (passLength < 8 || passLength > 128)  {
      window.alert('Invalid entry! Retry with a character count between 8 and 128');
      return;
    };
  // Password criteria confirmations
  var numbers = window.confirm("Do you want numbers to be included in the password?");
  // Appends number string to total character string
  if (numbers === true) {
    arrayChar += numChar;
  };
  var lowerCase = window.confirm("Do you want lowercase letters in your password?");
  if (lowerCase === true) {
    arrayChar += lowerChar;
  };
  var upperCase = window.confirm("Do you want uppercase letters in your password?");
  if (upperCase === true) {
    arrayChar += upperChar;
  };
  var specials = window.confirm("Do you want special characters included in your password?");
  if (specials === true) {
    arrayChar += specialChar;
  };
  // loop to run function to select random variable from character string and add to the password string
  for(var i =0; i < passLength; i++) {
    randChars(i);
     password += result;
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = '';
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
