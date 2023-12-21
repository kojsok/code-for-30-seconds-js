//функция генерирует id

let someArr = ["коля", "петя"];

function getNewID(arr) {
    let max = 0;
    for (let item of arr) {
        if (item.id > max) max = item.id
        // max++
    }
    return max + 1;
}

console.log(getNewID(someArr));

//создаем обьект элементов
let newItem = {
    id: getNewID(someArr),
    name: input.value,
    done: false,
}

//применение 
let todoItem = createTodoItem(newItem);
list.append(todoItem.item);