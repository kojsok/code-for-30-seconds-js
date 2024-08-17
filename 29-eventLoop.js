console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');
// Start
// End
// Promise
// Timeout
// Сначала выполняются все синхронные операции, поэтому Start и End выводятся первыми.
// Затем Promise.resolve().then добавляет колбэк в микротаски (microtask queue).
// setTimeout добавляет колбэк в макротаски (macrotask queue).
// Микротаски всегда выполняются перед макротасками, поэтому Promise выводится перед Timeout.

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});

console.log('End');

// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

setTimeout(() => {
    console.log('Timeout');
}, 0);

setImmediate(() => {
    console.log('Immediate');
});
// Immediate
// Timeout
// setImmediate выполняется после завершения текущего цикла событий, а setTimeout с нулевой задержкой выполняется в следующем цикле событий.
// В некоторых версиях Node.js setImmediate может срабатывать раньше, чем setTimeout, хотя это не гарантируется.

setTimeout(function run() {
    console.log('Hello');
    setTimeout(run, 1000);
}, 1000);

// Будет выводиться Hello каждые 1000 миллисекунд (1 секунда).
// Объяснение:
// Первый setTimeout срабатывает через 1 секунду, выводит Hello, а затем устанавливает новый setTimeout с тем же колбэком.
// Это создаёт бесконечный цикл, где каждая итерация задерживается на 1 секунду.

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve()
    .then(() => console.log('Promise 1'))
    .then(() => {
        console.log('Promise 2');
        return Promise.resolve();
    })
    .then(() => console.log('Promise 3'));

setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');
// End
// Promise 1
// Promise 2
// Promise 3
// Timeout 1
// Timeout 2

async function foo() {
    console.log('Foo start');
    await bar();
    console.log('Foo end');
}

async function bar() {
    console.log('Bar');
    return Promise.resolve();
}

console.log('Start');
foo();
console.log('End');
// Start
// Foo start
// Bar
// End
// Foo end

// console.log('Start') выполняется сначала.
// В функции foo() сначала выводится Foo start, затем выполняется await bar().
// Функция bar() вызывается и выводит Bar.
// await заставляет foo() приостановиться до завершения Promise.resolve(), и следующий код (после await) в foo() выполняется в микротаске.
// Пока foo() приостановлена, выполняется остальной код, выводится End.
// После этого завершается микротаска, и выводится Foo end.

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        setTimeout(() => console.log('Timeout 2'), 0);
    })
    .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 3'), 0);

Promise.resolve().then(() => console.log('Promise 3'));

console.log('End');
// End
// Promise 1
// Promise 2
// Promise 3
// Timeout 1
// Timeout 3
// Timeout 2
// End выводится первым, так как это синхронный код.
// Затем обрабатываются промисы, начиная с первого: Promise 1, Promise 2, затем Promise 3.
// Timeout 1 и Timeout 3 выводятся после завершения микротасок.
// Timeout 2 выводится последним, так как он был установлен внутри микротаски Promise 1 и добавлен в очередь макротасок после Timeout 1 и Timeout 3.
async function foo() {
    console.log('Foo start');
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('Timeout in Foo');
            resolve();
        }, 1000);
    });
    console.log('Foo end');
}

async function bar() {
    console.log('Bar start');
    await new Promise(resolve => {
        console.log('Bar awaiting');
        resolve();
    });
    console.log('Bar end');
}

foo();
bar();
console.log('End');

// Foo start
// Bar start
// Bar awaiting
// End
// Bar end
// Timeout in Foo
// Foo end
// Foo start выводится первым, так как это начало асинхронной функции foo.
// Затем начинается выполнение bar, и выводится Bar start, за ним следует Bar awaiting.
// Синхронный код завершает выполнение, и выводится End.
// После этого промис в bar завершается, и выводится Bar end.
// Через 1 секунду завершается промис в foo, и выводятся Timeout in Foo и Foo end.