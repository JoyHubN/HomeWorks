const buttons = document.querySelectorAll('#btn1, #btn2, #btn3');
const button4 = document.querySelector('#btn4');
const button5 = document.querySelector('#btn5');

const clickInButton = (event) => {
    console.log(`${event.target.id} - btnTextContent = ${event.target.textContent}`)
}

class Counter{
    constructor(){
        this.countClick = this.countClick.bind(this);
        this.count = 0;
    }

    countClick(){
        this.count++;
        console.log(`Количество нажатий на кнопку 4 = ${this.count}`);
    }
}
const counter = new Counter;



buttons.forEach(button => button.onclick = clickInButton);
button4.onclick = counter.countClick;
button5.onclick = (event)=>{
    event.target.textContent = event.target.textContent=='5'? 'Вы нажали на эту кнопку': '5';
}
