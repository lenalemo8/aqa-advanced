/**
 * Завдання 5
 * Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
 * Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
 * Зробіть деструктуризацію в циклі
 */

const users = [
    {name: 'Alex', age: 20, email: 'alexKongo@gmail.com'},
    {name: 'Lisa', age: 21, email: 'lipuma10@gmail.com'},
    {name: 'Lora', age: 27, email: 'lorasmoy@gmail.com'},
];

for (const { name, email, age } of users) {
    console.log(`${name}, ${email}, ${age}`);
}