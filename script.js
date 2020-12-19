// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = [];
var characterCount = prompt("How many characters would you like your password to contain?")

if (characterCount <= 7){
    alert ("Password must be at least 8 characters.")
  } else if (characterCount >= 129){
    alert ("Password must be less than 129 characters.")
  } else {
    window.confirm("Do you want to include uppercase characters?")
    window.confirm("Do you want to include lowercase characters?")
    window.confirm("Do you want to include special characters")    
  }

var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I" ,"J" , "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")" ];

  i

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



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