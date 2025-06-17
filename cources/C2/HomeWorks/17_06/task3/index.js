const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    input.value=='пароль'? input.style.borderColor='green' : (input.style.borderColor='red', input.value='', input.placeholder='Пароль не верный')
        
})