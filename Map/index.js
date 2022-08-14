
/*
const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

//let shoppingCart = 0;

//shoppingCart += store.get("t-shirt");
//shoppingCart += store.get("underwear");
//console.log(shoppingCart);

//store.set("hat", 40);
//store.delete("hat")

console.log(store.has("underwear"));

console.log(store.size);
store.forEach((value, kay) => console.log(`${kay} $${value}`));
*/
/*
const car1 ={
  model:"Mustang",
  color:"red",
  year:2023,

  drive : function(){
    console.log("you drive the car");
  },
  break : function(){
    console.log("you stop on the brakes");
  }
}

const car2 ={
  model:"Corvette",
  color:"blue",
  year:2024,

  drive : function(){
    console.log("you drive the car");
  },
  break : function(){
    console.log("you stop on the brakes");
  }
}
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.break();
*/
/*
const car1 = {
  model:"Mustang",
  color:"red",
  year:2023,

  drive : function(){
    console.log(`you drive the ${this.model}`);
  }
}

const car2 = {
  model:"Corvette",
  color:"blue",
  year:2024,

  drive : function(){
    console.log(`you drive the ${this.model}`);
  }
}

car1.drive();
car2.drive();
*/

//this.name = "myCoolWindow";
//console.log(this.name);
/*
class Player{
  score = 0;

  pause(){
    console.log("you paused the game");
  }
  exit(){
    console.log("you exited the game");
  }
}

const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();
const Player4 = new Player();

Player1.score += 1;

console.log(Player1.score);
console.log(Player2.score);

Player1.pause();
Player2.exit();
*/
//constructor
/*
class Student{

  constructor(name, age, gqa){
    this.name = name;
    this.age = age;
    this.gqa = gqa;
  }
  study(){
    console.log(`${this.name} is Studying`);
  }
}

const Student1 = new Student("Spongebob", 30, 3.2);
const Student2 = new Student("Mishel", 35, 1.5);
const Student3 = new Student("Sandy", 27, 4.0);

console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.gqa);
Student1.study();

console.log(Student2.name);
console.log(Student2.age);
console.log(Student2.gqa);
Student2.study();

console.log(Student3.name);
console.log(Student3.age);
console.log(Student3.gqa);
Student3.study();
*/

//static
/*
class Car{

  static numberOfCars = 0;


  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;
  }

  static startRace(){
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("farrari");
const car5 = new Car("Lambo");

Car.startRace();
*/
/*
class Animal{

  alive = true;
 
  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
 
}


class Rabbit extends Animal{

 
  name = "rabbit";

  
  run(){
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal{

  name = "fish";

 
  swim(){
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal{

 
  name = "hawk";

  
  fly(){
    console.log(`This ${this.name} is flaying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
*/
/*
class Animal{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal{

  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;

  }
}


class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;

  }
  
}
class Hawk extends Animal{
  constructor(name, age, flaySpeed){
    super(name, age);
    this.flaySpeed = flaySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("ron", 2, 80);
const hawk = new Hawk("deg", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flaySpeed);
*/
//get
/*
class Car{
  constructor(power){
    this._gas = 50;
    this._power = power
  }
  get power(){
    return `${this._power}hp`;
  }
  get gas(){
    return `${this._gas}L (${this._gas / 50 * 100}%)`;
  }
  set gas(value){
    if(value > 50){
      value = 50;
    }
    else if(value < 0){
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);

car.gas = -100;

console.log(car.power);
console.log(car.gas);
*/
/*
class Car{

  constructor(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
  }

}
const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambog", 2022, "yellow",);
 
changeColor(car3, "gold");
displayInfo(car3);


function displayInfo(car){
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}
function changeColor(car, color){
  car.color = color;
}


*/
/*
class Car{

  constructor(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive(){
    console.log(`you drive the ${this.model}`);
  }

}
const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambog", 2022, "yellow",);
const car4 = new Car("Ferrari", 2025, "white",);

const cars = [car1, car2, car3, car4];

//console.log(cars[0].model);
//console.log(cars[1].model);
//console.log(cars[2].model);
 
//cars[0].drive();
//cars[1].drive();
//cars[2].drive();

startRace(cars);

function startRace(cars){
  for(const car of cars){
    car.drive();
  }
}
*/
/*
class Card{
  constructor(value, suit){
    this.value = value;
    this.suit = suit;
  }
}

//let card1 = new Card("A", "Hearts");
//let card2 = new Card("A", "Spades");
//let card3 = new Card("A", "Diamonde");
//let card4 = new Card("A", "Clubs");
//let card5 = new Card("2", "Hearts");
//let card6 = new Card("2", "Spades");
//let card7 = new Card("2", "Diamonde");
//let card8 = new Card("2", "Clubs");

let cards = [new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonde"),
            new Card("A", "Clubs"),
            new Card("2", "Hearts"),
            new Card("2", "Spades"),
            new Card("2", "Diamonde"),
            new Card("2", "Clubs"),
]


//console.log(card1.value + card1.suit);
//console.log(cards[5].value + cards[5].suit);
cards.forEach(card => console.log(`${card.value} ${card.suit}`));
*/

try{
  let x = window.prompt("Enter a #");
  x = Number(x);

  if(isNaN(x)) throw "that wasn't a number!";
  if(x == "") throw "that was empty!";

  console.log(`${x} is a number`);
}
catch(error){
  console.log(error);
}
finally{
  console.log("this always executes");
}