let paginationSection=document.querySelector(".pagination");
let cardsSection=document.querySelector(".cards");
let asideContainer=document.querySelector(".modal");
let asideEdit=document.querySelector(".edit-container");
let searchZone=document.querySelector(".search-container");
let sortMeniuZone=document.querySelector(".sort-meniu");
createButtons(data,6);
createPage(1);

paginationSection.addEventListener("click",(e)=>{
    let obj=e.target;

    if(obj.classList.contains("number")){

        let number =+obj.firstChild.textContent;

        createPage(number);
        
    }
})

cardsSection.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains('img-card')){
        let container=obj.parentNode;
        asideContainer.style.display='flex';
        let findObject=findObjectByEmail(data,container.children[2].textContent);
        asideContainer.appendChild(createModal(findObject));
    }
})


asideContainer.addEventListener("click",(e)=>{
      let obj=e.target;
      if(obj.classList.contains('exit-btn')){
        asideContainer.style.display='none';
        asideContainer.removeChild(asideContainer.children[0]);
      }else if(obj.classList.contains('edit-modal')){
        asideContainer.style.display='none';
        asideEdit.style.display='flex';   
        let container=obj.parentNode.parentNode;
        let findObject=findObjectByEmail(data,container.children[3].textContent);
        asideEdit.appendChild(editCreate(findObject));
    }else if(obj.classList.contains('delete-modal')){
        let container=obj.parentNode.parentNode;
        let findObject=findObjectByEmail(data,container.children[3].textContent);
        data=removeByEmail(data,findObject.email);
        cardsSection.innerHTML=" ";
        createPage(1);
        asideContainer.style.display='none';
        asideContainer.removeChild(asideContainer.children[0]);
    }else if(obj.classList.contains('prevBtn')){
        let containerPrev=obj.parentNode;
        let positionData=findPositionByEmail(data,containerPrev.children[3].textContent);
        if(data.length>=positionData-1 && positionData-1>=0){
        asideContainer.appendChild(createModal(data[positionData-1]));
        asideContainer.removeChild(asideContainer.children[0]);
        }else {
            alert("ACESTA ESTE PRIMUL ELEMENT");
            asideContainer.appendChild(createModal(data[data.length-1]));
            asideContainer.removeChild(asideContainer.children[0]);
        }
    }else if(obj.classList.contains('nextBtn')){
        let containerPrev=obj.parentNode;
        let positionData=findPositionByEmail(data,containerPrev.children[3].textContent);
        if(data.length-1>=positionData+1){
        asideContainer.appendChild(createModal(data[positionData+1]));
        asideContainer.removeChild(asideContainer.children[0]);
        }else{
            alert("ULTIMUL ELEMENT A FOST VAZUT");
            asideContainer.appendChild(createModal(data[0]));
            asideContainer.removeChild(asideContainer.children[0]);
        }
    }
})


asideEdit.addEventListener("click",(e)=>{
    let obj=e.target;
    let container=obj.parentNode.parentNode;
    let positionDataEdit=findPositionByEmail(data,container.children[2].value);
    let containerImg=container.children[0];
    let containerInputImg=containerImg.children[1];

    
    if(obj.classList.contains("cancel-btn")){
        asideEdit.style.display='none'; 
        asideContainer.style.display='flex';
        asideEdit.innerHTML=" ";
    }else if(obj.classList.contains("save-btn")){
        let valueName=container.children[1].value;
        if(valueName.value!=""){
        updateName(data,positionDataEdit,valueName);
        }
    
        let valueImg=containerInputImg.children[1].value;
        if(valueImg.value){
        updateImg(data,positionDataEdit,valueImg);
        }



        cardsSection.innerHTML=" ";
        createPage(1);
        asideEdit.style.display='none'; 
        asideEdit.innerHTML=" "; 
        asideContainer.style.display='none';
        asideContainer.removeChild(asideContainer.children[0]);
    }
})

searchZone.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains('search-zone')){
        let inputValue=searchZone.children[0].value;
        if(findByName(data,inputValue)!=null){
        asideContainer.style.display='flex';
        asideContainer.appendChild(createModal(findByName(data,inputValue)));
    }else {
        alert("Numele introdus incorect");
    }
}
})


sortMeniuZone.addEventListener("change",(e)=>{

    if(sortMeniuZone.value==='nume'){
        cardsSection.innerHTML=" ";
        paginationSection.children[0].innerHTML=" ";
        createButtons(sortByName(data),6);
        createPage(1);
    }else if(sortMeniuZone.value==='email'){
        cardsSection.innerHTML=" ";
        paginationSection.children[0].innerHTML=" ";
        createButtons(sortByEmail(data),6);
        createPage(1);
    }
})