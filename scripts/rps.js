let humanScore = 0;
let computerScore = 0;
let roundTracker = 0;

function isValidPlayerMove(playerMove) {
    return playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors';
}

function getComputerChoice() {
    const randNum = Math.random()
    let choice = undefined;
    if (randNum <= 1/3) {
        choice = 'rock';
    } else if (randNum > 1/3 && randNum <= 2/3) {
        choice = 'paper'
    } else {
        choice = 'scissors';
    }
    return choice;
};



function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?: ");
    const lowerCaseChoice = choice.toLowerCase();
    return isValidPlayerMove(lowerCaseChoice) 
        ? lowerCaseChoice 
        : getHumanChoice() ;
};


function playRound() {
    let score = undefined;

    

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        score = 'draw';
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            score = 'lose';
        } else {
            score = 'win'
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            score = 'win';
        } else {
            score = 'lose'
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            score = 'lose';
        } else {
            score = 'win'
        }
    }

    if (score === 'win') {
        humanScore += 1;
        roundTracker += 1;
    } else if (score === 'lose') {
        computerScore += 1;
        roundTracker += 1;
    } else {
        roundTracker += 1;
    }

    console.log(`You ${score}! Your Move: ${humanChoice}. Computer Move: ${computerChoice}`);
    console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);
}

while (roundTracker <= 5) {
    playRound();
}