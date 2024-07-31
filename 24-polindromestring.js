function isPalindrome(str) {
  // Приведение строки к нижнему регистру и удаление всех не буквенно-цифровых символов
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Проверка равенства очищенной строки и ее реверсированной версии
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Примеры использования
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

function isPalindrome(str) {
  // Приведение строки к нижнему регистру
  str = str.toLowerCase();
  
  // Инициализация пустой строки для хранения очищенной строки
  let cleanedStr = '';
  
  // Перебор символов строки
  for (let char of str) {
    // Проверка, является ли символ буквенно-цифровым
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanedStr += char;
    }
  }
  
  // Проверка равенства очищенной строки и ее реверсированной версии
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Примеры использования
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false


function isPalindrome(str) {
  // Приведение строки к нижнему регистру
  str = str.toLowerCase();
  
  // Инициализация пустой строки для хранения очищенной строки
  let cleanedStr = '';
  
  // Перебор символов строки с использованием обычного for
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Проверка, является ли символ буквенно-цифровым
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanedStr += char;
    }
  }
  
  // Проверка равенства очищенной строки и ее реверсированной версии
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Примеры использования
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
