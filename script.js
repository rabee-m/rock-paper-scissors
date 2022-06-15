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

function playRound(playerSelection, computerSelction) {
    let roundResult = getRoundResult(playerSelection, computerSelction)
}