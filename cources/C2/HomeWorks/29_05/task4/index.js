/*
<form action="#">
<input type="text">
<button class="btn">Отправить</button>
</form>
1 Дано поле ввода и кнопка отправить, необходим
реализовать функционал, если пользователь нажимает на
кнопку отправить, а поле ввода пустое, то под полем ввода
и кнопкой должен появиться заголовок h2 с текстом вы не
заполнили поле ввода
2 Цвет у рамки сделать красным
*/

const btn = document.querySelector('.btn');
const inp = document.querySelector(`input[type="text"]`);

btn.addEventListener('click', ()=> {
    if (inp.value.length == 0){
        if (!document.querySelector('h2')){
            const h2 = document.createElement('h2');
            h2.textContent = 'Вы не заполнили поле ввода';
            h2.style.color = 'red';
            document.body.appendChild(h2);
        }
    }
    else {
        if (document.querySelector('h2')){
            document.querySelector('h2').remove();
        }
    }
})

