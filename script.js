function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); //make playerSelection case insensitive
    let roundResult = getRoundResult(playerSelection, computerSelection);

    //For formatting purposes, capitalize first letter of strings
    formattedRoundResult = capitalizeFirstLetter(roundResult);
    formattedPlayerSelection = capitalizeFirstLetter(playerSelection);
    formattedComputerSelection = capitalizeFirstLetter(computerSelection);

    if (formattedRoundResult == 'Win') {
        return `You ${formattedRoundResult}! ${formattedPlayerSelection} beats ${formattedComputerSelection}.`;
    } else if (formattedRoundResult == 'Lose') {
        return `You ${formattedRoundResult}! ${formattedComputerSelection} beats ${formattedPlayerSelection}.`;
    } else {
        return `No one wins, it's a ${formattedRoundResult}! You both chose ${formattedPlayerSelection}.`
    }
}

function game() {
    //Play 5 round game of Rock Paper Scissors
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 3 && computerScore < 3) {
        //get choices
        let playerSelection = prompt('Enter your choice:');
        let computerSelection = computerPlay();

        //update scores
        let roundResult = getRoundResult(playerSelection, computerSelection);
        if (roundResult == 'win') playerScore++;
        if (roundResult == 'lose') computerScore++;

        //output to console
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore}, CPU: ${computerScore}`)
    }
    playerScore > computerScore ? alert('You won against the CPU :)') : alert('You lost against the CPU :(')
}

//run the game
game()