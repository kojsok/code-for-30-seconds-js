type AnyObject = { [key: string]: any };

function isObject(obj: any): obj is AnyObject {
    return obj !== null && typeof obj === 'object';
}

function deepEqual(obj1: AnyObject, obj2: AnyObject): boolean {
    // Проверка на количество ключей
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    // Перебор ключей первого объекта
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        // Проверка, являются ли значения объектами
        if (isObject(val1) && isObject(val2)) {
            if (!deepEqual(val1, val2)) {
                return false;
            }
        } else {
            if (val1 !== val2) {
                return false;
            }
        }
    }

    return true;
}

// Примеры использования
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

console.log(deepEqual(obj1, obj2)); // true

const obj3 = {
    a: 1,
    b: {
        c: 2,
        d: 4
    }
};

console.log(deepEqual(obj1, obj3)); // false

Объяснение
Типизация: Определяем тип AnyObject как объект с любыми строковыми ключами и значениями любого типа.
isObject: Функция-предикат, которая проверяет, является ли значение объектом и не является null.
deepEqual: Основная функция для глубокого сравнения двух объектов:
Проверка ключей: Сравниваем количество ключей в обоих объектах.
Перебор ключей: Проходимся по ключам первого объекта и сравниваем соответствующие значения из обоих объектов.
Рекурсия: Если оба значения являются объектами, рекурсивно вызываем deepEqual.
Примитивы: Если значения не являются объектами, сравниваем их напрямую.
Результат: Если все ключи и значения эквивалентны, функция возвращает true, иначе false.
Этот код выполняет глубокое сравнение двух объектов с учетом вложенных структур.

type AnyObject = { [key: string]: any };

function isObject(obj: any): obj is AnyObject {
    return obj !== null && typeof obj === 'object';
}

function deepEqual(obj1: AnyObject, obj2: AnyObject): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    return keys1.reduce((acc, key) => {
        if (!acc) {
            return false;
        }

        const val1 = obj1[key];
        const val2 = obj2[key];

        if (isObject(val1) && isObject(val2)) {
            return deepEqual(val1, val2);
        } else {
            return val1 === val2;
        }
    }, true);
}

// Примеры использования
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

console.log(deepEqual(obj1, obj2)); // true

const obj3 = {
    a: 1,
    b: {
        c: 2,
        d: 4
    }
};

console.log(deepEqual(obj1, obj3)); // false

Объяснение
Типизация: Определяем тип AnyObject как объект с любыми строковыми ключами и значениями любого типа.
isObject: Функция-предикат, которая проверяет, является ли значение объектом и не является null.
deepEqual: Основная функция для глубокого сравнения двух объектов:
Проверка ключей: Сравниваем количество ключей в обоих объектах.
Использование reduce: Применяем reduce для ключей первого объекта:
Инициализация аккумулятора: Начинаем с true и проходимся по ключам.
Сравнение значений: Если аккумулятор (acc) уже false, возвращаем false.
Рекурсия: Если оба значения являются объектами, рекурсивно вызываем deepEqual.
Примитивы: Если значения не являются объектами, сравниваем их напрямую.
Результат: Если все ключи и значения эквивалентны, reduce вернет true, иначе false.
Этот подход позволяет использовать функциональные методы массива для более выразительного и компактного кода.


