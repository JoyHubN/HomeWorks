/*
1 Дан код
<div class="elem">
<img src="photo.png" alt="photo">
<div class="content">
<h2 class="heading">Lorem, ipsum dolor.</h2>
<p class="text">Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Recusandae, ea!</p>
</div>
</div>
Необходимо с помощью querySelector найти параграф с классом text
2 Вывести в консоль соседний элемент h2
3 Вывести в консоль родительский элемент content
4 Вывести в консоль картинку
5 Вывести в консоль родительский элемент elem
*/

const p = document.querySelector('p.text')
console.log(p.previousElementSibling); // h2
console.log(p.parentElement); // content
console.log(document.querySelector('png')); // img
console.log(p.parentElement.parentElement); // elem
