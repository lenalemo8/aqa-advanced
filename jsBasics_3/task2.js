/**
 * Створіть функцію яка приймає один параметр: age.
 * Усередині функції перевірте, чи age більше або рівне 18.
 * Якщо age відповідає умові, поверніть true, інакше поверніть false.
 * Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.
 */

function isAdult(age) {
    if (age >= 18)
        return true
    else return false
}

let person1isAdult = isAdult(25);
if (person1isAdult)
    console.log('The person is an adult');
else
    console.log('The person is not an adult');

let person2isAdult = isAdult(15);
if (person2isAdult)
    console.log('The person is an adult');
else
    console.log('The person is not an adult');


