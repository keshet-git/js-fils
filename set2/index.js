/*
let count = 0;
let max = window.prompt("count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
  count+=1;
  console.log(count);
  if(count >= max){
    clearInterval(myTimer);
  }
}
*/

//let date = new Date();
//let date = new Date(0);
//let date = new Date(2023, 5, 1,2, 3, 4, 5);
/*
let year = date.getFullYear();
let dayOfManth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();


date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/
//date = date.toLocaleString();
/*
document.getElementById("myLabel").innerHTML = formatTime(date);

function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();

  return `${month}/${day}/${year}`
}
function formatTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = (hours % 12) || 12;

  return `${hours}:${seconds}:${minutes} ${amOrPm}`
}
*/
/*
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){

  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date){
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hour >= 12 ? "pm" : "am"; 

    hour = (hour % 12) || 12;

    hour = formatZeroes(hour);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hour}:${minutes}:${seconds} ${amOrPm}` ;
  }
  function formatZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
*/
/*
console.log("START");
//console.log("This step is synchronous");
setTimeout(() => console.log("this is asynchronous"), 5000);
console.log("END");
*/
//start
//console.time("Response time");

//alert("CLICK THE OK BUTTON");
//setTimeout(() => console.log("Hello!"), 3000);

//end
//console.timeEnd("Response time");

