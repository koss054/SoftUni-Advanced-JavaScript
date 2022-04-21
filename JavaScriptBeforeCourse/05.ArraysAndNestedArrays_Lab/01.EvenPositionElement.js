function getEvenPositionElements(elementArray) {
    let result = '';

    for (let i = 0; i < elementArray.length; i += 2) {
        result += elementArray[i];
        result += ' ';
    }

    console.log(result);
}

getEvenPositionElements(['20', '30', '40', '50', '60']);