 Как работает promise? 

1⃣Ожидание (Pending)
Начальное состояние, не завершённое или отклонённое.
2⃣Исполнено (Fulfilled)
Операция завершена успешно.
3⃣Отклонено (Rejected)
Операция завершена с ошибкой.

🚩Как создаётся

Промис создаётся с использованием конструктора Promise, который принимает функцию с двумя аргументами: resolve и reject. Эти аргументы являются функциями, которые изменяют состояние промиса.
const myPromise = new Promise((resolve, reject) => {
  // Асинхронная операция
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve('Операция успешно завершена');
    } else {
      reject('Произошла ошибка');
    }
  }, 1000);
});

🚩Методы промисов

Промисы имеют несколько методов, которые позволяют работать с результатом асинхронной операции.

🟠then
Метод then используется для обработки успешного выполнения промиса (состояние Fulfilled). Он принимает два аргумента: первый — функция для обработки успешного результата, второй — функция для обработки ошибки (необязательный).
myPromise.then(result => {
  console.log(result); // 'Операция успешно завершена'
}).catch(error => {
  console.error(error);
});

🟠catch
Метод catch используется для обработки отклонённого промиса (состояние Rejected). Он принимает функцию, которая будет вызвана при ошибке.
myPromise.catch(error => {
  console.error(error); // 'Произошла ошибка'
});

🟠finally
Метод finally выполняется после завершения промиса, независимо от того, был он исполнен или отклонён. Он полезен для выполнения кода, который должен быть выполнен в любом случае (например, очистка ресурсов).
myPromise.finally(() => {
  console.log('Промис завершён'); // Выполняется в любом случае
});

🟠Цепочка промисов
Методы then и catch возвращают новые промисы, что позволяет создавать цепочки асинхронных операций.
myPromise
  .then(result => {
    console.log(result); // 'Операция успешно завершена'
    return 'Следующий результат';
  })
  .then(nextResult => {
    console.log(nextResult); // 'Следующий результат'
  })
  .catch(error => {
    console.error(error); // Обработка ошибок для всех предыдущих промисов
  });

🚩Пример использования промисов

function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(`Ошибка: ${xhr.status}`);
      }
    };
    xhr.onerror = () => reject('Ошибка сети');
    xhr.send();
  });
}

fetchData('https://api.example.com/data')
  .then(data => {
    console.log('Данные получены:', data);
  })
  .catch(error => {
    console.error('Ошибка получения данных:', error);
  });
