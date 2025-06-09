window.addEventListener('DOMContentLoaded', ()=>{
    console.log('Страница загрузилась')
});

const button = document.querySelector('button');

button.onclick = ()=> {
    console.log('событие onclick');
}

button.addEventListener('blur', ()=>{
    console.log('событие addEventListener');
});