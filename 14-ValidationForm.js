function validateName() {
    let nameField = document.getElementById("name");
    let surnameField = document.getElementById("surname");
    let middleNameField = document.getElementById("middleName");

    let errors = [];

    // Проверяем, заполнено ли имя
    if (!nameField.value.trim()) {
        errors.push("Поле 'Имя' не может быть пустым");
    } else if (!/^[a-zа-яё]+$/.test(nameField.value)) {
        errors.push(
            "Имя может состоять только из букв a-z, А-Я, а также ё и е (без учета регистра)"
        );
    }

    // Аналогично для фамилии и отчества
    if (!surnameField.value.trim()) {
        errors.push("Поле 'Фамилия' не может быть пустым");
    } else if (!/^[a-zа-я]+$/.test(surnameField.value)) {
        errors.push(
            "Фамилия может состоять только из букв a-z, А-Я, а также ё и е (без учета регистра)");
    }

    if (!middleNameField.value.trim()) {
        errors.push("Поле ‘Отчество’ не может быть пустым");
    } else if (!/^([a-za-яа-ёё]-?){1,}$/.test(middleNameField.value)) {
        errors.push("Отчество может состоять только из русских букв(a - z, A - Z), а также дефиса и апострофа");
    }

    // Если есть ошибки, выводим их
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    } else {
        return true;
    }
}

// Обработчик нажатия кнопки “Отправить”
document.querySelector(".button").addEventListener("click", function (event) {
    event.preventDefault(); // Чтобы форма не отправлялась автоматически
    const result = validateName();
    if (!result) {
        alert("Форма не может быть отправлена, проверьте данные");
    } else {
        console.log("Форма успешно отправлена");
    }
});