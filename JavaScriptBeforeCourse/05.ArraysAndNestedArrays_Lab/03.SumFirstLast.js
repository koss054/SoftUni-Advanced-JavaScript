function sumFirstAndLast(array) {
    let sum = 0;

    let firstNumber = Number(array[0]);
    let lastNumber = Number(array[array.length - 1]);

    sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);