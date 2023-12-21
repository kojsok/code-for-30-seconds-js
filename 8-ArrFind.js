let users = [
    { id: 1, name: "Вася", age: 19, budget: 100 },
    { id: 2, name: "Петя", age: 15, budget: 140 },
    { id: 3, name: "Маша", age: 29, budget: 150 },
    { id: 4, name: "Коля", age: 14, budget: 160 },
    { id: 5, name: "Вася", age: 39, budget: 200 }
];

//Метод find ищет один (первый) элемент, который заставит функцию вернуть true.
let someresult = users.find(function (item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});

let result = users.find((item, index, array) => item.age === 15);
console.log(result);
let user = users.find(item => item.id == 1);
console.log(user);