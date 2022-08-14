let userName = "keshet";
let items = 3;
let total = 75;

//console.log("hello", userName);
//console.log('you have', items, "items in your cart");
//console.log("your total is $", total);

//console.log(`hello ${userName}`);
//console.log(`you have ${items} items in your cart`);
//console.log(`your total is $${total}`);

let text =  
`hello ${userName} <br>
you have ${items} items in your cart <br>
your total is $${total}<br>`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;