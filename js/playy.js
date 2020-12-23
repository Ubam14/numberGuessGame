let userHistory = [];

let computerNumber = getRandomNumber();
console.log(computerNumber);

window.onload = () => {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

function playGame () {
    let numberGuess = document.getElementById("number-guess").value;
    displayResult(numberGuess);
    getDialogue();
    saveHistory(numberGuess);
    displayHistory();
}


function displayResult(number) {
    if(number > computerNumber){
        showNumberAbove();
    }else if (number < computerNumber){
        showNumberBelow();
    }else{
        showYouWon();
    }
}


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() *100) +1;
    return randomNumber;
}


function getDialogue(dialogueType, text){
    let dialogue;

    switch (dialogueType) {
        case "warning":
            dialogue = "<div class ='alert alert-warning' rule ='alert'>"
            break;
        case "won":
            dialogue = "<div class ='alert alert-success' rule ='alert'>"
        default:
            break;
    }

    dialogue += text;
    dialogue += "</div>";
    return dialogue;

}



function showNumberAbove() {
    const text = "Sorry your guess is too high";

    let message = getDialogue("warning", text);
    document.getElementById("result").innerHTML = message;

    // console.log(text);
}

function showNumberBelow() {
    const text = "Sorry your guess is too low";
    
    let message = getDialogue("warning", text);
    document.getElementById("result").innerHTML = message;

    // console.log(text);
}

function showYouWon() {
    const text = "Congratulations your guess was right";

    let message = getDialogue("won", text);
    document.getElementById("result").innerHTML = message;

    // console.log(text);
}


function saveHistory(guess) {
    userHistory.push(guess);
    console.log(userHistory);
}


function displayHistory() {
    let list = "<ul class='list-group'>"

    let index = 0;
    while(index < userHistory.length){
    list += "<li class='list-group-item'>" + 'You guessed ' + userHistory[index] + "</li>";
    index+=1;
    }

    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}

function initGame() {
    let computerNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    userHistory = [];
    displayHistory();

}