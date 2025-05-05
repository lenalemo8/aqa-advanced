//Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while

// for:
let number = 7;
for (let multiplier = 1; multiplier <= 10; multiplier++) {
	let res = number * multiplier;
	console.log(`${number} * ${multiplier} = ${res}`);
}

console.log('------------------------');

// do while:

let multiplier = 1;
do {
	let res = number * multiplier;
	console.log(`${number} * ${multiplier} = ${res}`);
	multiplier++;
} while (multiplier <= 10);
