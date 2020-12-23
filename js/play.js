let computerNumber = getRandomNumber();
console.log(computerNumber);

window.onload = () => {
    document.getElementById("number-submit").addEventListener("click", playGame);
}


function playGame() {
   let numberGuess = document.getElementById("number-guess").value;
//    console.log(numberGuess);
    displayResult(numberGuess);
}


function displayResult(number) {
if(number > computerNumber){
    showNumberAbove();

} else if(number < computerNumber){
    showNumberBelow();

}else{
 showYouWon();
}

}



function getRandomNumber() {
   let randomNumber = Math.floor(Math.random() * 100) +1;
   return randomNumber;
}



function showNumberAbove() {
    const text = "Your guess is too high";
    console.log(text);
};

function showNumberBelow() {

    const text = "Your guess was too low";
    console.log(text);
};

function showYouWon() {
    const text = "Congratulations your guess is right";
    console.log(text);
};

