// Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// Удалите свойство surname

// № 1


const obj = {
    1:'Понедельник',
    2:'Вторник',
    3:'Среда',
    4:'Четверг',
    5:'Пятница',
    6:'Суббота',
    7:'Воскресенье',
}

console.log(obj[2]);



const user = {
    name:'Иван',
    surname:'Иванов',
    age:15,
}
user.otch = prompt('Введите отчество');
console.log(Object.values(user).join('-'));
delete user.surname;
console.log(user)


// №2


// Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.


const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const obj2 = {};

arr1.forEach((element, index) => {
    obj2[element] = arr2[index];
});

console.log(obj2);




const obj3 = {x: 1, y: 2, z: 3};
for (let key in obj3){
    obj3[key] = obj3[key]**2;
}

console.log(obj3);



// №3


const obj4 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
// Найдите сумму элементов приведенного объекта.

const a = Object.values(obj4)
    .map(obj2 => Object.values(obj2)
    .reduce((acc, value) => acc+value,0)
).reduce((acc, value)=> acc+value, 0);

console.log(a);


// №4

// 1
// Создайте объект riddles
// 2
// Добавьте свойства question, answer
// 3
// создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// 5
// * По желанию, создать 2 подсказки, если пользователь ответил неверно


const riddles = {
    question: 'Линукс?',
    answer: 'да',

    askQuestion(){
        const answer = prompt(this.question);
        if(answer.toLocaleLowerCase()!==this.answer){
            console.log('вы проиграли');
        }

    }

}

riddles.askQuestion()
