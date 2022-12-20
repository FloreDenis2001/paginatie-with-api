function createCard(card){
    let containerCard=document.createElement('div');
    containerCard.classList.add("card");

    let cardImg=document.createElement('img');
    cardImg.classList.add("img-card");
    cardImg.src=card.picture.medium;

    let cardName=document.createElement('p');
    cardName.classList.add("card-name");
    cardName.textContent=card.name.first+" "+card.name.last;

    let cardEmail=document.createElement('p');
    cardEmail.classList.add("card-email");
    cardEmail.textContent=card.email;

    let cardLine=document.createElement('hr');
    cardLine.classList.add("card-line");

    let cardRegistered=document.createElement('p');
    cardRegistered.classList.add("card-registered");
    cardRegistered.textContent="Joined " + card.registered.date;


    containerCard.appendChild(cardImg);
    containerCard.appendChild(cardName);
    containerCard.appendChild(cardEmail);
    containerCard.appendChild(cardLine);
    containerCard.appendChild(cardRegistered);

    return containerCard;
}

function attachCards(cards){
    let sectionCards=document.querySelector('.cards');
    sectionCards.innerHTML="";
    for(let i=0;i<cards.length;i++){
        sectionCards.appendChild(createCard(cards[i]));
    }
}

function paginatie(arr,nrOfPage,nrObjects){
    let index = (nrOfPage*nrObjects)-nrObjects;
    let objectarr=[];
    let count=index+nrObjects;
    for(let i=index;i<count;i++){

        objectarr.push(arr[i]); 
          
    }
    return objectarr;
}

function countArr(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        count++;
    }
    return count;
}


function howManyPageWeNeed(arr,nrObjects){
    let numberOfElements=countArr(arr);
    let numberOfPages=0;
    if(numberOfElements%nrObjects===0){
        numberOfPages=numberOfElements/nrObjects;
    }else if(numberOfElements%nrObjects>5){
        numberOfPages=(numberOfElements/nrObjects);
    }else if(numberOfElements%nrObjects<5){
        numberOfPages=(numberOfElements/nrObjects)+1;
    }

    return Math.round(numberOfPages);
}

function createButton(pageNumber){
    let pageLi=document.createElement('button');
    pageLi.classList.add("page-item");
    pageLi.classList.add("number");
    pageLi.textContent=pageNumber;
    
    return pageLi;

}


function createButtons(arr,nrObject){
    let pages=howManyPageWeNeed(arr,nrObject);
    let sectionPages=document.querySelector(".pagination .list");
    for(let i=0;i<pages;i++){
       sectionPages.appendChild(createButton(i+1));
    }
   
}


function createPage(pageNumber){
let filters=paginatie(data,pageNumber,6);
attachCards(filters);
}


function createModal(card){
    let cardModal=document.createElement('div');
    cardModal.classList.add('modal-container');

    let cardImg=document.createElement('img');
    cardImg.src=card.picture.medium;

    let containerNext=document.createElement("div");
    containerNext.classList.add('line-name');
    

    let prevBtn=document.createElement('i');
   
    prevBtn.classList.add('fa-sharp');
    prevBtn.classList.add('fa-solid');
    prevBtn.classList.add('fa-arrow-left');
    prevBtn.classList.add('prevBtn');

    let cardName=document.createElement('p');
    cardName.classList.add('modal-name');
    cardName.textContent=card.name.first+" "+card.name.last;



     let nextBtn=document.createElement('i');
     nextBtn.classList.add('fa-sharp');
     nextBtn.classList.add('fa-solid');
     nextBtn.classList.add('fa-arrow-right');
     nextBtn.classList.add('nextBtn');
   
  

    let cardEmail=document.createElement('p');
    cardEmail.classList.add('email-modal');
    cardEmail.textContent=card.email;


    let buttons=document.createElement('div');
    buttons.classList.add('buttons-container');

    let buttonEdit=document.createElement('button');
    buttonEdit.classList.add('edit-modal');
    buttonEdit.textContent='Edit';

    let buttonExit=document.createElement('button');
    buttonExit.classList.add('exit-btn');
    buttonExit.textContent='X';

    let buttonDelete=document.createElement('button');
    buttonDelete.classList.add('delete-modal');
    buttonDelete.textContent='Delete';
   

    let cardLine=document.createElement('hr');
    cardLine.classList.add("card-line");

    buttons.appendChild(buttonEdit);
    buttons.appendChild(buttonDelete);
    




   

    cardModal.appendChild(buttonExit);
    cardModal.appendChild(cardImg);
    cardModal.appendChild(cardName);
    cardModal.appendChild(cardEmail);
    cardModal.appendChild(cardLine);
    cardModal.appendChild(buttons);
    cardModal.appendChild(prevBtn);
    cardModal.appendChild(nextBtn);


    return cardModal;

}

function findObjectByEmail(arr,email){
    for(let i=0;i<arr.length;i++){
        if(arr[i].email===email){
            return arr[i];
        }
    }
    
}


function editCreate(card){
    let editDiv=document.createElement('div');
    editDiv.classList.add("edit-hover");
    let uploadDiv=document.createElement('div');
    uploadDiv.classList.add('upload');

    let img=document.createElement('img');
    img.src=card.picture.medium;
   
    let roundDiv=document.createElement('div');
    roundDiv.classList.add('round');

    let icon=document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-upload');

    let inputImg=document.createElement('input');
    inputImg.type='file';

    roundDiv.appendChild(icon);
    roundDiv.appendChild(inputImg);
    
    uploadDiv.appendChild(img);
    uploadDiv.appendChild(roundDiv);

    

    let inputEmailCreate=document.createElement('input');
    inputEmailCreate.type='text';
    inputEmailCreate.classList.add("email-edit");
    inputEmailCreate.value=card.email;
    inputEmailCreate.placeholder='Type new email';
    inputEmailCreate.disabled=1;

    let inputNameCreate=document.createElement('input');
    inputNameCreate.type='text';
    inputNameCreate.placeholder='Type new name ... '
    inputNameCreate.classList.add("name-edit");
    inputNameCreate.value=card.name.first+" "+card.name.last;


     let saveContainer=document.createElement('div');
     saveContainer.classList.add('save-container');

     let btnSave=document.createElement('div');
     btnSave.classList.add('save-btn');
     btnSave.textContent='SAVE';
     
     let btnCancel=document.createElement('div');
     btnCancel.classList.add('cancel-btn');
     btnCancel.textContent='CANCEL';
     
     saveContainer.appendChild(btnSave);
     saveContainer.appendChild(btnCancel);



    editDiv.appendChild(uploadDiv);
    editDiv.appendChild(inputNameCreate);
    editDiv.appendChild(inputEmailCreate);
    editDiv.appendChild(saveContainer);


    return editDiv;
   
}


function removeByEmail(arr,email){
    let filter=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].email===email)){
           filter.push(arr[i]);
        }
    }
    return filter;
}
function findPositionByEmail(arr,email){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].email===email){
          return count;
        }else{
            count++;
        }
    }
}
function updateName(arr,position,newName){
    for(let i=0;i<arr.length;i++){
        if(i===position){
            let string=newName.split(" ");
            arr[i].name.first=string[0];
            arr[i].name.last=string[1];
        }
    }
}
function updateImg(arr,position,newImg){
    for(let i=0;i<arr.length;i++){
        if(i===position){
            arr[i].picture.medium=newImg;
        }
    }
}
function findByName(arr,name){
    for(let i=0;i<arr.length;i++){
        let string=name.toLowerCase().split(" ");
        if(arr[i].name.first.toLowerCase()===string[0] && arr[i].name.last.toLowerCase()===(string[1])){
         return arr[i];
        }
    }
}


function sortByName(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
        if(arr[i].name.last>arr[j].name.last){
            aux=arr[i];
            arr[i]=arr[j];
            arr[j]=aux;}
        }
    }
    return arr;
}

function sortByEmail(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
        if(arr[i].email>arr[j].email){
            aux=arr[i];
            arr[i]=arr[j];
            arr[j]=aux;}
        }
    }
    return arr;
}