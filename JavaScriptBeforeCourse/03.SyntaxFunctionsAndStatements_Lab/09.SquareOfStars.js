function printSquare(enteredNumber) {
    let squareSize = 0;
    let squareToPrint = '';

    if (enteredNumber == null) {
        squareSize = Number(5);
    }
    else {
        squareSize = Number(enteredNumber);
    }

    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            squareToPrint += '* ';
        }

        console.log(squareToPrint.trim());
        squareToPrint = '';
    }
}

printSquare(10);