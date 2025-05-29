/*

1 Дан блок, внутри него необходимо создать
элемент div с классом item, разместить текст
“Элемент внутри” и задать стили
● Цвет текста синий
● Рамка сплошная черная
● Цвет фона #f8f8f8
● Внутренний отступ 16px
1 Добавить данному блоку класс item_1
(использовать setAttribute)
*/

const blockDiv = document.querySelector('div.block');
const newDiv = document.createElement('div');
newDiv.className= 'item';
newDiv.textContent='Элемент внутри';

newDiv.style.color='blue';
newDiv.style.border='solid black';
newDiv.style.backgroundColor='#f8f8f8';
newDiv.style.padding='16px';

newDiv.setAttribute('class', 'item_1');

blockDiv.appendChild(newDiv);