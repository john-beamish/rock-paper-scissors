let playerWinCounter = 0;
let computerWinCounter = 0;
let playerChoice;
let rockImage1 = document.createElement('img');
rockImage1.src = 'images/rock-1.png';
rockImage1.className = "images";
let rockImage2 = document.createElement('img');
rockImage2.src = 'images/rock-2.png';
rockImage2.className = "images";
let paperImage1 = document.createElement('img');
paperImage1.src = 'images/paper-1.png';
paperImage1.className = "images";
let paperImage2 = document.createElement('img');
paperImage2.src = 'images/paper-2.png';
paperImage2.className = "images";
let scissorsImage1 = document.createElement('img');
scissorsImage1.src = 'images/scissors-1.png';
scissorsImage1.className = "images";
let scissorsImage2 = document.createElement('img');
scissorsImage2.src = 'images/scissors-2.png';
scissorsImage2.className = "images";
let transparentImage = document.createElement('img');
transparentImage.src = 'images/transparent.png';
transparentImage.className = "images";


const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");
const container4 = document.querySelector("#container4");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const resetContainer = document.querySelector("#reset-container");
const resetButton = document.createElement('button');
const resultsContainer = document.querySelector("#results-container");
const resultsText = document.createElement('p');
const playerChoiceContainer = document.querySelector("#player-choice-container");
const playerChoiceTextContainer = document.querySelector("#player-choice-text-container");
const playerChoiceImageContainer = document.querySelector("#player-choice-image-container");
const computerChoiceContainer = document.querySelector("#computer-choice-container");
const computerChoiceTextContainer = document.querySelector("#computer-choice-text-container");
const computerChoiceImageContainer = document.querySelector("#computer-choice-image-container");
const runningScoreContainer = document.querySelector("#running-score-container");
const runningScoreText = document.createElement("p");
const endgameContainer = document.querySelector("#endgame-container");
const endgameText = document.createElement("p");



function getComputerChoice() {
    let computerChoice;
    let computerChoiceInt = Math.floor(Math.random() * 3);
    if (computerChoiceInt === 0) {computerChoice = "rock"};
    if (computerChoiceInt === 1) {computerChoice = "paper"}
    if (computerChoiceInt === 2) {computerChoice = "scissors"}
    
    return (computerChoice);
}

function singleRound(playerSelection, computerSelection)  {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            resultsText.textContent = "Tie!";
            resultsContainer.appendChild(resultsText);
        }
        if (computerSelection === "paper") {
            resultsText.textContent = "You lose! Paper covers rock.";
            resultsContainer.appendChild(resultsText);
            computerWinCounter++;
        }
        if (computerSelection === "scissors") {
            resultsText.textContent = "You win! Rock breaks scissors.";
            resultsContainer.appendChild(resultsText);
            playerWinCounter++;
        }
    }
    
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            resultsText.textContent = "Tie!";
            resultsContainer.appendChild(resultsText);
        }
        if (computerSelection === "rock") {
            resultsText.textContent = "You win! Paper covers rock.";
            resultsContainer.appendChild(resultsText);
            playerWinCounter++;
        }
        if (computerSelection === "scissors") {
            resultsText.textContent = "You lose! Scissors cuts paper.";
            resultsContainer.appendChild(resultsText);
            computerWinCounter++;
        }
    }
    
    if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            resultsText.textContent = "Tie!";
            resultsContainer.appendChild(resultsText);
        }
        if (computerSelection === "paper") {
            resultsText.textContent = "You win! Scissors cuts paper.";
            resultsContainer.appendChild(resultsText);
            playerWinCounter++;
        }
        if (computerSelection === "rock") {
            resultsText.textContent = "You lose! Rock breaks scissors.";
            resultsContainer.appendChild(resultsText);
            computerWinCounter++;
        }
    }

    runningScoreText.textContent = "Player: " + playerWinCounter + "   **********   Computer: " + computerWinCounter;
    runningScoreContainer.appendChild(runningScoreText);

    if (playerWinCounter === 3) {
        endgameText.textContent = "Player wins 3 - " + computerWinCounter + ".";
        endgameContainer.appendChild(endgameText);
        resetButton.textContent = "Play again?";
        resetContainer.appendChild(resetButton);
        container2.removeChild(rockButton);
        container2.removeChild(paperButton);
        container2.removeChild(scissorsButton);
    }
    if (computerWinCounter === 3) {
        endgameText.textContent = "Computer wins 3 - " + playerWinCounter + ".";
        endgameContainer.appendChild(endgameText);
        resetButton.textContent = "Play again?";
        resetContainer.appendChild(resetButton);
        container2.removeChild(rockButton);
        container2.removeChild(paperButton);
        container2.removeChild(scissorsButton);
    }
}  

rockButton.addEventListener('click', () => {
    playerChoice = "rock";
    
    let myComputerChoice = getComputerChoice();

    // Mutating player choice image
    if (playerChoiceImageContainer.childNodes.length === 0) {
        // Container is empty
        playerChoiceImageContainer.appendChild(rockImage1);
    } else {
        // Container is not empty
        playerChoiceImageContainer.replaceChild(rockImage1, playerChoiceImageContainer.childNodes[0]);
    }

    // Mutating computer choice image
    if (myComputerChoice === "rock") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(rockImage2);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(rockImage2, computerChoiceImageContainer.childNodes[0]);
        }
    }
    if (myComputerChoice === "paper") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(paperImage1);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(paperImage1, computerChoiceImageContainer.childNodes[0]);
        }
    }
    if (myComputerChoice === "scissors") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(scissorsImage1);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(scissorsImage1, computerChoiceImageContainer.childNodes[0]);
        }
    }

    singleRound(playerChoice, myComputerChoice);

    
    
});

paperButton.addEventListener('click', () => {
    playerChoice = "paper";
    
    let myComputerChoice = getComputerChoice();
    singleRound(playerChoice, myComputerChoice);
    
    // Mutating player choice image
    if (playerChoiceImageContainer.childNodes.length === 0) {
        // Container is empty
        playerChoiceImageContainer.appendChild(paperImage1);
    } else {
        // Container is not empty
        playerChoiceImageContainer.replaceChild(paperImage1, playerChoiceImageContainer.childNodes[0]);
    }

     // Mutating computer choice image
     if (myComputerChoice === "rock") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(rockImage1);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(rockImage1, computerChoiceImageContainer.childNodes[0]);
        }
    }
    if (myComputerChoice === "paper") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(paperImage2);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(paperImage2, computerChoiceImageContainer.childNodes[0]);
        }
    }
    if (myComputerChoice === "scissors") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(scissorsImage1);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(scissorsImage1, computerChoiceImageContainer.childNodes[0]);
        }
    }
});

scissorsButton.addEventListener('click', () => {
    playerChoice = "scissors";
    
    let myComputerChoice = getComputerChoice();
    singleRound(playerChoice, myComputerChoice);

    // Mutating player choice image
    if (playerChoiceImageContainer.childNodes.length === 0) {
        // Container is empty
        playerChoiceImageContainer.appendChild(scissorsImage1);
    } else {
        // Container is not empty
        playerChoiceImageContainer.replaceChild(scissorsImage1, playerChoiceImageContainer.childNodes[0]);
    }

     // Mutating computer choice image
     if (myComputerChoice === "rock") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(rockImage1);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(rockImage1, computerChoiceImageContainer.childNodes[0]);
        }
    }
    if (myComputerChoice === "paper") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(paperImage1);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(paperImage1, computerChoiceImageContainer.childNodes[0]);
        }
    }
    if (myComputerChoice === "scissors") {
        if (computerChoiceImageContainer.childNodes.length === 0) {
            // Container is empty
            computerChoiceImageContainer.appendChild(scissorsImage2);
        } else {
            // Container is not empty
            computerChoiceImageContainer.replaceChild(scissorsImage2, computerChoiceImageContainer.childNodes[0]);
        }
    }
});

resetButton.addEventListener('click', () => {
    playerWinCounter = 0;
    computerWinCounter = 0;
    container2.appendChild(rockButton);
    container2.appendChild(paperButton);
    container2.appendChild(scissorsButton);
    resetContainer.removeChild(resetButton);
    resultsContainer.removeChild(resultsText);
    endgameContainer.removeChild(endgameText);
    runningScoreContainer.removeChild(runningScoreText);
    // Remove images from playerChoiceImageContainer
    if (playerChoiceImageContainer.childNodes.length === 0) {
        // Container is empty
        playerChoiceImageContainer.appendChild(transparentImage);
    } else {
        // Container is not empty
        playerChoiceImageContainer.replaceChild(transparentImage, playerChoiceImageContainer.childNodes[0]);
    }

    // Remove images from computerChoiceImageComtainer
    if (computerChoiceImageContainer.childNodes.length === 0) {
        // Container is empty
        playerChoiceImageContainer.appendChild(transparentImage);
    } else {
        // Container is not empty
        computerChoiceImageContainer.replaceChild(transparentImage, computerChoiceImageContainer.childNodes[0]);
    }
});
