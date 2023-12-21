//Для сортировки массива объектов в JavaScript можно использовать метод Array.sort. 
//Этот метод принимает компаратор — функцию, которая сравнивает два элемента и возвращает -1 (если первый элемент меньше второго),
// 0 (если элементы равны) или 1 (если первый элемент больше второго). 
//Вот пример использования метода sort для сортировки массива users по свойству age (возрастанию):

const users = [{
    name: 'John',
    age: 30
  },
  {
    name: 'Jane',
    age: 25
  },
  {
    name: 'Bob',
    age: 40
  }
];

users.sort((a, b) => a.age - b.age);
console.log(users); // [{name: 'Bob', age: 40}, {name: 'Jane', age: 25}, {name: 'John', age: 30}]

//др. примеры и сокращенный код
function sortByKey(array, key) {
    return array.sort((a, b) => a[key] - b[key]);
  }
  
  function sortObjectsByKey(array, key) {
    return array.sort(function (a, b) {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  const sortUsers = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0);
  console.log(sortUsers(arr, 'name', false));
  