//Scores
let humanScore = 0;
let computerScore = 0;
let roundTracker = 0;
let isAutoPlaying = false;
let autoplayIntervalId = null;

//Selectors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scr = document.querySelector('.score');
const reset = document.querySelector('.reset');
const autoplay = document.querySelector('.autoplay');
const control = document.querySelector('.control');

//Event listeners
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));
reset.addEventListener('click', resetting);
autoplay.addEventListener('click', autoplaying);

//Functions
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

function playRound(choice) {
    let score = undefined;
    const humanChoice = choice;
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
    
    const newdiv1 = document.createElement('div');
    newdiv1.textContent = `You ${score}! Your Move: ${humanChoice}. Computer Move: ${computerChoice}`;

    const newdiv2 = document.createElement('div');
    newdiv2.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}. Draws: ${roundTracker-humanScore-computerScore}`;

    scr.textContent = '';
    scr.appendChild(newdiv1);
    scr.appendChild(newdiv2);
}

function resetting() {
    humanScore = 0;
    computerScore = 0;
    roundTracker = 0;
    scr.textContent = '';
    scr.appendChild(newdiv1);
    scr.appendChild(newdiv2);
}

function autoplaying() {
    isAutoPlaying = !isAutoPlaying;
    autoplay.textContent = "Auto Playing!";
    if (isAutoPlaying){
        control.lastElementChild.classList.add('autoplaying');
        autoplayIntervalId = setInterval(() => {
            const humanChoice = getComputerChoice();
            playRound(humanChoice);
        }, 1);

    } else {
        control.lastElementChild.classList.remove('autoplaying');
        autoplay.textContent = "Auto Play";
        clearInterval(autoplayIntervalId);
        autoplayIntervalId = null;
    }
}

//Outdated
// function isValidPlayerMove(playerMove) {
    //     return playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors';
    // }

// function getHumanChoice() {
    //     const choice = prompt("Rock, Paper, or Scissors?: ");
    //     const lowerCaseChoice = choice.toLowerCase();
    //     return isValidPlayerMove(lowerCaseChoice) 
    //         ? lowerCaseChoice 
    //         : getHumanChoice() ;
    // };
    