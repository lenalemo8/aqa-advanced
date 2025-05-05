/**
 * Завдання 3

Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити
 */

async function getTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	if (!response.ok) {
		throw new Error('Request error');
	}
	const data = await response.json();
	return data;
}

// getTodo()
//     .then(todo => console.log('Todo:', todo))
//     .catch(error => console.error('Error:', error));

async function getUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	if (!response.ok) {
		throw new Error('Request error');
	}
	const user = await response.json();
	return user;
}

// getUser()
//     .then(user => console.log('User:', user))
//     .catch(error => console.error('Error:', error));

async function getAll() {
	try {
		const [todo, user] = await Promise.all([getTodo(), getUser()]);
		console.log('Todo:', todo);
		console.log('User:', user);
	} catch (error) {
		console.error('Error in Promise.all:', error);
	}
}

async function getRace() {
	try {
		const result = await Promise.race([getTodo(), getUser()]);
		console.log('First completed:', result);
	} catch (error) {
		console.error('Fail race:', error);
	}
}

getAll();
getRace();
