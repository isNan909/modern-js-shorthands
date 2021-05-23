// Classical functions are easy to read and write in their plain form, but they do tend to become a bit verbose and confusing once we start nesting them in other function calls.

// With the use of arrow functions, we can return the value directly without having to write a return statement.

// function longhand syntax

let addNumbers = function (a, b) {
  return a + b;
};

setTimeout(function () {
  console.log('this is logged');
}, 3000);

const list = ['one', 'two', 'three'];
list.forEach(function (item) {
  console.log(item);
});

// function shorthand syntax
addNumbers = (a, b) => console.log(a + b);
addNumbers(30, 3234242);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach((item) => console.log(item));

// object longhand syntax

const a = 123,
  b = 321;

const obj = { a: a, b: b };
console.log(obj);

// object shorthand syntax
const objNew = { a, b };
console.log(objNew);
