//const nameTag = document.createElement("hi");
//nameTag.textContent = window.prompt("Enter your name");
//document.body.append(nameTag);

const myList = document.querySelector("#fruts");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);