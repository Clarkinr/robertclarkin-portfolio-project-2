
let compChoiceDisplay = document.getElementById("comp-select");

/**
 * Add event listeners to buttons which will change the inner html of span id user-select
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
               document.getElementById("user-select").innerHTML = 'USER: ROCK';
            } else if ((this.getAttribute("data-type") === "paper")) {
                document.getElementById("user-select").innerHTML = 'USER: PAPER';
            } else if ((this.getAttribute("data-type") === "scissors")) {
                document.getElementById("user-select").innerHTML = 'USER: SCISSORS';
            } else if ((this.getAttribute("data-type") === "lizard")) {
                    document.getElementById("user-select").innerHTML = 'USER: LIZARD';
            } else if ((this.getAttribute("data-type") === "spock")) {
                    document.getElementById("user-select").innerHTML = 'USER: SPOCK';
            }
        })
    }
})



function rungame() {

}

function generateComputerAnswer() {

}

function displayComputerAnswer() {

}

function displayUserAnswer() {
    
}

function checkWinner() {

}

function userWinner() {

}

function computerWinner() {

}