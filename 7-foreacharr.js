let users = [
    { id: 1, name: "Вася", age: 19, budget: 100 },
    { id: 2, name: "Петя", age: 15, budget: 140 },
    { id: 3, name: "Маша", age: 29, budget: 150 },
    { id: 4, name: "Коля", age: 14, budget: 160 },
    { id: 5, name: "Вася", age: 39, budget: 200 }
];

//   arr.forEach(function(item, index, array) {
// ... делать что-то с item
//   });
//короткая запись со стрелочной функцией
users.forEach((item, index, users) => { console.log(`У ${item.name} индекс ${index} в ${users}`); });
users.forEach((item) => {console.log(item.name, item.age)});