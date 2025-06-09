const button = document.createElement('button')
button.textContent='Отправить';

document.body.appendChild(button);

button.onclick = function(){
    this.textContent='Текст отправлен';
}