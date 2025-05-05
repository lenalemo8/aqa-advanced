/**
 1* Sum all the numbers of a given array (cq.list), except the highest the lowest element (by value, not by index!).
The*  highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation
Input validation
If an empty value (null, None, Nothing etc.) is given instead of an Array, or the given array is an empty list or a list with only 1 element, return 0.



 */
/**Сумувати всі числа даного масиву (cq.list), крім найвищого та найнижчого елемента (за значенням, а не за індексом!).
Найвищий або найнижчий елемент, відповідно, є одним елементом на кожному краю, навіть якщо їх більше одного з однаковим значенням.
Зверніть увагу на перевірку введених даних
Перевірка введених даних
Якщо замість масиву вказано порожнє значення (null, None, Nothing тощо), або заданий масив є порожнім списком або списком лише з 1 елементом, поверніть 0.
*/

function sumResult(array) {
	if (!Array.isArray(array) || array.length < 2) return 0;

	const minValue = Math.min(...array);
	const maxValue = Math.max(...array);

	return array.reduce((sum, num) => sum + num, 0) - minValue - maxValue;
}

let cqList1 = [6, 2, 18, 1, 10];
let cqList2 = [1, 1, 11, 2, 3];
console.log(sumResult(cqList1));
console.log(sumResult(cqList2));
