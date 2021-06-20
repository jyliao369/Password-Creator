// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// These three variables hold the different characters that can be used to generate a password
// One is normal letters, one is numbers, and the last is the special characters
var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","|","<",",",">",".","?","/"];
// This will randomize which char gets selected and added to the overall password
// 0 = upper case char, 1 = num, 2 = specChar, and 4 = just char
var charSel = [0,1,2,3];
// How long you want the pass word to be.
var passlength = 15;
// An empty string to create your password.
var pass = "";
// These variables are booleans. They are used in the future where the site prompts the user if they
// would like to use certain characters in their passwords like numbers, special characters, or upper case specifically
var numOn = true;
var specCharOn = true;
var charUpOn = true;


var genPass = function() {

  // this is to test to see if the say the special characters are turned off or don't want to be used
  // specCharOn = false;
  // numOn = false;
  // charUpOn = false;

  for (var a = 0; a < passlength; a++) {

    // This variables are random number generators that will a generate a random number based on the length
    // of each specific array. I would have one random number generator but the num array only has 10 nunbers thus any
    // higher would return nothing. 
    // Every time we go through the loop it should generate new random numbers for each section
    var ranChar = Math.floor(Math.random() * char.length);
    var ranNum = Math.floor(Math.random() * num.length);
    var ranSpecChar = Math.floor(Math.random() * specChar.length);
    var ranCharSel = Math.floor(Math.random() * charSel.length);

    // This will determine which character will be added to the overall password
    if (ranCharSel === 0 && charUpOn) {
      pass += char[ranChar].toUpperCase();;
    } else if (ranCharSel === 1 && numOn) {
      pass += num[ranNum];
    } else if (ranCharSel === 2 && specCharOn) {
      pass += specChar[ranSpecChar];
    } else {
      pass += char[ranChar];
    }
  }

  console.log(pass);

}

genPass();




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
