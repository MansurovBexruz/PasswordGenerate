import { password } from "bun";

const numbers = document.getElementById("number") as HTMLInputElement;
const loverCase = document.getElementById("lowercase") as HTMLInputElement;
const upperCase = document.getElementById("uppercase") as HTMLInputElement;
const symbol = document.getElementById("symbol") as HTMLInputElement;
const spaces = document.getElementById("spaces") as HTMLInputElement;

const passwordLength = 10;
let allCharacters = [];
 
numbers.addEventListener("change", function() {

  let password = "";

  numbers.checked = true;

    if (numbers.checked) {
        allCharacters.push(...numberValue);
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    
    console.log('password = ', password);
    
});


  const lovercase = loverCase.checked;
  const uppercase = upperCase.checked;
  const symbolcheck = symbol.checked;  
  const spacescheck = spaces.checked;

const numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const loverCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbolValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
const spacesValue = [" "," "," "," "," "," "," "," "];

function generatePassword() {
  let password = "";
 }
function init() {
    const password = generatePassword();
    console.log('password = ', password);
}

window.addEventListener("load", init);