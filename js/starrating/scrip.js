let container = document.querySelector('.star-container');
let star = document.querySelectorAll('.star');
let fill=0;

container.addEventListener('click',(e)=>{
    let clickedStar = e.target.dataset.index;
    for(let i=0;i<fill;i++){
        star[i].classList.remove('class', 'rated-star');
    }

    for(let i=0 ; i<clickedStar ; i++)
    {
        star[i].classList.add('class', 'rated-star');
    }
    fill = clickedStar

});

container.addEventListener('mouseover',(e)=>{
    let clickedStar = e.target.dataset.index;
    for(let i=0;i<fill;i++){
        star[i].classList.remove('class', 'rated-star');
    }

    for(let i=0 ; i<clickedStar ; i++)
    {
        star[i].classList.add('class', 'rated-star');
    }
    fill = clickedStar

});