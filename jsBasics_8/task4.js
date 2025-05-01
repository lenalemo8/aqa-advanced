
/**
 * Завдання 4 (Опціонально)

Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.
 */

class Todos {
    getTodo() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Request error');
                }
                return response.json();
            })
    }
}

class Users {
    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Request error');
                }
                return response.json();
            })
    }
}

const firstTodo = new Todos();
const firstUser = new Users();

Promise.all([firstTodo.getTodo(), firstUser.getUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.log('Error:', error);
    });

Promise.race([firstTodo.getTodo(), firstUser.getUser()])
    .then(result => {
        console.log('First:', result);
    })
    .catch(error => {
        console.error('Fail race:', error);
    });

    