

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


function game() {
    let playerScore = 0
    let computerScore = 0
    let roundResult
    for (let i = 0; i < 5; i++) {
        
        computerSelection = getComputerSelection()
        playerSelection = prompt("Please type your selection - 'Rock', 'Paper' or 'Scissors'")
        
        roundResult = playRound(playerSelection, computerSelection)

        if (roundResult.includes("Win")) {
            playerScore ++
        } else if (roundResult.includes("Lose")) {
            computerScore ++
        }

        if (i < 4) {

        alert(roundResult + "\n\nThe score is Player: " + playerScore.toString() + ", Computer: " + computerScore.toString())
        } else {
            let finalResult
            if (computerScore ==  playerScore) {
                finalResult = "A Draw!"
            } else if (computerScore > playerScore) {
                finalResult = "You Lose!"
            } else {
                finalResult = "You Win!"
            }

            alert(roundResult + "\n\nThe final score is Player: " + playerScore.toString() + ", Computer: " + computerScore.toString() + "\n\n" + finalResult)
        }
    }
    
}

game()



