function cookNumbers(numberAsString, first, second, third, fourth, fifth) {
    let number = Number(numberAsString);
    let array = [first, second, third, fourth, fifth];

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= (number * 0.2);    
        }

        console.log(number);
    }
}

cookNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');