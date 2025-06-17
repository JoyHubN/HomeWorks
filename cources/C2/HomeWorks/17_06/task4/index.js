const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', ()=>{
    h1.textContent=input.value;
})