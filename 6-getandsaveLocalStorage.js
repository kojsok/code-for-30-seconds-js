
//создаем функцию для сохранения массива в локал сторедж
//локал сторедж может хранить строки и булевые значения или числа --- ВАЖНО
function saveList(arr, keyName) {
    console.log(JSON.stringify(arr))  //преобразовывает обьект в строчку
    //передаем название переменной keyName,  даннные из нашего массива в виде строки
    localStorage.setItem(keyName, JSON.stringify(arr));
}

//получаем данные из локал сторедж
let localData = localStorage.getItem(listName);
console.log("данные из локал сторедж " + localData);
//проверяем есть ли данные в локалсторедж, если есть то распарсиваем строку хранящуюся
//в локалсторедже в джсон и помещаем в наш массив listArray
if (localData !== null && localData !== '') listArray = JSON.parse(localData);


//что делать с нашим массивом? напрример можно перебрать
for (let itemList of listArray) {
    let todoItem = createTodoItem(itemList);
    list.append(todoItem.item);
}