const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    resolve(3);
    console.log(4);
  }, 0);
  console.log(5);
});

promise.then((res) => {
  console.log(6)
  setTimeout(() => {
    console.log(res);
  }, 0)
});

console.log(7);

1. Создание промиса:
- При создании нового промиса выполняется функция, переданная в качестве аргумента.
- Сначала выводится 1.
- Затем вызывается setTimeout, который будет выполнен через 0 миллисекунд, но он не выполняется немедленно.
- После вызова setTimeout выводится 5.

2. Выполнение промиса:
- На этом этапе код выполнения будет следующим:
     console.log(1); // 1
     setTimeout(() => { 
       console.log(2); 
       resolve(3); 
       console.log(4); 
     }, 0);
     console.log(5); // 5
     


3. Изменение состояния промиса:
- После завершения выполнения функции промиса состояние промиса будет "разрешено" с результатом 3, но этот код находится внутри setTimeout, и он будет выполнен позже.

4. Обработка `then`:
- После создания промиса вызывается метод then, который добавляет обработчик на случай успешного завершения промиса.
- Однако, код этого обработчика тоже будет выполнен позже, так как он также находится в очереди микротасков.

5. Вывод `console.log(7)`:
- Далее выводится 7, так как этот код не зависит от промиса и выполняется синхронно.

6. Выполнение `setTimeout`:
- Как только стек вызовов очищается, происходит выполнение кода из setTimeout по очереди.
- Сначала выводится 2 (выполняется первый setTimeout), затем resolve(3) (это завершает промис), и затем выводится 4.
- После этого выполняется второй setTimeout, который выводит значение res, равное 3.

Таким образом, порядок вывода в консоль будет следующим:

1
5
7
2
4
6
3



console.log(1)

const promise = new Promise((resolve) => {
  console.log(2)
  resolve(3)
})

setTimeout(() => {
  console.log(4)
})

Promise.resolve().then(() => {
  console.log(5)
})

promise.then((res) => console.log(res))

console.log(6)

1. `console.log(1)`:
- Код сразу выполняет данную строку. Сразу в консоль выводится `1`.

2. Создание Promises:
   const promise = new Promise((resolve) => {
     console.log(2)
     resolve(3)
   })
   

- При создании нового экземпляра Promise вызывается переданная функция.
- Внутри этой функции выполняется console.log(2), в результате в консоль выведется `2`.
- Затем вызывается resolve(3), что позволяет указать, что промис будет выполняться с результатом 3, но на вывод в консоль это не оказывает незамедлительного влияния.

3. `setTimeout(() => { console.log(4) })`:
- setTimeout ставит функцию в очередь на выполнение после истечения указанного времени. Это макрозадача, которая выполнится позже по сравнению с текущими операциями. Пока никакого вывода не будет, просто запоминаем, что данная функция будет выполнена позже.

4. `Promise.resolve().then(() => { console.log(5) })`:
- Данная строка создает промис, который разрешается немедленно, и добавляет обработчик в очередь микрозадач.
- Эта микрозадача будет выполнена после завершения всех текущих операций (мега-стека), но перед макрозадачами, такими как setTimeout.
- В результате, вывод еще не произошел, но обработчик будет готов к выполнению.

5. `promise.then((res) => console.log(res))`:
- Здесь мы добавляем еще один обработчик для уже созданного промиса. Этот обработчик также относится к микрозадачам и будет выполнен после текущего стека, когда завершатся все действия, которые были до этого.
- Так как promise был разрешен ранее с результатом 3, то, когда выполнится этот обработчик, будет выведено значение 3.

6. `console.log(6)`:
- В текущий момент это последний вывод в стеке. В консоль выводится `6`.

Теперь, когда основная логика завершена, перейдем к выполнению микрозадач.

7. Выполнение микрозадач:
- Сначала будет выполнен обработчик из Promise.resolve(), и в консоль выведется `5`.
- Затем выполнится обработчик промиса, созданного ранее, где будет выведено `3`.

8. Выполнение макрозадач:
- После того, как все микрозадачи завершены, выполняется функция из setTimeout, которая в консоль выведет `4`.

В итоге, порядок вывода в консоль следующим образом:

1
2
6
5
3
4


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
