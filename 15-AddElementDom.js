function createElement(tagName, attributes, ...children) {
    //Установка атрибутов 
    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    }

    //Добавление дочерних элементов
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

//пример использования
const h1 = createElement("h1", null, "Заголовок");
const p = createElement("p", null, "Это параграф текста");
const container = createElement("div", {class: "container"}, h1, p);

document.body.appendChild(container);

//результат
<div class="container">
    <h1>Заголовок</h1>
    <p>Это параграф текста</p>
</div>
