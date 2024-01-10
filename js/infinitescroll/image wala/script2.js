let body = document.querySelector('.main');

let element=[];


async function renderer(){

    let response = await fetch('data.json');
    let data = await response.json();
    console.log(data);

    element = data.data.map(item => {
        let elem = document.createElement('img');
        let link = item.imageUrl;
        console.log(link);
        elem.setAttribute('src', link);
        return elem;
      });
      
      body.append(...element);  
}





document.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 10){
        renderer();
    }
} )

renderer();
