let playerCount = 0;
let computerCount = 0;
let roundCount = 0;
let rock = document.getElementById("rock").addEventListener("click",() => handleClick("rock"));
let paper = document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
let scissors = document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));
let playerScore = document.getElementById("playerscore"); 
let computerScore = document.getElementById("computerscore");
let result = document.getElementById("result");
let youPicked = document.getElementById("youPicked");
let computerPicked = document.getElementById("computerPicked");

function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)];
}

function handleClick(playerSelection){
    let computerSelection = getComputerChoice();
    game(playerSelection, computerSelection);
}

function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);

        /*if(playerCount > computerCount){
            return "You won!";
        } else if(playerCount == computerCount){
            return "Draw";
        } else {
            return "You lost!";
        }*/
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    youPicked.innerHTML = "You picked: " + playerSelection;
    computerPicked.innerHTML = "Computer picked: " + computerSelection;

    roundCount++;

    if(playerSelection == "rock" && computerSelection == "paper"){
        ++computerCount;
        computerScore.innerHTML = "Computers score: " + computerCount;
        result.innerHTML = "You lose, paper beats rock"; 
        return;
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        ++playerCount;
        playerScore.innerHTML = "Your score: " + playerCount;
        result.innerHTML = "You win, rock beats scissors";
        return;
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        ++computerCount;
        computerScore.innerHTML = "Computers score: " + computerCount;
        result.innerHTML = "You lose, rock beats scissors";
        return;
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        ++playerCount;
        playerScore.innerHTML = "Your score: " + playerCount;
        result.innerHTML = "You win, scissors beats paper";
        return;
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        ++computerCount;
        computerScore.innerHTML = "Computers score: " + computerCount;
        result.innerHTML = "You lose, scissors beats paper";
        return;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        ++playerCount;
        playerScore.innerHTML = "Your score: " + playerCount;
        result.innerHTML = "You win, paper beats rock";
        return;
    } else if(playerSelection == computerSelection){
        result.innerHTML = "Draw";
    }
}

function restart(){
    roundCount = 0;
    playerCount = 0;
    computerCount = 0;
}