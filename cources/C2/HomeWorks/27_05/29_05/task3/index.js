/*
<div class="item">
<div class="elem">
<div class="info">
<h2 class="subtitle">Lorem, ipsum dolor.</h2>
</div>
</div>
</div>
С помощью querySelector найти элемент h2 и вывести в
консоль всех его родителей
*/

const h2 = document.querySelector('h2.subtitle');
console.log(h2.parentElement.parentElement.parentElement);
