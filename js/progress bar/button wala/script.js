const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const startButton = document.getElementById("button");
const Loadstatus = document.getElementById("status");

let value =0;

function progress(){
  progressText.style.color = value > 49 ? "white" : "black";
  progressText.innerHTML = `${value}%`;
//   progressBar.style.width = `${value}%`;
  progressBar.style.transform = `scaleX(${value / 100})`;
  progressBar.style.backgroundColor = "#00c251";
}

function onComplete(){
    Loadstatus.innerHTML = "Completed";
    startButton.disabled = false;
}

function start(){

    startButton.disabled = true;
    Loadstatus.innerHTML = "Loading...";

    value = 0;

    const intervalId  = setInterval(()=>{
        value = Math.min(100,Math.max(value + 1,0));
        
        progress();
        if(value >= 100){
            clearInterval(intervalId);
            onComplete();
           
        }

    },40)

}

