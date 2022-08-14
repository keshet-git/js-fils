let grade = 'C';

switch(grade){
  case 'A':
    console.log("you did great!");
    break;
  case 'B':
    console.log("you did good!");
    break;
  case 'C':
    console.log("you did okay!");
    break;
  case 'D':
    console.log("you passed ...barely!");
    break;
  case 'F':
    console.log("you FALED!");
    break;
  default:
    console.log(grade, "is not a letter grade");
}