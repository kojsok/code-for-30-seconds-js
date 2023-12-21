//Функция преобразует строку с заглавной буквы

function capitalize(str) {
    let newStr = str.toLowerCase()
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    }
  
console.log(capitalize("прИвет"));