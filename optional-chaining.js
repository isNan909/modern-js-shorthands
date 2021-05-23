// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.

// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.When it's possible that a reference or function may be undefined or null.

// the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

// So, if there are any further function calls or side effects, they don’t occur.

let programmers = {
  freelancers: {
    names: {
      a: 'ben',
      b: 'krim',
    },
  },
  fulltime: {
    names: {},
  },
};

//   console.log(programmers.freelancers.names.a);
console.log(programmers.names.a); //error
console.log(programmers?.fulltime?.names?.a ?? 'no fulltime coders');



// ususage with functions and constructor calls

let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

// userAdmin.admin?.();  // logs I am admin
userGuest.admin?.(); // does nothing
