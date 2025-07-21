//1. 

//document.getElementById('count-el').innerText = 5;

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

// PRACTICE TIME - PART 1

//1. 
let firstName = "John Khervin";
let lastName = " Dela Cruz";

let fullName = firstName + lastName;

console.log(fullName);

//2. 
function LindaGreet(){
    let name = "Linda";
    let greeting = "Hi there";

    let LindaGreet = greeting + ", " + name + "!";
    console.log(LindaGreet);
}

LindaGreet();

//3.

let myPoints = 3;

function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);

//4. 

/*
1. 22
2. 18
3. 65
4. My points: 59 
5. 4
6. 1114


*/

//5

document.getElementById('purchase-btn').onclick = function purchase(){
    document.getElementById('error').textContent = "Invalid Purchase";
}

//6. 

let firstCard = 5;
let secondCard = 8;

let sum = firstCard + secondCard;

if(sum < 21){
    console.log("Do you want to draw cards?");
}else if( sum === 21){
    console.log("You win");
}else{
    console.log("Try again next time");
}

//7.

let age = 22;

if(age >= 21){
    console.log("You can enter the club!");
}else{
    console.log("I'm sorry you are a minor!");
}

//8. 

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

console.log(featuredPosts.length);

//9. 

let aboutMySelf = ["John Khervin Dela Cruz", 20, true]

//10.

let messages = ["Hey, how's it going?", 
                "I'm great, thank you! How about you?", 
                "All good. Been working on my portfolio lately."]

let newMessage = "Same here!";

messages.push(newMessage);
messages.pop();

//11 

for (let count = 10; count < 21; count +=1){
    console.log(count);
}

//12. 
let player1Time = 102;
let player2Time = 107;

function totalraceTime(){
    let totalTime = player1Time + player2Time;
    return totalTime;
}

let total = totalraceTime();

console.log(total);

//13.

let random = Math.floor(Math.random() * 6);

console.log(random);

//14.

let hasSolvedChallenge = true;
let hasHintsLeft = false; 

if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution();
}

function showSolution(){
    console.log("Showing the solution...")
}

//15. 

let likeDocumentaries = false;
let likeStartups = true;

if(likeDocumentaries === true || likeStartups === true){
    recommendMovie();
}

function recommendMovie(){
    console.log("Hey, check out this new film we think you will like!");
}