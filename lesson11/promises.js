// Promises

const promise = new Promise((resolve, reject) => {
    const isUserLoggedIn = true;
    if (isUserLoggedIn) {
        setTimeout(() => resolve ('Hi,Bro!'), 3000);
        // resolve ('Hi,Bro!');
    } else {
        reject ('User not logged in');
    }
});
promise
.then(data => {
    return new Promise ((resolve, reject) => {
        if (5 < 10) {
            console.log(data);
            resolve(`${data} - in promise 2`);
        } else {
            reject('Error in nested promise');
        }   
    })
})
.then((data2 => console.log (data2)))
.then(data => {
    return new Promise ((resolve, reject) => {
        if (5 > 10) {
            console.log(data);
            resolve(`${data} - in promise 3`);
        } else {
            reject('The last error');
        }   
    })
}) 
.catch(error => console.log(error))

.then(data => console.log(data))
.catch(error => console.log(error))

console.log(promise);


// promise.then().then().then().then().catch()



//Fetch

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json()) // результат выполнения fetch(), то есть объект Response. 
                                //response.json() — это асинхронная операция, которая читает тело ответа и преобразует его в JavaScript-объект (если это JSON).
                                //Что возвращает: промис, который резолвится в распарсенные данные (обычно объект или массив).
.then(data => { ... })         // получает: результат response.json(), то есть уже распарсенные данные из ответа.
                              //  вызывается console.log(data), чтобы вывести эти данные в консоль.