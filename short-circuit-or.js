// When assigning a variable value to another variable, we may want to ensure that the source variable is not null, undefined, or empty.

// We can either write a long if statement with multiple conditionals, or use a short - circuit evaluation in this case.

//long hand version

let user1 = 'foo';

if (user1 !== null || user1 !== undefined || user1 !== '') {
  let user2 = user1;
  console.log(user2);
}

// shorthand version

// let user1 = 'bar';
let user1;
let user2 = user1 || 'bar';
console.log(user2 === 'bar'); // prints true

user1 = 'foo';
user2 = user1 || 'bar';
console.log(user2); // prints foo

// longhand

let currentEnv;
if (process.env.CURRENT_ENV) {
  environment = process.env.CURRENT_ENV;
} else {
  environment = 'localhost';
}


// shorthand version

const currentEnv = process.env.CURRENT_ENV || 'localhost';
