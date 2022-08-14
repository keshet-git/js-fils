
//console.dir(window);
//console.log(window.innerWidth);
//console.log(window.innerHeight);

//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://googel.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//myButton.addEventListener("click", () => window.open("https://www.youtube.com//watch?v=fh7PUIM5ouY"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());
//window.alert("hellov👨🏼‍🍳");
//window.confirm("press ok to coninue");

let age = window.prompt("Enter your age");
if(age < 18){
  window.alert('you must be 18+ to visit this site');
  window.close();
}