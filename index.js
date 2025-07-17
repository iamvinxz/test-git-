//1. 

document.getElementById('count-el').innerText = 5;

//2 

let myAge = 20;
console.log(myAge);

//3

let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

//4. 
let bonusPoints = 50;

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

//5
let lap1 = 33;
let lap2 = 33;
let lap3 = 36;

function logTimeLaps() {
    console.log(lap1 + lap2 + lap3);
}

logTimeLaps();

//6. 
let username = "per";
let message = "You have three new notifications";
let messageToUser = message + ", " + username + "!";

console.log(messageToUser);

//7. 

let name = "John Khervin";
let greeting = "Hi, my name is ";

let myGreeting = greeting + name; 
console.log(myGreeting); 

//8. 

let welcomeEl = document.getElementById('welcome-el');

let greet = "Welcome back ";

welcomeEl.innerText = greet + name; 