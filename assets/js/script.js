let userScore;
let compScore;
/**
 * Add event listeners to buttons which will change the inner html of span id user-select
 * and start game
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
               document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-rock"></i>';
               userScore = "rock";
            } else if ((this.getAttribute("data-type") === "paper")) {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-paper"></i>';
                userScore = "paper";
            } else if ((this.getAttribute("data-type") === "scissors")) {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-scissors"></i>';
                userScore = "scissors";
            } else if ((this.getAttribute("data-type") === "lizard")) {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-lizard"></i>';
                userScore = "lizard";
            } else {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-spock"></i>';
                userScore = "spock";
            } 
            generateComputerAnswer();
            runGame();
        });
    } 
});

/**
 * Generates a random choice for the computer and
 * enters the random choice into the span id comp-select 
 */
 function generateComputerAnswer() {
    this.computerChoice = Math.random();
    if (this.computerChoice < 0.2) {
        document.getElementById("comp-select").innerHTML = 'CPU: <i class="far fa-hand-rock"></i>';
        compScore = "rock";
    } else if (this.computerChoice <= 0.4) {
        document.getElementById("comp-select").innerHTML = 'CPU: <i class="far fa-hand-paper"></i>';
        compScore = "paper";
    } else if (this.computerChoice <= 0.6) {
        document.getElementById("comp-select").innerHTML = 'CPU: <i class="far fa-hand-scissors"></i>';
        compScore = "scissors";
    } else if (this.computerChoice <= 0.8) {
        document.getElementById("comp-select").innerHTML = 'CPU: <i class="far fa-hand-lizard"></i>';
        compScore  = "lizard";
    } else {
        document.getElementById("comp-select").innerHTML = 'CPU: <i class="far fa-hand-spock"></i>';
        compScore  = "spock";
    } 
}
/**
 * Compares variable userScore and compScore to determine winner 
 * and calls the userWinner or compWinner functions.
 */
function runGame() {
    if (userScore === "scissors" && compScore === "paper") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Scissors cuts Paper';
    } else if (userScore === "paper" && compScore === "rock") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Paper covers Rock';
    } else if (userScore === "rock" && compScore === "lizard") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Rock crushes Lizard';
    } else if (userScore === "lizard" && compScore === "spock") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Lizard poisons Spock';
    } else if (userScore === "spock" && compScore === "scissors") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Spock smashes Scissors';
    } else if (userScore === "scissors" && compScore === "lizard") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Scissors decapitates Lizard';
    } else if (userScore === "lizard" && compScore === "paper") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Lizard eats Paper';
    } else if (userScore === "paper" && compScore === "spock") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Paper disproves Spock';
    } else if (userScore === "spock" && compScore === "rock") {
        userWinner();
        document.getElementById("winner").innerHTML = 'Spock vaporizes Rock';
    } else if (userScore === "rock" && compScore === "scissors") {
        userWinner();
        document.getElementById("winner").innerHTML = 'As it always has Rock crushes Scissors';
    } else if (compScore === "scissors" && userScore === "paper") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Scissors cuts Paper';
    } else if (compScore === "paper" && userScore === "rock") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Paper covers Rock';
    } else if (compScore === "rock" && userScore === "lizard") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Rock crushes Lizard';
    } else if (compScore === "lizard" && userScore === "spock") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Lizard poisons Spock';
    } else if (compScore === "spock" && userScore === "scissors") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Spock smashes Scissors';
    } else if (compScore === "scissors" && userScore === "lizard") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Scissors decapitates Lizard';
    } else if (compScore === "lizard" && userScore === "paper") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Lizard eats Paper';
    } else if (compScore === "paper" && userScore === "spock") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Paper disproves Spock';
    } else if (compScore === "spock" && userScore === "rock") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'Spock vaporizes Rock';
    } else if (compScore === "rock" && userScore === "scissors") {
        computerWinner();
        document.getElementById("winner").innerHTML = 'As it always has Rock crushes Scissors';
    } else {
        document.getElementById("winner").innerHTML = 'The game is a draw';
    }
}
/**
 * Increases the span with id Wins by 1 if user wins the game
 */
function userWinner() {
    let userWins = parseInt(document.getElementById("wins").innerText);
    document.getElementById("wins").innerText = ++userWins;
}
/**
 * Increases the span with id losses by 1 if computer wins the game
 */
function computerWinner() {
    let userLoss = parseInt(document.getElementById("losses").innerText);
    document.getElementById("losses").innerText = ++userLoss;
}