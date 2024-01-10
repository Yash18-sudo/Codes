const value = document.getElementById("value");
const progressBar = document.querySelector("#progress-bar");
let percent =0;


function progress(){
percent>=49?value.style.color="white":value.style.color="black";
value.innerHTML = `${percent}%`;
progressBar.style.width = `${percent}%`;
progressBar.style.backgroundColor = "#00c251";
}

function start(){
    percent=0;

    const interval = setInterval(()=>{
        percent = Math.min(100,Math.max(percent+1,0));
        console.log(percent);
        progress();
       if(percent >= 100){
        clearInterval(interval);           
       }
    },10)

    
}

 start();


