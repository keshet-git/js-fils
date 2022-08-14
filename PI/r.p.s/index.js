const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resulttext = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `player: ${player}`;
  computerText.textContent = `computer: ${computer}`;
  resulttext.textContent = checkWinner();
}));

function computerTurn(){

  const randNum = Math.floor(Math.random() *3) + 1;

  switch(randNum){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 2:
      computer = "SCISSORS";
      break;
  }
};
function checkWinner(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer === "ROCK"){
    return (player == "PAPER") ? "You Win" : "YouLose!"
  }
  else if(computer === "PAPER"){
    return (player == "SCISSORS") ? "You Win" : "YouLose!"
  }
  else if(computer === "SCISSORS"){
    return (player == "ROCK") ? "You Win" : "YouLose!"
  }
};