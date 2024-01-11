let playerWinCounter = 0;
let computerWinCounter = 0;

function getComputerChoice() {
    let computerChoice;
    let computerChoiceInt = Math.floor(Math.random() * 3);
    if (computerChoiceInt === 0) {computerChoice = "rock"};
    if (computerChoiceInt === 1) {computerChoice = "paper"}
    if (computerChoiceInt === 2) {computerChoice = "scissors"}

    return (computerChoice);
}

function getPlayerChoice() {
    let playerChoice;

    playerChoiceRaw = prompt("Please choose rock, paper, or scissors.");
    if (playerChoiceRaw.toLowerCase() === "rock") {
        playerChoice = "rock"
    }
    if (playerChoiceRaw.toLowerCase() === "paper") {
        playerChoice = "paper"
    }
    if (playerChoiceRaw.toLowerCase() === "scissors") {
        playerChoice = "scissors"
    }

    return playerChoice;
}

function singleRound(playerSelection, computerSelection)  {
    console.log("Your choice: " + playerSelection)
    console.log("Computer choice: " + computerSelection)

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Tie! Let's go again!")
            singleRound(getPlayerChoice(), getComputerChoice());
        }
        if (computerSelection === "paper") {
            console.log("You lose! Paper covers rock.");
            computerWinCounter++;
        }
        if (computerSelection === "scissors") {
            console.log("You win! Rock breaks scissors.");
            playerWinCounter++;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("Tie! Let's go again!")
            singleRound(getPlayerChoice(), getComputerChoice());
        }
        if (computerSelection === "rock") {
            console.log("You win! Paper covers rock.");
            playerWinCounter++;
        }
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors cuts paper.");
            computerWinCounter++;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            console.log("Tie! Let's go again!")
            singleRound(getPlayerChoice(), getComputerChoice());
        }
        if (computerSelection === "paper") {
            console.log("You win! Scissors cuts paper.");
            playerWinCounter++;
        }
        if (computerSelection === "rock") {
            console.log("You lose! Rock breaks scissors.");
            computerWinCounter++;
        }
    }
}  

function game() {
    for (let i = 0; i < 5; i++) {
        singleRound(getPlayerChoice(), getComputerChoice());
        if (playerWinCounter === 3) {
            console.log("Player wins 3 - " + computerWinCounter + ".")
            break;
        }
        if (computerWinCounter === 3) {
            console.log("Computer wins 3 - " + playerWinCounter + ".")
            break;
        }
    }
}

console.log(game());