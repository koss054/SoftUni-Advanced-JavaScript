function orderArray(oldArray) {
    let newArray = [];

    for (let i = 0; i < oldArray.length; i++) {
        if (oldArray[i] >= 0) {
            newArray.push(oldArray[i]);
        }
        else {
            newArray.unshift(oldArray[i]);
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
    }
}

orderArray(['7', '-2', '8', '9']);
orderArray(['3', '-2', '0', '-1']);