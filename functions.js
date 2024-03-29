function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "It's a tie!";
    }
}

function playGame() {
    let playerSelection = prompt();
    let computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}

let playerCount = 0;
let computerCount = 0;

for (let i = 0; i < 5; i++) {
    let gameResult = playGame();
    console.log(gameResult);
    if (gameResult.includes("Lose")) {
        computerCount++;
    } else if (gameResult.includes("Win")) {
        playerCount++;
    }
    console.log(computerCount + " | Computer Score")
    console.log(playerCount + " | Player Score")
}

if (playerCount > computerCount) {
    console.log("The winner is Player!");
} else if (computerCount > playerCount) {
    console.log("The winner is Computer");
} else {
    console.log("A tie i guess?");
}