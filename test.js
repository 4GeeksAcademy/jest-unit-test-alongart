

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
     
})

test("One Dolalr should be 153.48 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const Yen = fromDollarToYen(5)
    

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 4 * 153.48; 
    
    // this is the comparison for the unit test
    expect(fromDollarToYen(4)).toBe(613.92); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
     
})

test("One Yen should be 102.32 GBP", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(2.3)
    

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 2.3 * 102.32; 
    
    // this is the comparison for the unit test
    expect(fromYenToPound(2.3)).toBe(235.336); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
     
})
