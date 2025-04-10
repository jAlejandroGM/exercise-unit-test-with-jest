// Función de suma de ejemplo
const sum = function(a, b) {
    return a + b;
}

// Convertir de euro a dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Convertir de euro a yen
const fromEuroToYen = function(valueInEuro) {
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

// Convertir de yen a dólar
const fromYenToDollar = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Convertir de yen a libra esterlina
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

// Exportar todas las funciones
module.exports = {
    sum,
    fromEuroToDollar,
    fromEuroToYen,
    fromYenToDollar,
    fromYenToPound
};