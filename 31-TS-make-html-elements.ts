type myNewHTMLType = keyof HTMLElementTagNameMap;

//перегрузка функции
function createBlock4(tagName: myNewHTMLType): HTMLElement;
function createBlock4(tagName: myNewHTMLType, attributes: Record<string, string>): HTMLElement;
function createBlock4(tagName: myNewHTMLType, attributes?: Record<string, string>): HTMLElement {
    const element = document.createElement(tagName);

    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    }
    return element
}

const mynewbutton = createBlock4('button', { class: 'btn-click-fetch-download' });
const mynewbutton2 = createBlock4('button');
