// document.getElementById('fetchDataBtn').addEventListener('click', () => {
//     fetchData().then(data => {
//         const container = document.getElementById('dataContainer');
//         container.innerHTML = ''; // очищаем контейнер перед отображением новых данных
//         const tree = createTree(data);
//         container.appendChild(tree);
//     }).catch(error => {
//         console.error('Ошибка:', error);
//     });
// });

// function fetchData() {
//     return fetch('https://jsonplaceholder.typicode.com/users') // Здесь можно заменить на любой API
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         });
// }

// function createTree(data) {
//     const ul = document.createElement('ul');
//     data.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item.name; // показываем имя пользователя
//         if (item.address) {
//             const addressTree = createTree(Object.entries(item.address).map(([key, value]) => ({ name: `${key}: ${value}` })));
//             li.appendChild(addressTree);
//         }
//         ul.appendChild(li);
//     });
//     return ul;
// }

document.getElementById('fetchDataBtn').addEventListener('click', () => {
    console.log("Запрос будет выполнен через 3 секунды...");

    // Задержка перед выполнением запроса
    setTimeout(() => {
        fetchData().then(data => {
            const container = document.getElementById('dataContainer');
            container.innerHTML = ''; // очищаем контейнер перед отображением новых данных
            const tree = createTree(data);
            container.appendChild(tree);
        }).catch(error => {
            console.error('Ошибка:', error);
        });
    }, 3000); // Задержка в 3 секунды
});

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/users') // Здесь можно заменить на любой API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

function createTree(data) {
    const ul = document.createElement('ul');
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name; // показываем имя пользователя
        if (item.address) {
            const addressTree = createTree(Object.entries(item.address).map(([key, value]) => ({ name: `${key}: ${value}` })));
            li.appendChild(addressTree);
        }
        ul.appendChild(li);
    });
    return ul;
}