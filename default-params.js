// Longhand syntax

function add(test1, test2) {
  if (test1 === undefined) test1 = 4;
  if (test2 === undefined) test2 = 21;
  return test1 + test2;
}

// Shorthand syntax

add = (test1 = 4, test2 = 21) => test1 + test2;
console.log(add());
