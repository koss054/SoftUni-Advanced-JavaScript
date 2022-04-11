function getFruitPrice(fruitType, fruitGrams, pricePerKilo) {
    let fruitPrice = 0;
    fruitPrice = pricePerKilo * (fruitGrams / 1000);

    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${(fruitGrams / 1000).toFixed(2)} kilograms ${fruitType}.`);
}

getFruitPrice('orange', 2500, 1.80);