const input = document.querySelector("#password") as HTMLInputElement;

const numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const loverCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbolValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
const spacesValue = [" "," "," "," "," "," "," "," "];

const passwordLength = 6;


let isNumber = false;
let isLoverCase = false;
let isUpperCase = false;
let isSymbol = false;
let isSpaces = false;


function generatePassword() {
  let password = "";
  let allCharacters = [];

  if(isNumber) allCharacters.push(...numberValue);
  if(isLoverCase) allCharacters.push(...loverCaseValue);
  if(isUpperCase) allCharacters.push(...upperCaseValue);
  if(isSymbol) allCharacters.push(...symbolValue);
  if(isSpaces) allCharacters.push(...spacesValue);

  for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * allCharacters.length);
  password += allCharacters[randomIndex];
  } 

  return password;
 }

 document.addEventListener("DOMContentLoaded", () => {
  const loverCase = document.querySelector("#lovercase") as HTMLInputElement;
  const numbers = document.querySelector("#number") as HTMLInputElement;
  const upperCase = document.querySelector("#uppercase") as HTMLInputElement;
  const symbol = document.querySelector("#symbols") as HTMLInputElement;
  const spaces = document.querySelector("#spaces") as HTMLInputElement;

  numbers.addEventListener("change", () => {
      isNumber = numbers.checked;
      init();
  });

  loverCase.addEventListener("change", () => {
      isLoverCase = loverCase.checked;
      init();
  });

  upperCase.addEventListener("change", () => {
      isUpperCase = upperCase.checked;
      init();
  });

  symbol.addEventListener("change", () => {
      isSymbol = symbol.checked;
      init();
  });

  spaces.addEventListener("change", () => {
      isSpaces = spaces.checked;
      init();
  });
  


});


function init(){
  const password = generatePassword();
  input.value = password;
  input.select();
  
}

window.addEventListener("load", init);