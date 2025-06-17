const sucB = document.querySelector(`input[id='check']`);
const sendB = document.querySelector(`button[type='submit']`);
const divError = document.querySelector('#error');

sendB.addEventListener('click', ()=> {
    sucB.checked?divError.textContent='Успешно отправлено': divError.textContent='Необходимо согласиться с условиями';
})