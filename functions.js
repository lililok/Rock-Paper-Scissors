const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
let playerCount = 0;
let computerCount = 0;

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


/*for (let i = 0; i < 5; i++) {
    let gameResult = playGame();
    console.log(gameResult);
    if (gameResult.includes("Lose")) {
        computerCount++;
    } else if (gameResult.includes("Win")) {
        playerCount++;
    }
    console.log(computerCount + " | Computer Score")
    console.log(playerCount + " | Player Score")
}*/

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        results.textContent = result;
        if (result.includes("Lose")) {
            computerCount++;
        } else if (result.includes("Win")) {
            playerCount++;
        }
        let runningScore = computerCount + " | Computer Score";
        result += runningScore;
        runningScore = playerCount + " | Player Score";
        result += runningScore;
        results.textContent = result;
    });
});

/*if (playerCount > computerCount) {
    console.log("The winner is Player!");
} else if (computerCount > playerCount) {
    console.log("The winner is Computer");
} else {
    console.log("A tie i guess?");
}*/