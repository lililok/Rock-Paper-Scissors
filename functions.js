const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
score.textContent = "Running score";
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
        let scorePlayer = 'Player: ' + playerCount;
        let scoreComputer = 'Computer: ' + computerCount;

        score.innerHTML = scorePlayer + '<br>' + scoreComputer;
        if (playerCount === 5 || computerCount === 5) {
            if (playerCount > computerCount) {
                score.innerHTML = "The winner is Player!";
            } else if (computerCount > playerCount) {
                score.innerHTML = "The winner is Computer!";
            } else {
                score.innerHTML = "A tie i guess?";
            }
            
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    });
});
