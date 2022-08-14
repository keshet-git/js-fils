/*
const greeting = function(userName){
  console.log(`hello ${userName}`);
}

greeting("Keshet");
*/

//const greeting = (userName) => console.log(`hello ${userName}`);
//greeting("Keshet");
/*
const percent = function(x, y){
  return x / y * 100;
}
console.log(`${percent(75, 100)}%`);
*/
//const percent = (x, y) =>  x / y * 100;

//console.log(`${percent(45, 50)}%`);
/*
let grades = [100, 50, 70, 90, 80];

grades.sort(descending);
grades.forEach(print);


function descending(x, y){
  return y - x;
}
function print(element){
  console.log(element);
}
*/

let grades = [100, 50, 55, 88, 70, 90, 80];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
