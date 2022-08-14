/*
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 2000, item, price);
let timer2 = setTimeout(secondMessage, 4000);
let timer3 = setTimeout(thirdMessage, 8000);



function firstMessage(item, price){
  alert(`Buy this ${item} for $${price}`);
}

function secondMessage(){
  alert(`this is not a scam!`);
}

function thirdMessage(){
  alert(`Do it`);
}

document.getElementById("myButton").onclick = function(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`thanks for buying 🙏`);
}
*/

let count = 0;
let max = window.prompt("count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
  count+=1
  console.log(count);
  if(count >= max){
    clearInterval();
  }
}