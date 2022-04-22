function oddPositions(array) {
    let processedArray = [];

    for (let i = 1; i < array.length; i++) {
        if (i % 2 != 0) {
            processedArray.unshift(array[i] * 2);
        }
    }

    console.log(processedArray.join(' '));
}

oddPositions([10, 15, 20, 25]);
oddPositions([3, 0, 10, 4, 7, 3]);