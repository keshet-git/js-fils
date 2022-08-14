
let firstName = "keshet";
let age = 21;
let stodent = true;



console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled", stodent);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + stodent;

let stodents = 20;

//stodents = stodents + 1;
//stodents = stodents - 1;
//stodents = stodents * 2;
//stodents = stodents / 2;
//let extraStudents = stodents % 3;

stodents /= 2;

console.log(stodents);