document.getElementById("myButton").onclick = function(){

  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");
    if(myCheckBox.checked){
      console.log("you are subscribed");
    }
    else{
      console.log("you are NOT subscribed");
    }

    if(visaBtn.checked){
      console.log("you are paying with a Visa!");
    }
    else if(mastercardBtn.checked){
      console.log("you are paying with a Mastercard!");
    }
    else if(paypalBtn.checked){
      console.log("you are paying with a paypalcard!");
    }
    else{
      console.log("you must select a payment type")
    }
}