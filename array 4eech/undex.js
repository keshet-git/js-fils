

let student = ["mary", "sozn", "bob"];
student.forEach(capitalize);
student.forEach(print);

function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
  console.log(element);
}