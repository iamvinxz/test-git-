const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const num = 1234567890;
let length = 12;

const allowedChar = lowerCase + upperCase + num;
let password = "";

for(let i = 0; i < length; i++){
    let random = Math.floor(Math.random() * allowedChar.length);
    password += allowedChar[random];
}

console.log(password);

document.getElementById('randomPass').textContent += password;