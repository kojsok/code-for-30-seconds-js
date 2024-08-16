const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);

В консоль будет выведено 

undefined

Вот почему это происходит:

1. Метод logMessage вызывается через setTimeout, и в этом случае контекст this внутри метода logMessage теряется. В результате this не будет указывать на объект object, а будет указывать на глобальный объект (в браузерах это window).

2. Поскольку в глобальном контексте у вас нет свойства message, которое было бы равно 'Hello, World!', this.message вернёт undefined.

Чтобы получить желаемое сообщение 'Hello, World!', вы можете использовать один из следующих способов для сохранения правильного контекста:

1. Использовать стрелочную функцию:

   setTimeout(() => object.logMessage(), 1000);
   

2. Использовать метод bind:

   setTimeout(object.logMessage.bind(object), 1000);
   

Оба этих способа позволят this внутри logMessage указывать на объект object, и в итоге в консоль будет выведено 'Hello, World!'.
