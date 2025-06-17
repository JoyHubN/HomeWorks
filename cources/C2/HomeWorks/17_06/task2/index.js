const tea = document.querySelector(`input[id="tea"]`);
const coffee = document.querySelector(`input[id="coffee"]`);
const button = document.querySelector('button[type="submit"');

button.addEventListener('click', (event)=>{
    tea.checked?alert('Чай закончился'):coffee.checked?alert('Кофе закончился'):null;
})