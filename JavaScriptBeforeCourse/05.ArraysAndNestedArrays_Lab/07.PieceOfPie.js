function pie(array, beginningPie, endingPie) {
    let beginningIndex = array.indexOf(beginningPie);
    let endingIndex = array.indexOf(endingPie);
    let splicedArray = array.splice(beginningIndex, endingIndex - beginningIndex + 1);

    return splicedArray;
}

console.log(pie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Pie'));
console.log(pie(['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'], 'Third', 'Sixth'));