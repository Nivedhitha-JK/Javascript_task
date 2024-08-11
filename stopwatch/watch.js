

const display = document.getElementById("display");
let timer = null; // hold id of setInterval
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){

  if(!isRunning){
    startTime = Date.now() - elapsedTime;
    console.log(startTime); // in milliseconds
    timer = setInterval(update,10);
    console.log(timer); // timer stores unique Id to work with this function if need to stop it
    isRunning = true;
  }
}

function stop(){

  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}


// to update display
function update(){
  
const currentTime = Date.now();
elapsedTime = currentTime - startTime;
console.log(elapsedTime); // in milliseconds, convert into readable format using hours,minutes,seconds and ms


let hours = Math.floor(elapsedTime/(1000 * 60 * 60)); //convert ms to hours formula
let minutes = Math.floor(elapsedTime/(1000 * 60)%60); // convert ms to minutes formula
let seconds = Math.floor(elapsedTime / 1000 % 60); // convert ms to seconds
let milliseconds = Math.floor(elapsedTime % 1000 / 10); //elapsedTime 4 digits / 10 to get 1st 2 digits

hours = String(hours).padStart(2,0);
minutes = String(minutes).padStart(2,0);
seconds = String(seconds).padStart(2,0);
milliseconds = String(milliseconds).padStart(2,0);


display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

