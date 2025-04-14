/**
 * Завдання 3
 * 
 * Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
 * У функції треба поділити numerator на denominator і повернути результат.
 * Додайте валідацію в функції. У разі,
    -якщо denominator дорівнює 0
    -або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
 * Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
 * Огорніть кожен окремий виклик функції divide в try…catch.
   Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
 */

function divide(numerator, denominator) {

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('The argument is not a number!');
    }

    if (denominator === 0) {
        throw new Error('Dividing to zero is impossible!');
    }
    const result = numerator / denominator;
    return result;
}


    try {
        console.log('Test1 - ', divide(10, 'less'));
    }
    catch (error) {
        console.log('Test 1')
        console.error('Error - ', error.message);
    } finally {
        console.log('Operation completed')
    }


    try {
        console.log('Test2 - ', divide(10, 0));
    }
    catch (error) {
        console.log('Test 2')
        console.error('Error - ', error.message);
    } finally {
        console.log('Operation completed')
    }


    try {
        console.log('Test3 - ' + divide(4, 2));
    }
    catch (error) {
        console.log('Test 3')
        console.error('Type or value error', error.message);
    } finally {
        console.log('Operation completed')
    }