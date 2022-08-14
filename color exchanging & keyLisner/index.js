const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

/*
innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);

function changeRed(){
  innerDiv.style.backgroundColor = "red";
}

function changeGreen(){
  innerDiv.style.backgroundColor = "lightgreen";
}
*/
innerDiv.addEventListener("click", changeblue);
outerDiv.addEventListener("click", changeblue, true);

function changeblue(){
  alert(`you selecter ${this.id}`);
  this.style.backgroundColor = "lightblue";
}