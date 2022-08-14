const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
  let timerId = null;
  let scaleX = 1;
  let scaleY = 1;
//  let x = 0;
//  let y = 0;
//  let degrees = 0;

  timerId = setInterval(frame, 5);

  function frame(){
    if(scaleX <= 0.1 || scaleY <= 0.1){
    //if(x >= 200 || y >= 200){
        clearInterval(timerId);
    }
    else{
      scaleY-=0.01;
      scaleX-=0.01;
      myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
    }
    //if(degrees >= 360){
      //clearInterval(timerId);
     }

      /*
      degrees+=5;
      x+=1;
      y+=1;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";

      //myAnimation.style.transform = "rotateX("+degrees+"deg)";
      //myAnimation.style.transform = "rotateY("+degrees+"deg)";
      myAnimation.style.transform = "rotateZ("+degrees+"deg)";
    }    //if(x >= 200 || y >= 200){
    //  clearInterval(timerId);
  //  }
//    else{
//      x+=1;
//      y+=1;
//      myAnimation.style.left = x + "px";
//      myAnimation.style.top = y + "px";
*/
    }
  
