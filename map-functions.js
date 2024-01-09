const numbers = [1,2,3,4,5];

const squareNumbers = numbers.map((number , index) =>{
    return number ** 2;
}


);

console.log(squareNumbers);

// map functions

const number = [1,2,3,4,5];

const doubleNumber  = number.map((number , index) => {
    return number * 2;
}
);



//  with the map functions

// Key Differences
// forEach:

// Does not return a new array.
// Typically used for side effects (e.g., printing or modifying elements in place).
// Cannot be used to create a new array with modified data directly.
// map:

// Returns a new array with the results of applying the provided function to each element.
// Preferred when you need to transform or modify the data in an array and create a new array with the modified values.