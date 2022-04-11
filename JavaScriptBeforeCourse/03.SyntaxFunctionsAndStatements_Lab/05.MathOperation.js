function solve(firstNumber, secondNumber, symbol) {
    let result;

    switch (symbol) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '%': result = firstNumber % secondNumber; break;
        case '**': result = firstNumber ** secondNumber; break;
    }

    console.log(result);
}

solve(5, 6, '+');
solve (10, 5, '-');
solve (10, 5, '*');
solve (100, 10, '/');
solve (4, 2, '%');
solve (10, 10, '**');