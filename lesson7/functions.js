function multiplier (num1) {
    return function (num2) {
        return num1 * num2;

    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10))
console.log(double(5)

//2

// function lotS (b) {
//     if (b === "0") {
//         throw new Error("Some error");
           
//     }
//     return true
// }

// try {
//     console.log(lotS("0"));
// } catch (err) {
//     console.error("Поймали ошибку:", err.message);
}