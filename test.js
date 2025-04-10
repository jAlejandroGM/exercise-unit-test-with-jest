const { sum, fromEuroToDollar, fromEuroToYen, fromYenToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('converts 3.5 euros to dollars (should be 3.745)', () => {
    let dollars = fromEuroToDollar(3.5);
    expect(dollars).toBeCloseTo(3.745);
});

test('converts 1 euro to yen (should be 156.5)', () => {
    let yen = fromEuroToYen(1);
    expect(yen).toBe(156.5);
});

test('converts 156.5 yen to dollars (should be approx. 1.07)', () => {
    let dollars = fromYenToDollar(156.5);
    expect(dollars).toBeCloseTo(1.07);
});

test('converts 156.5 yen to pounds (should be approx. 0.87)', () => {
    let pounds = fromYenToPound(156.5);
    expect(pounds).toBeCloseTo(0.87);
});