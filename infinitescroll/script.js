let main = document.querySelector(".main");
let count = 50;
let limit=0;
let element = [];

 function rendered() {
    for(let i=limit; i<count; i++){

        let elem = document.createElement("div");
        elem.setAttribute("class", "data");
        elem.innerHTML = i+1;
        
        element.push(elem);
    }
    
    limit = count;
    count = count+limit;
    main.append(...element);
}


window.addEventListener("scroll",()=>{
    if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 0){
        rendered();
    }
})

rendered();