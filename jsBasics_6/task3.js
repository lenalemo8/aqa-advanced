/**
 * Завдання 3
 * Створіть об'єкт car1 з такими властивостями:
    - brand: рядок, представляє марку автомобіля.
    - model: рядок, представляє модель автомобіля.
    - year: число, представляє рік випуску автомобіля.
 * Створіть об'єкт car2 з такими властивостями:
    - brand: рядок, представляє марку автомобіля.
    - model: рядок, представляє модель автомобіля.
    - owner: число, представляє рік випуску автомобіля.
 * Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
 * Виведіть об'єкт car3 в консоль.
 */

//1
// const car1 = {
//     brand1:'Honda',
//     model1:'Civic',
//     year1: 2022
// };

// const car2 = {
//     brand2: 'Ford',
//     model2: 'Mustang',
//     year2: 2020
// };

// const car3 = {
//     ...car1,
//     ...car2
// };

// console.log(car3);

//2

const car1 = {
	brand: 'Honda',
	model: 'Civic',
	year: 2022,
};

const car2 = {
	brand: 'Ford',
	model: 'Mustang',
	owner: 'Kat Noise',
};

const car3 = {
	...car1,
	...car2,
};

console.log(car3);
