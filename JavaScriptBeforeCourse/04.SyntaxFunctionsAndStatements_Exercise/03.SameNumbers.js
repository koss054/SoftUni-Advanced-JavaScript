function checkIfSame(numberToCheck) {
    let result = 0;
    let numberAsString = String(numberToCheck);
    let isSame = true;

    for (let i = 0; i < numberAsString.length - 1; i++) {
        if (numberAsString[i] != numberAsString[i + 1]) {
            isSame = false;
        }

        result += Number(numberAsString[i]);
    }

    result += Number(numberAsString[numberAsString.length - 1]);
    console.log(isSame);
    console.log(result);
}

checkIfSame(2222222);
checkIfSame('1234');