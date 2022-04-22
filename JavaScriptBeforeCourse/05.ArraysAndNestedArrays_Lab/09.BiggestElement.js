function biggestElement(matrix) {
    let largestNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (largestNumber < matrix[i][j]) {
                largestNumber = matrix[i][j];
            }
        }
    }

    console.log(largestNumber);
}

biggestElement(([[1,2,3],[5,6,7],[3,424,5]]));