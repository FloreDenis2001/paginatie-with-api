createButtons(50,6);
createPage(1);

let paginationBtn=document.querySelector(".pagination .list");
let cardsZone=document.querySelector(".cards");
let modalZone=document.querySelector(".modal");



paginationBtn.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains("number")){
        cardsZone.innerHTML=" ";
        createPage(obj.textContent);
    } 
})


modalZone.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains('exit-btn')){
        modalZone.innerHTML=" ";
        modalZone.style.display='none';
    }else if(obj.classList.contains('prevBtn')){
          let container=obj.parentNode;
          console.log(container);
    }
})



