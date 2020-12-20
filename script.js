// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// var password 
var upperCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseValue = "abcdefghijklmnopqrstuvwxyz"
var specialCharacterValue = "!@#$%^&*()"
var numberValue = "0123456789"
var characterCount //This will be determined within the function below depending on the user's choices.
var passwordValue = ""
// If the user chooses all three character options for their password
passwordValue = upperCaseValue + lowerCaseValue + specialCharacterValue + numberValue;

// This is every possible password value if the user selects at least uppercase letters
passwordValue = upperCaseValue;
passwordValue = upperCaseValue + numberValue;
passwordValue = upperCaseValue + lowerCaseValue + numberValue;
passwordValue = upperCaseValue + lowerCaseValue;
passwordValue = upperCaseValue + specialCharacterValue + numberValue;
passwordValue = upperCaseValue + specialCharacterValue;

// These are the remaining possible password values if the user selects at least lowercase letters
passwordValue = lowerCaseValue;
passwordValue = lowerCaseValue + specialCharacterValue
passwordValue = lowerCaseValue + numberValue
passwordValue = lowerCaseValue + specialCharacterValue + numberValue

// This is the remaining possible password if the user selects just special characters
passwordValue = specialCharacterValue 
passwordValue = specialCharacterValue + numberValue

// This is the remaining possible password if the user selects just number characters 
passwordValue = numberValue

function writePassword() { 
 var characterCount = prompt("How many characters would you like your password to contain?")

if (characterCount <= 7){
    alert ("Password must be at least 8 characters.")
  } else if (characterCount >= 129){
    alert ("Password must be less than 129 characters.")
  } else {
  var upperCaseQuestion = window.confirm("Do you want to include uppercase characters?")
  var lowerCaseQuestion = window.confirm("Do you want to include lowercase characters?")
  var specialCharacterQuestion = window.confirm("Do you want to include special characters")    
  var numberQuestion = window.confirm("Do you want numbers?")
  }
  password = ""
  if (upperCaseQuestion === true){
    for (i = 0; i <= characterCount; i++)
    password = ""
    password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(upperCaseValue.length - 1 )))
  }
  if (lowerCaseQuestion === true){
    for (i = 0; i <= characterCount; i++)
    password = ""
    password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(lowerCaseValue.length - 1 )))
  }
  if (specialCharacterQuestion === true){
  for (i = 0; i <= characterCount; i++)
  password = ""
  password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(specialCharacterValue.length - 1 )))
  }
  if (numberQuestion === true){
  for (i = 0; i <= characterCount; i++)
  password = ""
  password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(numberValue.length - 1 )))
  }
} 

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// If no to all conditions alert "You must select at least one kind of character."

// var upperCaseWanted = false;
// var lowerCaseWanted = false;
// var specialCharacterWanted = false;

// if (upperCaseQuestion === true) {
//   upperCaseWanted = true
// }

// if (lowerCaseQuestion === true) {
//   lowerCaseWanted = true
// }

// if (specialCharacter === true) {
//   specialCharacter = true
// }

// }

// var upperCaseQuestion = window.confirm("Do you want to include uppercase letters?")
// var lowerCaseQuestion = window.confirm("Do you want lowercase letters?")







// Take whatever number of characters the user selects in the character count and generate a password of that length. 
// Need to put together a password made of character choices- numbers, upper and lower case letters, symbols.
// Need to create an alert if the user doesn't confirm at least one of the character types. 
// Push or return password comprised on all different characteristics. 




//  I need the window to prompt a questions. 
// "How many characters would you like your password to contain?"
// Any number less than 8 should cause an alert that says "Password length must be at least 8 characters?"
// Any number less more than 128 should cause an alert that says "Password length should be less than 129 characters."


// Then I need to write an if statement and establish the different possible outcomes.
// Then I need to set the parameters for those answers. In this case it'll be at least 8 and no more than 128 characters. 
// var upperCaseWanted = false;
// var numbersWanted = false;

// var upperCaseQuestion = (window.confirm "Do you want to include uppercase?")
// var numbersQuestion =
// if (upperCaseQuestion = window.confirm("Do you want to include uppercase characters?")
// if (upperCaseLetter.)


// // returns a random number from 8-128
// Math.floor(Math.random() * 128) + 8;
// console.log()
// var generatePassword = [];
// var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I" ,"J" , "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
// var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")" ];