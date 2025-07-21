let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
    name: "Khervin",
    chips: 145
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    console.log(cards);

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
        console.log(cardsEl.textContent);
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message);
    messageEl.textContent = message;
}

document.getElementById('newCard-btn').onclick = function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let addCard = getrandomCard();
        sum += addCard;
        cards.push(addCard);
        console.log(cards.length);
            if(cards.length > 3){
                cards.shift();
            }
        renderGame();
    }else{
        message = "Try again next time!"
    }

    console.log(cards);
}

function getrandomCard(){
    let random = Math.floor(Math.random() * 13) + 1;

    if(random === 1){
        return 11;
    }else if(random > 10){
        return 10;
    }else{
        return random;
    }
}

document.getElementById('start-btn').onclick = function startGame() {
    isAlive = true;

    let firstCard = getrandomCard();
    let secondCard = getrandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}