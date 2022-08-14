const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currantTime = 0;
let pause = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if(pause){
    pause = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if(!pause){
    pause = true;
    elapsedTime =Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  pause = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currantTime = 0;
  pause = true;
  intervalId;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime(){
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit;
  }

}
