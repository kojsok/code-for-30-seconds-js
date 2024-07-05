export class Human {
    public role: string;
    constructor(role: string) {
        this.role = role;    
    }
    work(personName: string): void {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}

export class Person {
    private human: Human;
    private newName: string;
    private newRole: string;
    constructor(human: Human, newName: string, newRole: string) {
        this.human = human;
        this.newName = newName;
        this.newRole = newRole;
    }

    setNewRole(): void {
        this.human.role = this.newRole;
    }

    work(): void {
        this.human.work(this.newName);

    }
}

const ivan = new Human("сварщик");
ivan.work("Иван");

const petr = new Person(ivan, "Петр", "грузчик");
petr.setNewRole();
const aaa = petr.work();


Делегирование в данном коде работает через передачу ответственности выполнения определенных действий от одного объекта к другому. Давайте рассмотрим этот процесс более подробно:
Класс Human:
Этот класс имеет публичное свойство role, которое указывает на роль человека (например, "сварщик").
Конструктор инициализирует роль человека.
Метод work выводит сообщение в консоль о том, что данный человек выполняет работу в своей роли.
Класс Person:

Этот класс содержит два приватных свойства: human (объект класса Human) и newRole (новая роль, которую мы хотим назначить человеку).
Конструктор инициализирует эти свойства.
Метод setNewRole устанавливает новую роль для объекта human (т.е. изменяет свойство role объекта класса Human).
Метод work вызывает метод work объекта human, передавая новое имя и вызывая его в новой роли.
Пример использования:

Создается объект ivan класса Human с ролью "сварщик".
Вызывается метод work для объекта ivan, который выводит сообщение: "Иван сейчас работает как сварщик".
Создается объект petr класса Person, который делегирует работу объекта ivan с новой ролью "грузчик".
Метод setNewRole объекта petr изменяет роль объекта ivan на "грузчик".
Метод work объекта petr вызывает метод work объекта ivan, передавая новое имя "Петр", и выводит сообщение: "Петр сейчас работает как грузчик".
Таким образом, делегирование в этом коде позволяет объекту Person управлять состоянием и поведением объекта Human. 
Объект Person изменяет роль объекта Human и вызывает его методы, передавая соответствующие параметры. Это достигается за счет того, 
что объект Person содержит ссылку на объект Human и может изменять его свойства и вызывать его методы.
