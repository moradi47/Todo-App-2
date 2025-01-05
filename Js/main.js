let addIcon = document.querySelector('.plus');
let containerDiv = document.querySelector('.container');
let modal = document.querySelector('.modal');
let closeIcon = document.querySelector('.close');
let addBtn = document.querySelector('.addBtn');
let inputElem = document.querySelector('.new-todo') ;
let containerTodo = document.querySelector('#todo');
let contentModal = document.querySelector('.modal-content');
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
    let className = targetElem.lastChild.className;

    if(className === 'fa fa-check-circle green' || className === 'fa fa-check-circle gray'){

        targetElem.lastChild.classList.remove('green');
        targetElem.lastChild.classList.remove('gray');
        
        targetElem.lastChild.classList.add('blue');
    }

    event.target.append(targetElem);

}


function dropToDoneHandler(event){

    let targetId = event.dataTransfer.getData('elemId');
    let targetElem = document.getElementById(targetId);
    let className = targetElem.lastChild.className;

    if(className === 'fa fa-check-circle blue' || className === 'fa fa-check-circle gray'){

        targetElem.lastChild.classList.remove('blue');
        targetElem.lastChild.classList.remove('gray');
        
        targetElem.lastChild.classList.add('green');
    }

    event.target.append(targetElem);

}

function dropToTodoHandler(event){

    let targetId = event.dataTransfer.getData('elemId');
    let targetElem = document.getElementById(targetId);
    let className = targetElem.lastChild.className;

    if(className === 'fa fa-check-circle blue' || className === 'fa fa-check-circle green'){

        targetElem.lastChild.classList.remove('blue');
        targetElem.lastChild.classList.remove('green');
        
        targetElem.lastChild.classList.add('gray');
    }
    event.target.append(targetElem);

}

//function for AddTodo

function AddNewTodo(){

    if(inputElem.value !== ''){
        
        let newCard = document.createElement('div');
        let newP = document.createElement('p');
        newP.innerHTML = inputElem.value;
        let iconCheck = document.createElement('i');
        iconCheck.setAttribute('class','fa fa-check-circle gray');
        newCard.classList.add('card');
        newCard.setAttribute('draggable', 'true');
        newCard.setAttribute('id', inputElem.value);

        newCard.append(newP);
        newCard.append(iconCheck);
        newCard.addEventListener('dragstart', dargHandler);

        containerTodo.append(newCard);
    }
    inputElem.value = '';
    closeModal();
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