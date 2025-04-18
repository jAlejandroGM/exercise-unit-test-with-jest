const sum = function(a, b) {
    return a + b;
}

// Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Euro to Yen
const fromEuroToYen = function(valueInEuro) {
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

// Yen to Dollar
const fromYenToDollar = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Yen to Pound
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

module.exports = {
    sum,
    fromEuroToDollar,
    fromEuroToYen,
    fromYenToDollar,
    fromYenToPound
};