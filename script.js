function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function getRoundResult(playerSelection, computerSelction) {
    switch(playerSelection) {
        case 'rock':
            if (computerSelction == 'rock') return 'tie';
            if (computerSelction == 'paper') return 'lose';
            if (computerSelction == 'scissors') return 'win';
        case 'paper':
            if (computerSelction == 'rock') return 'win';
            if (computerSelction == 'paper') return 'tie';
            if (computerSelction == 'scissors') return 'lose';
        case 'scissors':
            if (computerSelction == 'rock') return 'lose';
            if (computerSelction == 'paper') return 'win';
            if (computerSelction == 'scissors') return 'tie';
    }
}
function updateDisplay(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        document.getElementById('player-move-icon').src = 'images/rock_icon.png';
    } else if (playerSelection == 'paper') {
        document.getElementById('player-move-icon').src = 'images/paper_icon.png';
    } else {
        document.getElementById('player-move-icon').src = 'images/scissors_icon.png';
    }
    if (computerSelection == 'rock') {
        document.getElementById('cpu-move-icon').src = 'images/rock_icon.png';
    } else if (computerSelection == 'paper') {
        document.getElementById('cpu-move-icon').src = 'images/paper_icon.png';
    } else {
        document.getElementById('cpu-move-icon').src = 'images/scissors_icon.png';
    }
}

function playRound(playerSelection, computerSelection, playerScoreDisplay, cpuScoreDisplay) {
    let roundResult = getRoundResult(playerSelection, computerSelection);

    console.log(roundResult)
    //Switch icons on game display
    updateDisplay(playerSelection, computerSelection);

    if (roundResult == 'win') {
        playerScoreDisplay.textContent++;
    } else if (roundResult == 'lose') {
        cpuScoreDisplay.textContent++;
    }
    checkWin(playerScoreDisplay, cpuScoreDisplay);
}

function restartGame(playerScoreDisplay, cpuScoreDisplay) {
    //restart the game
    playerScoreDisplay.textContent = 0;
    cpuScoreDisplay.textContent = 0;
}

function checkWin(playerScoreDisplay, cpuScoreDisplay) {
    if (playerScoreDisplay.textContent == 3) {
        alert("You Won against the CPU!");
        restartGame(playerScoreDisplay, cpuScoreDisplay);
    } else if (cpuScoreDisplay.textContent== 3) {
        alert ("You Lost against the CPU!");
        restartGame(playerScoreDisplay, cpuScoreDisplay);
    }
}

const rockBtn = document.querySelector('button#rock');
const paperBtn = document.querySelector('button#paper');
const scissorsBtn = document.querySelector('button#scissors');
const playerScoreDisplay = document.querySelector('.player-score');
const cpuScoreDisplay = document.querySelector('.cpu-score');
const gameDisplay = document.querySelector('game-display');

rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay(), playerScoreDisplay, cpuScoreDisplay)
});

paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay(), playerScoreDisplay, cpuScoreDisplay)
});

scissorsBtn.addEventListener('click', () => {
    playRound('paper', computerPlay(), playerScoreDisplay, cpuScoreDisplay)
});