let choiceArray = ['Rock', 'Paper', 'Scissors'];
let computerWin = 0;
let playerWin = 0;


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const score = document.querySelector('#score');
const playerScore = document.querySelector('#pscore');
const computerScore = document.querySelector('#cscore');
const roundInfo = document.querySelector('#roundInfo')
const round = document.querySelector('#round');


rockBtn.addEventListener('click', () => {
    roundInfo.textContent = playRound('rock', getComputerChoice());
    playerScore.textContent = `Player Score: ${playerWin}`;
    computerScore.textContent = `Computer Score: ${computerWin}`;
    checkWin();
} );
paperBtn.addEventListener('click',() => {
    roundInfo.textContent =playRound('paper', getComputerChoice());
    playerScore.textContent = `Player Score: ${playerWin}`;
    computerScore.textContent = `Computer Score: ${computerWin}`;
    checkWin();
});
scissorsBtn.addEventListener('click', () => {
    roundInfo.textContent = playRound('scissors', getComputerChoice());
    playerScore.textContent = `Player Score: ${playerWin}`;
    computerScore.textContent = `Computer Score: ${computerWin}`;
    checkWin();
});
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getComputerChoice() {
    let choiceIndex = getRandomIntInclusive(0,2);
    //console.log(choiceArray[choiceIndex]);
    return choiceArray[choiceIndex];
}


/*function getPlayerSelection() {
    let playerChoice = prompt("rock, paper, scissors?");
    return playerChoice;
}*/



function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1,);
    console.log(playerChoice);
    if(playerChoice == computerChoice) {
        return 'Tie! You both chose ' + playerChoice + '!';
    }
    else if((playerChoice == 'Rock' && computerChoice == 'Scissors') || 
        (playerChoice == 'Paper' && computerChoice == 'Rock') || 
        (playerChoice == 'Scissors' && computerChoice== 'Paper'))  {
            playerWin ++;
            return 'You win! ' +playerChoice+ ' beats ' + computerChoice + '!';
    }
    else {
        computerWin ++;
        return 'You lose! ' + computerChoice + ' beats ' + playerChoice + '!';
    }
}

function checkWin () {
    if (computerWin == 5) {
        const winScenario = document.createElement('p');
        winScenario.classList.add("win");
        round.appendChild(winScenario);
        winScenario.textContent = 'The COMPUTER wins!!'
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;

    } else if (playerWin == 5) {
        const winScenario = document.createElement('p');
        winScenario.classList.add("win");
        round.appendChild(winScenario);
        winScenario.textContent = 'YOU win!!'
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
    }
}





function game() {
    let computerWin = 0
    let playerWin = 0
    let maxScore = 0
    while (maxScore<5) {
        
    }
}

function game() {
    let computerWin = 0;
    let playerWin = 0;
    let round;
    for (let i = 0; i<5; i++) {
        let playerChoice = getPlayerSelection();
        let computerChoice = getComputerChoice();
        round = playRound(playerChoice, computerChoice);
        console.log(round);
        if(round.includes('win')) {
            playerWin +=1;
        }
        else if (round.includes('lose')) {
            computerWin +=1;
        }
    }
    if (playerWin >computerWin) {
        console.log('YOU WIN THE GAME!');
    }
    else if (computerWin > playerWin) {
        console.log('YOU LOSE THE GAME');
    }
    else {
        console.log('TIE???')
    }
}


/*let playerChoice = getPlayerSelection();
let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));*/

//game();