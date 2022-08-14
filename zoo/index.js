//let element = document.getElementById("myTitle");
//element.style.backgroundColor = "lightgreen";
/*
let aminols = document.getElementsByName("aminols");

aminols.forEach(aminol => {
  if(aminol.checked){
    console.log(aminol.value);
  }
});
*/

//let vegetables = document.getElementsByTagName("li");
//vegetables[2].style.backgroundColor = "lightgreen";

//let desserts = document.getElementsByClassName("desserts");
//desserts[2].style.backgroundColor = "lightgreen";

//let element = document.querySelector(".desserts");
//element.style.backgroundColor = "lightgreen";

//let element = document.querySelector("[for");
//element.style.backgroundColor = "lightgreen";

let element = document.querySelectorAll("[for]");
element.forEach(element => {
  element.style.backgroundColor = "lightgreen";
})