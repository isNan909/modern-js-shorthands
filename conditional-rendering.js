//A simple if else statement. Show something if true else show something if false.

// if else syntax

// long hand version
if (1000 > 100) {
  console.log('1000 is greater than 100');
} else {
  console.log('100 is not greater than 1000');
}

// shorthand syntax
console.log(
  1e3 > 1e2 ? '1000 is greater than 100' : '100 is not greater than 1000'
);

// only if syntax

// long hand version
if (2000 > 200) {
  console.log('2000 is greater than 200');
}

// short hand version
console.log(2e3 > 2e2 && '2000 is greater than 200');

//Nested if else statements

const numOne = 5;
checkGreater =
  numOne > 20
    ? 'greater than 20'
    : numOne < 20
    ? 'less than 20'
    : 'between the range 5 20';
console.log(checkGreater);

// Object conditionals

const x = 30,
  big = { true: x > 30, false: x <= 30 };
console.log(big);
