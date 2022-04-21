function getBiggerHalf(array) {
    array.sort((a, b) => a - b);
    const middle = Math.floor(array.length / 2);
    const result = array.splice(middle);

    return result;
}

console.log(getBiggerHalf([4, 2, 7, 5]));
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6]));