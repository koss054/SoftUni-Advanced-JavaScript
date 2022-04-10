function getLargestNumber(firstNumber, secondNumber, thirdNumber) {
    let largestNumber;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        largestNumber = firstNumber;
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        largestNumber = secondNumber;
    }
    else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        largestNumber = thirdNumber;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

getLargestNumber(1, 5, 20);
getLargestNumber(30, 20, 10);
getLargestNumber(20, 64, 10);