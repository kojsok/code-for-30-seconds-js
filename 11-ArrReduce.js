let users = [
    { id: 1, name: "Вася", age: 19, budget: 100 },
    { id: 2, name: "Петя", age: 15, budget: 140 },
    { id: 3, name: "Маша", age: 29, budget: 150 },
    { id: 4, name: "Коля", age: 14, budget: 160 },
    { id: 5, name: "Вася", age: 39, budget: 200 }
];

// REDUCE
// let value = users.reduce(function(accumulator, item, index, array) {
// ...
//   }, [initial]);

let resultReduce = users.reduce((total, users) => total + users.budget, 0);
console.log(resultReduce);

//пример
const invoices = [22, 8, 16, 120];
const totalInvoices = invoices.reduce((total, current) => {
    return total + current;
});
console.log(totalInvoices);

// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.

const fruits = ['apples', 'bananas', 'oranges', 'apples', 'kiwi', 'apples'];
const fruitsCount = fruits.reduce((accum, curVal) => {
    if (!accum[curVal]) {
        accum[curVal] = 1;
        return accum;
    }
    accum[curVal] += 1;
    return accum;
}, {});
console.log(fruitsCount);
// Object { apples: 3, bananas: 1, oranges: 1, kiwi: 1 }