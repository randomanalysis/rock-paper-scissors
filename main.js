

function getComputerSelection() {
    const choice = Math.floor(3 * Math.random())
    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return "Draw!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        } else {
            return "You Lose! Scissors beats Paper"
        }
    } else {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors"
        } else {
            return "You Win! Scissors beats Paper"
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection));



