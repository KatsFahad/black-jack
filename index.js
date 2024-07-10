
let username = prompt('Hey, Enter u username: ');

let noOfChips = prompt('How many chips u want to start with: ')

let player = {
    name: username,
    chips: noOfChips
}


let cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = '';

let messageEl = document.getElementById('message-el');

let sumEl = document.getElementById('sum-el');

// let sumEl = document.querySelector('#sum-el');

let cardsEl = document.getElementById('cards-el');


let playerEl = document.querySelector('#player-el');
playerEl.textContent = `${player.name}: $${player.chips}`;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10){
        return 10;
    }else if (randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    // cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`
    cardsEl.textContent = `Cards: `;

    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += `${cards[i]} `;
    }

    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20){
        message = 'Do you want to draw new card?';
    }else if(sum === 21){
        message = 'U have hit BlackJack';
        hasBlackJack = true;
    }else{
        message = 'You out of game!';
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
   if (isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
   }
}

// twt6m

/*else{
    let bodyEl = document.querySelector('body');
    let newH5 = document.createElement('h5');
    newH5.innerText = 'nah man lets start new!'
    bodyEl.appendChild(newH5)
    console.log('no more cards for u');
   }*/