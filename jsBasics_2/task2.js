/*Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. 
Напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки 
використовуючи конструкцію switch/case*/

let averageGrade2 = 85;

switch (true) {
	case averageGrade2 < 60:
		console.log('Незадовільно');
		break;
	case averageGrade2 >= 60 && averageGrade2 <= 70:
		console.log('Задовільно');
		break;
	case averageGrade2 >= 71 && averageGrade2 <= 80:
		console.log('Добре');
		break;
	case averageGrade2 >= 81 && averageGrade2 <= 90:
		console.log('Дуже добре');
		break;
	case averageGrade2 >= 91 && averageGrade2 <= 100:
		console.log('Відмінно');
		break;
	default:
		console.log('Невірний формат середньої оцінки');
}
