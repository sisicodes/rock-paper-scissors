let choiceArray = ['Rock', 'Paper', 'Scissors'];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getComputerChoice() {
    let choiceIndex = getRandomIntInclusive(0,2);
    console.log(choiceArray[choiceIndex]);
    return choiceArray[choiceIndex];
}


function getPlayerSelection() {
    let playerChoice = prompt("rock, paper, scissors?");
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1,);
    console.log(playerChoice);
    if(playerChoice == computerChoice) {
        return 'Tie! You both chose ' + playerChoice + '!';
    }
    else if((playerChoice == 'rRock' && computerChoice == 'Scissors') || (playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice== 'Paper'))  {
         return 'You win! ' +playerChoice+ ' beats ' + computerChoice + '!';
    }
    else {
        return 'You lose! ' + computerChoice + ' beats ' + playerChoice + '!';
    }
}

let playerChoice = getPlayerSelection();
let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));