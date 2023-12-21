let users = [
    { id: 1, name: "Вася", age: 19, budget: 100 },
    { id: 2, name: "Петя", age: 15, budget: 140 },
    { id: 3, name: "Маша", age: 29, budget: 150 },
    { id: 4, name: "Коля", age: 14, budget: 160 },
    { id: 5, name: "Вася", age: 39, budget: 200 }
];

// MAP вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

let resultMap = users.map(function (item, index, array) {
    // возвращается новое значение вместо элемента
});

let lengths = users.map(item => item.name);
console.log(lengths);