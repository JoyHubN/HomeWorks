// №1
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Теги загружены');
});


// №2
window.addEventListener('load', ()=>{
    console.log('Страница загружена');
});



// №3
document.addEventListener('click', function(event){
    const element = event.target;
    const tagName = element.tagName.toLowerCase();
    const hasSuper = element.classList.contains("super_element");

    if (hasSuper) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
    }
})


// №4
const textarea = document.querySelector('textarea');

textarea.addEventListener('mouseover', ()=>{
    console.log("Вы навели на textarea.");
})


// №5
const ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        console.log(event.target.textContent);
    }
});

// №7

//7 С помощью JS необходимо изменить цвет заднего фона каждого второго
//тега li.

document.body.querySelectorAll('li:nth-child(2n)').forEach((element)=>element.style.backgroundColor='red');
