// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

function fromDollarToYen(valueInDollar) {
    return valueInDollar * oneEuroIs.USD * oneEuroIs.JPY;
}

function fromYenToPound(valueInYen) {
    return valueInYen * oneEuroIs.JPY * oneEuroIs.GBP;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};