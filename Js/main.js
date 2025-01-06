let addIcon = document.querySelector('.plus');
let containerDiv = document.querySelector('.container');
let modal = document.querySelector('.modal');
let closeIcon = document.querySelector('.close');
let addBtn = document.querySelector('.addBtn');
let inputElem = document.querySelector('.new-todo') ;
let contentModal = document.querySelector('.modal-content');
let contentCard = document.querySelector('.content')
let todoBox = document.getElementById('todo');
let progressBox = document.getElementById('progress');
let reviewBox = document.getElementById('review');
let doneBox = document.getElementById('done');

//function for Modal

function openModal(){

    modal.style.display = 'flex';
    containerDiv.style.filter = 'Blur(5px)';
    
}

function closeModal(){

    modal.style.display = 'none';
    containerDiv.style.filter = 'Blur(0px)';

}

function notCloseModal(event){
    event.stopPropagation();
}

//function for drag & drop

function dargHandler(event){
    event.dataTransfer.setData('elemId', event.target.id);
}

function dragOverHandler(event){
    event.preventDefault();
}

function dropToProgressHandler(event){

    let targetId = event.dataTransfer.getData('elemId');
    let targetElem = document.getElementById(targetId);
    let className = targetElem.lastChild.firstChild.className;

    if(className === 'fa fa-check-circle green' || className === 'fa fa-check-circle gray'){

        targetElem.lastChild.firstChild.classList.remove('green');
        targetElem.lastChild.firstChild.classList.remove('gray');
        
        targetElem.lastChild.firstChild.classList.add('blue');
    }

    event.target.append(targetElem);

}


function dropToDoneHandler(event){

    let targetId = event.dataTransfer.getData('elemId');
    let targetElem = document.getElementById(targetId);
    let className = targetElem.lastChild.firstChild.className;

    if(className === 'fa fa-check-circle blue' || className === 'fa fa-check-circle gray'){

        targetElem.lastChild.firstChild.classList.remove('blue');
        targetElem.lastChild.firstChild.classList.remove('gray');
        
        targetElem.lastChild.firstChild.classList.add('green');
    }

    event.target.append(targetElem);
   
}

function dropToTodoHandler(event){

    let targetId = event.dataTransfer.getData('elemId');
    let targetElem = document.getElementById(targetId);
    let className = targetElem.lastChild.firstChild.className;

    if(className === 'fa fa-check-circle blue' || className === 'fa fa-check-circle green'){

        targetElem.lastChild.firstChild.classList.remove('blue');
        targetElem.lastChild.firstChild.classList.remove('green');
        
        targetElem.lastChild.firstChild.classList.add('gray');
    }
    event.target.append(targetElem);

}

//function for AddTodo

function deleteIcon(event){

    event.target.parentElement.parentElement.remove();

}

function AddNewTodo(){

    if(inputElem.value !== ''){
        
        let newCard = document.createElement('div');
        let newP = document.createElement('p');
        let containerIcons = document.createElement('div');
        let iconCheck = document.createElement('i');
        let iconClose = document.createElement('i');

        iconCheck.setAttribute('class','fa fa-check-circle gray');
        iconClose.setAttribute('class', 'fa fa-times-circle red');
        iconClose.addEventListener('click', deleteIcon);
        newP.innerHTML = inputElem.value;
    
        containerIcons.classList.add('container-icon');
        newCard.classList.add('card');
        newCard.setAttribute('draggable', 'true');
        newCard.setAttribute('id', inputElem.value);

        containerIcons.append(iconCheck);
        containerIcons.append(iconClose);
        newCard.append(newP);
        newCard.append(containerIcons);
        newCard.addEventListener('dragstart', dargHandler);

        contentCard.append(newCard);
    }
    inputElem.value = '';
    closeModal();
}

function addTodoWithEnterBtn(event){
    if(event.key === 'Enter'){
        AddNewTodo();
    }
}

addIcon.addEventListener('click',openModal);
closeIcon.addEventListener('click', closeModal);
addBtn.addEventListener('click', AddNewTodo);
contentModal.addEventListener('click', notCloseModal);
modal.addEventListener('click', closeModal);


todoBox.addEventListener('dragover', dragOverHandler);
todoBox.addEventListener('drop', dropToTodoHandler);

progressBox.addEventListener('dragover', dragOverHandler);
progressBox.addEventListener('drop', dropToProgressHandler);

reviewBox.addEventListener('dragover', dragOverHandler);
reviewBox.addEventListener('drop', dropToProgressHandler);

doneBox.addEventListener('dragover', dragOverHandler);
doneBox.addEventListener('drop', dropToDoneHandler);

inputElem.addEventListener('keydown', addTodoWithEnterBtn);