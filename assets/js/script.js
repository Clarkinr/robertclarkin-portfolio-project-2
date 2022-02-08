document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
    button.addEventListener('click', function() {
        if (this.getAttribute("data-type") === "rock") {
            alert("you have chosen rock");
        } else if (this.getAttribute("data-type") === "paper") {
            alert("you have chosen paper");
        } else if (this.getAttribute("data-type") === "scissors") {
            alert("you have chosen scissors");
        } else if (this.getAttribute("data-type") === "lizard") {
            alert("you have chosen lizard");
        } else if (this.getAttribute("data-type") === "spock") {
            alert("you have chosen spock");
        }
    })    
    } 
})



let wins = 0;
let losses = 0;

let wins_num = document.getElementById("wins");
let losses_num = document.getElementById("losses");
let userChoice = "";
let computerChoice = "";




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