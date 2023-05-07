let playerCount = 0;
let computerCount = 0;
let roundCount = 0;
let playerScore = document.getElementById("playerscore"); 
let computerScore = document.getElementById("computerscore");
let result = document.getElementById("result");
let youPicked = document.getElementById("youPicked");
let computerPicked = document.getElementById("computerPicked");
let playerSelectionBtn = document.querySelectorAll(".playerSelection");
let reset_stats = document.querySelectorAll(".reset_stats");

function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * arr.length)];
}

playerSelectionBtn.forEach(button => {
    button.addEventListener('click', () => {
        checkScore();
        playRound(button.id, getComputerChoice());
    });
});

function checkScore(){
    if(playerCount == 5 || computerCount == 5) {
        if(playerCount == 5){
            alert("Congratulations! You won!");
            restartGame();
            return;
        } else if(computerCount == 5) {
            alert("Ops! Computer won!");
            restartGame();
            return;
        }
    } 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    youPicked.textContent = "You picked: " + playerSelection;
    computerPicked.textContent = "Computer picked: " + computerSelection;

    roundCount++;

     if(playerSelection == "rock" && computerSelection == "paper"){
        computerCount++;
        computerScore.textContent = "Computers score: " + computerCount;
        result.textContent = "You lose, paper beats rock"; 
        return;
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerCount++;
        playerScore.textContent = "Your score: " + playerCount;
        result.textContent = "You win, rock beats scissors";
        return;
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerCount++;
        computerScore.textContent = "Computers score: " + computerCount;
        result.textContent = "You lose, rock beats scissors";
        return;
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerCount++;
        playerScore.textContent = "Your score: " + playerCount;
        result.textContent = "You win, scissors beats paper";
        return;
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerCount++;
        computerScore.textContent = "Computers score: " + computerCount;
        result.textContent = "You lose, scissors beats paper";
        return;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        playerCount++;
        playerScore.textContent = "Your score: " + playerCount;
        result.textContent = "You win, paper beats rock";
        return;
    } else if(playerSelection == computerSelection){
        result.textContent = "Draw";
    }
}

function restartGame(){
    reset_stats.forEach(button => {
        button.textContent = '';
    })

    playerCount = 0;
    computerCount = 0;
    roundCount = 0;
}