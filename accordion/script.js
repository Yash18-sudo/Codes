let toggle = document.querySelector('.quest');
let sign  = document.querySelector('#sign');
let answer = document.querySelector('#answer');
let check = false;


toggle.addEventListener('click',(e)=>{

    if(e.target.tagName ==="SPAN"){
        if(check == false){
            sign.innerHTML = '-';
            answer.style.display = 'block';
            check = true;
        }

        else if(check == true){
            sign.innerHTML = '+';
            answer.style.display = 'none';
            check = false;
        }

        
    }
});

