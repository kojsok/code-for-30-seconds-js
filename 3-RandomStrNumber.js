//Функция генерирует случайный набор букв и цифр
const randomString = () => Math.random().toString(36).slice(2)
console.log(randomString()) // gi1qtdego0b

randomString() // f3qixv40mot
randomString() // eeelv1pm3ja

//Этот код генерирует случайное число от -100 (включительно) до 100 (исключительно). 
//Если вы хотите включить число 100, то можете изменить код следующим образом:

function getRandomNumber() {
    return Math.random() * 201 - 100;
}
console.log(getRandomNumber())

//функция с округлением диапозон от -100 до 100 включительно
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToNearestInteger(num) {
    if (num - Math.trunc(num) > 0.5) {
        return Math.ceil(num);
    } else if (num - Math.trunc(num) < 0.5 && num !== 0) {
        return Math.floor(num);
    }
    return num;
}

let randomNumber = getRandomInt(-100, 100);
let roundedRandomNumber = roundToNearestInteger(randomNumber);
console.log("Случайное число:", randomNumber);
console.log("Округленное случайное число:", roundedRandomNumber);