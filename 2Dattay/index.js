
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoos"];
let meats = ["eggs", "chicken", "fish"];

let grocetyList = [fruits, vegetables, meats];

grocetyList[2][2] = "steak";

for(let list of grocetyList){
  for(let food of list){
    console.log(food);
  }
}