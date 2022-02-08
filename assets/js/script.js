let computerChoice = "";
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
            } else if ((this.getAttribute("data-type") === "paper")) {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-paper"></i>';
            } else if ((this.getAttribute("data-type") === "scissors")) {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-scissors"></i>';
            } else if ((this.getAttribute("data-type") === "lizard")) {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-lizard"></i>';
            } else {
                document.getElementById("user-select").innerHTML = 'USER: <i class="far fa-hand-spock"></i>';
            } 
            generateComputerAnswer();
        })
    } 
})



function rungame() {

}

function generateComputerAnswer() {
    document.getElementById("comp-select").innerHTML = 'CPU: <i class="far fa-hand-rock"></i>';
}



function checkWinner() {

}

function userWinner() {

}

function computerWinner() {

}