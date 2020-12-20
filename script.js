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
// characterCount variable will determine the lenght of the password based on what the user enters.
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

  // If statements  that will determine what character types returned in the password
  password = ""
  if (upperCaseQuestion === true){
    for (i = 0; i <= characterCount; i++){
    // password = ""
    password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(upperCaseValue.length - 1 )))
    }
  }
  if (lowerCaseQuestion === true){
    for (i = 0; i <= characterCount; i++){
    // password = ""
    password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(lowerCaseValue.length - 1 )))
    }
  }
  if (specialCharacterQuestion === true){
    for (i = 0; i <= characterCount; i++){
    // password = ""
    password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(specialCharacterValue.length - 1 )))
    }
  }
  if (numberQuestion === true){
    for (i = 0; i <= characterCount; i++){
    // password = ""
    password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(numberValue.length - 1 )))
    }
  }
// } 
  // var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
