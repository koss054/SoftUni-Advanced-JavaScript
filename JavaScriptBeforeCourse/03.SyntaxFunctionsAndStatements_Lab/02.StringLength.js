function getStringLengthSumAndAverage(firstInput, secondInput, thirdInput) {
    let firstInputLength = firstInput.length;
    let secondInputLength = secondInput.length;
    let thirdInputLength = thirdInput.length;
    
    let lengthSum = firstInputLength + secondInputLength + thirdInputLength;
    let averageOfSum = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageOfSum);
}

getStringLengthSumAndAverage("chocolate", "ice cream", "cake");