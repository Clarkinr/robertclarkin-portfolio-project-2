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
        })
    } 
})

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

function runGame() {
    if (userScore === compScore) {
        console.log("Game is a draw");
    } else {
        console.log("Game is not a Draw");
    }
}


function checkWinner() {

}

function userWinner() {

}

function computerWinner() {

}