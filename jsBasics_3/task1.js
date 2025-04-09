/**
 * Створіть функцію яка приймає два параметри: width і height.
 * Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
 * Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
 * Реалізуйте функцію трьома способами (function declaration, function expression, arrow function) */


//function declaration

function calculateArea(width, height) {
    console.log(`The area is ${width * height}`);
    return width * height;

}
calculateArea(5, 10);


//function expression

const areaRectangle = function (width, height) {
    return width * height;

}
console.log(areaRectangle(5, 10));

// arrow function

const areaRectangle2 = (width, height) => width * height;

console.log(areaRectangle(5, 10));



