let addIcon = document.querySelector('.plus');
let containerDiv = document.querySelector('.container');
let modal = document.querySelector('.modal');
let closeIcon = document.querySelector('.close');
let addBtn = document.querySelector('.addBtn');
let inputElem = document.querySelector('.new-todo') ;
let containerTodo = document.querySelector('#todo');


// console.log(containerTodo);

function openModal(){

    modal.style.display = 'flex';
    containerDiv.style.filter = 'Blur(5px)';
    
}

function closeModal(){

    modal.style.display = 'none';
    containerDiv.style.filter = 'Blur(0px)';

}

function AddNewTodo(){
    console.log(inputElem.value);

    if(inputElem.value !== ''){
        
        let newCard = document.createElement('div');
        let newP = document.createElement('p');
        newP.innerHTML = inputElem.value;
        let iconCheck = document.createElement('i');
        iconCheck.setAttribute('class','fa fa-check-circle gray');
        newCard.classList.add('card');

        newCard.append(newP);
        newCard.append(iconCheck);

        containerTodo.append(newCard);
    }
    closeModal();
}

addIcon.addEventListener('click',openModal);
closeIcon.addEventListener('click', closeModal);
addBtn.addEventListener('click', AddNewTodo);