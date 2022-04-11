function aggregateElements(elements) {
    function aggregate(array, initialValue, func) {
        let value = initialValue;
        for (let i = 0; i < array.length; i++) {
            value = func(value, array[i]); 
        }

        console.log(value);
    }

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);
}

const firstArray = [1, 2, 3];
const seccondArray = [2, 4, 8, 16];

aggregateElements(firstArray);
aggregateElements(seccondArray);