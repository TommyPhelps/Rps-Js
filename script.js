function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let num = 0;
    let result = "";
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerChoice, computerChoice) {
    if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        return "Scissors beats paper!";
    }
    else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        return "Rock beats scissors!";
    } 
    else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        return "Paper beats rock!";
    } 
    else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        return "Rock beats scissors!";
    } 
    else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        return "Paper beats rock!";
    } 
    else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        return "Scissors beats paper!";
    } else {
        return "You both chose the same!";
    }
}

function playGame() {
    let rounds = 5;
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

    while (round <= rounds) {
        let playerChoice = prompt("Enter you choice (Rock, Paper, or Scissors)");
        let computerChoice = getComputerChoice();
        
        if ((playerChoice === "scissors") && (computerChoice === "paper")) {
            playerScore += 1;
        }
        else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
            computerScore += 1;
        } 
        else if ((playerChoice === "rock") && (computerChoice === "paper")) {
            computerScore += 1;
        } 
        else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
            playerScore += 1;
        } 
        else if ((playerChoice === "paper") && (computerChoice === "rock")) {
            playerScore += 1;
        } 
        else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
            computerScore += 1;
        } else {
            playerScore += 1;
            computerScore += 1;
        }
        console.log("Round " + round + ": " + playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase()) + "\n" +
                    "Player's Score: " + playerScore + "\n" +
                    "Computer's Score: " + computerScore);
        round++;
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore === computerScore) {
        console.log("You tied!");
    } else {
        console.log("You lose!");
    }
}

playGame();
