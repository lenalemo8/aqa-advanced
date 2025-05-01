/**
 * Завдання 2

В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
1. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом:
<https://jsonplaceholder.typicode.com/todos/1>
    - Функція повинна повертати як результат Promise що повертає об’єкт todo
2. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом:
<https://jsonplaceholder.typicode.com/users/1>
    - Функція повинна повертати як результат Promise що повертає об’єкт user
    - Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних
 */

// 2.1 


function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Request error');
            }
            return response.json();
        })
    // .then(todo => {
    //     console.log('Todo object:', todo);
    //     return todo;
    // })
}
// getTodo()
//     .then(todo => {
//         console.log('Get todo:', todo);
//     })
// .catch(error => {
//     console.error('Error fetching todo:', error); 
// });



// 2.2
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Request error');
            }
            return response.json();
        })
    // .then(user => {
    //     console.log('User details:', user);
    //     return user;
    // })
}

// getUser()
// .then(user => {
//     console.log("User received:", user);
// })
// .catch(error => {
//     console.error('Error fetching todo:', error);
// });

//2.3 Promise.all

Promise.all([getTodo(), getUser()])
    .then(results => {
        const [todo, user] = results;
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.log('Error:', error);
    });

// // Promise.race (перший)
Promise.race([getTodo(), getUser()])
    .then(result => {
        console.log('First:', result);
    })
    .catch(error => {
        console.error('Fail race:', error);
    });

