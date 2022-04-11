function sumNumbers(firstNumber, secondNumber) {
    let fromNumber = Number(firstNumber);
    let toNumber = Number(secondNumber);

    let result = 0;

    for (let i = fromNumber; i <= toNumber; i++) {
        result += Number(i);
    }

    return result;
}

console.log(sumNumbers(1, 5));
console.log(sumNumbers(-8, 20));