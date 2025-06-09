const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.id = 'btn1'; btn2.id = 'btn2'; btn3.id = 'btn3';
btn1.style.margin='10px'; btn2.style.margin='10px'; btn3.style.margin='10px';
btn1.textContent = 1; btn2.textContent = 2; btn3.textContent = 3

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

const createH1 = () =>{
    const h1 = document.createElement('h1');
    h1.textContent='Новый заголовок';
    btn1.insertAdjacentElement('afterend', h1);
}   

const removeH1 = () =>{
    const h1 = document.querySelector('h1:last-of-type');
    if (h1){
        h1.remove();
    }
}

const checkBlurMouse = (event)=>{
    if (event.type === 'mouseover') {
        console.log('Вы навели на данную кнопку');
    } else {
        console.log('Наведения на кнопку больше нет');
    }
}

btn1.onclick = createH1;
btn2.onclick = removeH1;
btn3.addEventListener('mouseover', checkBlurMouse);
btn3.addEventListener('mouseout', checkBlurMouse);