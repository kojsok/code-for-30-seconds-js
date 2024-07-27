В JavaScript Promise имеет несколько методов, которые позволяют работать с асинхронными операциями. Вот основные из них:

Основные методы
Promise.then(onFulfilled, onRejected):

Этот метод используется для регистрации коллбэков, которые будут вызваны при выполнении (resolve) или отклонении (reject) промиса.
onFulfilled: Функция, которая будет вызвана при успешном выполнении промиса.
onRejected: Функция, которая будет вызвана при отклонении промиса.
javascript
Копировать код
let promise = new Promise((resolve, reject) => {
    // Выполняется асинхронная операция
    if (/* успех */) {
        resolve('Success');
    } else {
        reject('Error');
    }
});

promise.then(result => {
    console.log(result); // Выведет 'Success', если промис выполнится успешно
}).catch(error => {
    console.error(error); // Выведет 'Error', если промис будет отклонен
});



Promise.catch(onRejected):

Этот метод используется для регистрации коллбэка, который будет вызван при отклонении промиса. Это эквивалентно вызову .then(null, onRejected).
javascript
Копировать код
promise.catch(error => {
    console.error(error); // Выведет 'Error', если промис будет отклонен
});


Promise.finally(onFinally):

Этот метод регистрирует коллбэк, который будет вызван независимо от того, выполнится промис или будет отклонен. Обычно используется для выполнения очистки или завершения после выполнения асинхронной операции.
javascript
Копировать код
promise.finally(() => {
    console.log('Operation finished'); // Будет выполнено в любом случае
});



Статические методы
Promise.resolve(value):

Этот метод возвращает промис, который будет выполнен с указанным значением.
javascript
Копировать код
let promise = Promise.resolve('Success');
promise.then(result => {
    console.log(result); // Выведет 'Success'
});



Promise.reject(reason):

Этот метод возвращает промис, который будет отклонен с указанной причиной.
javascript
Копировать код
let promise = Promise.reject('Error');
promise.catch(error => {
    console.error(error); // Выведет 'Error'
});



Promise.all(iterable):

Этот метод принимает массив (или другой итерируемый объект) промисов и возвращает новый промис, который выполнится, когда все промисы в массиве будут выполнены, или будет отклонен, если хотя бы один из промисов будет отклонен.
javascript
Копировать код
let promise1 = Promise.resolve('Success 1');
let promise2 = Promise.resolve('Success 2');
let promise3 = Promise.resolve('Success 3');

Promise.all([promise1, promise2, promise3]).then(results => {
    console.log(results); // Выведет ['Success 1', 'Success 2', 'Success 3']
});



Promise.race(iterable):

Этот метод принимает массив (или другой итерируемый объект) промисов и возвращает новый промис, который выполнится или будет отклонен, как только любой из промисов в массиве выполнится или будет отклонен.
javascript
Копировать код
let promise1 = new Promise(resolve => setTimeout(resolve, 500, 'One'));
let promise2 = new Promise(resolve => setTimeout(resolve, 100, 'Two'));

Promise.race([promise1, promise2]).then(result => {
    console.log(result); // Выведет 'Two', так как promise2 выполнится первым
});



Promise.allSettled(iterable):

Этот метод принимает массив промисов и возвращает новый промис, который выполнится, когда все промисы в массиве будут либо выполнены, либо отклонены. Он всегда выполняется с массивом объектов, каждый из которых описывает результат соответствующего промиса.
javascript
Копировать код
let promise1 = Promise.resolve('Success');
let promise2 = Promise.reject('Error');
let promise3 = Promise.resolve('Another success');

Promise.allSettled([promise1, promise2, promise3]).then(results => {
    console.log(results);
    // Выведет массив объектов с состоянием каждого промиса
    // [
    //     { status: 'fulfilled', value: 'Success' },
    //     { status: 'rejected', reason: 'Error' },
    //     { status: 'fulfilled', value: 'Another success' }
    // ]
});


Promise.any(iterable):

Этот метод принимает массив промисов и возвращает новый промис, который выполнится, как только любой из переданных промисов выполнится. Если все промисы будут отклонены, возвращаемый промис будет отклонен с AggregateError, содержащей все причины отклонения.
javascript
Копировать код
let promise1 = Promise.reject('Error 1');
let promise2 = Promise.resolve('Success');
let promise3 = Promise.reject('Error 2');

Promise.any([promise1, promise2, promise3]).then(result => {
    console.log(result); // Выведет 'Success', так как это первый выполненный промис
}).catch(error => {
    console.error(error);
});
Эти методы предоставляют мощные инструменты для работы с асинхронным кодом, позволяя вам обрабатывать различные сценарии выполнения и отклонения промисов.
