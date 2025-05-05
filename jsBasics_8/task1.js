/**
 * Завдання 1

Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та 
кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст 
через вказану кількість мілісекунд
 */

function arbitraryText(text, milliseconds) {
	setTimeout(() => {
		console.log(text);
	}, milliseconds);
}

arbitraryText('Informational text displayed:', 1000);
arbitraryText('Hello!', 2000);
arbitraryText('Time to start!', 3000);
