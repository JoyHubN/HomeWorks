const divAll = document.querySelector('#all');
const divlist = document.querySelector('#list');
const divButtons = document.querySelector('#buttons');

const ul = document.createElement('ul');

divlist.appendChild(ul);


for (let i=0; i<3; i++){
    
    const li = document.createElement('li');
    li.textContent = i+1;
    ul.appendChild(li);
}

const addElement = ()=>{
    const li = document.createElement('li');
    li.textContent = 'новый элемент списка';
    ul.appendChild(li);
}

const removeElement = ()=>{
    const li = ul.querySelector('li:first-child');
    if(li){
        li.remove();
    }
}

const addClass = (event)=>{
    event.target.classList.add('click');
}

const btnAdd = document.createElement('button');
btnAdd.textContent='Добавить элемент';

const btnRemove = document.createElement('button');
btnRemove.textContent='Удалить элемент';

const btnClass = document.createElement('button');
btnClass.textContent='Добавить класс';

divButtons.appendChild(btnAdd);
divButtons.appendChild(btnRemove);
divButtons.appendChild(btnClass);

btnAdd.onclick = addElement;
btnRemove.onclick = removeElement;
btnClass.onclick = addClass;