function person(name) {
    console.log(name);
}

person("Коля");

let user = person('Петя');
console.log("вывод " + user); // undefined


let name = new person('Вася');
console.log(person); // Person { name: "John" }

// Объявление функции
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}

// Функциональное выражение
foo(); // Uncaught TypeError: foo is not a function
var foo = function () {
  console.log('FOOOOO');
};





