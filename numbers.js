//Shorthand code syntax we can use with numbers

//The parseInt() function parses a string and returns an integer.
// Longhand string to number

const numOne = parseInt('23221');
console.log(numOne);

//Shorthand string to number

const numTwo = +'23221';
console.log(numTwo);

// The Math.floor() method returns the largest integer less than or equal to a given number.

// Longhand string to number

const numThree = '123.67';
console.log(Math.floor(numThree));

// Shorthand string to number with '~' tide symbol
console.log(~~numThree);


// The Math.pow() method returns the base to the exponent power, that is, baseexponent.


// Longhand power exponent
console.log(Math.pow(2, 4));

// Shorthand power exponent
console.log(2 ** 4);