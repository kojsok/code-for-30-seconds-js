let users = [
    { id: 1, name: "Вася", age: 19, budget: 100 },
    { id: 2, name: "Петя", age: 15, budget: 140 },
    { id: 3, name: "Маша", age: 29, budget: 150 },
    { id: 4, name: "Коля", age: 14, budget: 160 },
    { id: 5, name: "Вася", age: 39, budget: 200 }
];

//FILTER ищет все элементы и возвращает массив
let results = users.filter(function (item, index, array) {
    // если `true` -- элемент добавляется к results и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);
