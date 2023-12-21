(async function () {
    //получаем данные из API - запрос response, преобразуем в JSON
    async function getData() {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const data = await response.json();
        return data;
    }
    const myData = await getData();
    console.log(myData); //структура myData[0].name

    // Структура по IP
    // {
    //     "email": "aaaa@aaaa.ru",
    //     "name": "Aaaa",
    //     "password": "1234",
    //     "role": "custome",
    //     "avatar": "http://img.ru/1.jpg"
    // }

    //Изменение данных PUT или PATH
    async function patchItem() {
        let user = { name: 'Anton' };
        const response = await fetch('https://api.escuelajs.co/api/v1/users/1', {   //тут нужно передать id user /v1/users/id...
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log(data.name);
        return data
    }

    //Создание обьекта метод POST
    async function createUser() {
        const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": "KOJS",
                "email": "aaaa@gmail.com",
                "password": "1234",
                "avatar": "https://picsum.photos/800",
            })
        });
        const data = await response.json();
        console.log(data); //либо return data
    }

    createUser();

    //поиск в массиве обьектов по значению
    const findElement = (arr, predicate) => {
        return arr.find(predicate); //передаем функцию const found = array1.find((element) => element > 10);
    };
    const foundUser = findElement(myData, user => user.name === 'Значение которое будем искать - Имя');
    console.log(foundUser); // { name: 'Bob', age: 40 }
})();