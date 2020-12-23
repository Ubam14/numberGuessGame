let userHistory = []


let correctNumber = getRandomNumber();
console.log(correctNumber)

window.onload = () => {
    document.getElementById("number-submit").addEventListener("click", playGame);
}


playGame = () => {
  let numberGuess = document.getElementById("number-guess").value;
  console.log(numberGuess);

  displayResult(numberGuess);
  saveGuessHistory(correctNumber);
  
}


displayResult = (numberGuess) => {

  if(numberGuess > correctNumber ){
    showNumberAbove();


  }else if(numberGuess  < correctNumber) {
    showNumberBelow();

  } else {

    console.log("Guess number is equal to computer number")
    showYouWon();

}

}




function getRandomNumber() {

let computerNumber = Math.floor(Math.random()*100) +1;
// console.log(computerNumber);
return computerNumber;

}


function getDialogue(dialogueType, text){
  let dialogue;

  if (dialogueType  === 'warning'){
    dialogue  = "<div class ='alert alert-warning' rule ='alert'>";
  } else if(dialogueType === 'won'){
    dialogue ="<div class ='alert alert-success' rule ='alert'>";
  }
  
  /*
  switch (dialogueType) {
    case "warning":
      dialogue = "<div class ='alert alert-warning' rule ='alert'>"
      break;
    case "won":
      dialogue = "<div class ='alert alert-success' rule ='alert'>"
    default:
      break;
  }
  */
 
  dialogue += text;
  dialogue += "</div>"
  return dialogue;
  
  
  }


function showNumberAbove(){
  const message = "Guess number is greater than computer number";
  

  let dialogue = getDialogue('warning', message);
  document.getElementById("result").innerHTML = dialogue;

}



function showNumberBelow(){
  const message = "Guess numkber is lower than computer number";


}


function showYouWon () {

    const message = "Guess number is equal to computer number";
    let dialogue = getDialogue('won',  message);
    document.getElementById('result').innerHTML = dialogue;
}



function saveGuessHistory(guess) {
  userHistory.push(guess)
  console.log(userHistory);
}