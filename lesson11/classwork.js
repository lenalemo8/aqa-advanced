
// function startProgram() {
//     console.log('Start program')
// }

// function finishProgram() {
//     console.log('Finish program')
// }

// startProgram();
// setTimeout(function() {
//     console.log('Asyng operation is done');
// }, 0);
// finishProgram();


// const getNumber = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject(new Error ('Number is less then 0.5'));
//         }
//     }, 2000);
// })

// getNumber.then((result) => console.log('Result:' + result));

// // і можливо відловлювати помилку з catch

// getNumber.then((result) => console.log('Result is successful1:' + result))
//     then.((result) => console.log('Result is successful2:' + result))
//     .catch((error) => console.error('Result is not successful:' + error));

//     .finally(() => console.log('Finally'));


// function createNewPromiseWithDelay(value, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (value === 'One') {
//                 resolve(value);
//             } else {
//                 reject(value);
//             }
//         }, delay)
//     })
// }

// const promises = [
//     createNewPromiseWithDelay('One', 1000),
//     createNewPromiseWithDelay('One', 3000),
//     createNewPromiseWithDelay('Three', 2000)
// ]

// Promise.all(promises)
//     .then(results => console.log('All results: ' + results))
//     .catch(error => console.log(error));




function getPostById(postId) {
    return fetch (`url/${postId}`);

}
