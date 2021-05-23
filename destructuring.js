// Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. 

// When we are working with any popular web framework there are chances we will be making the use of arrays or data in the form of object literals to pass information between components and APIs.

// In short this useful feature allows us to get individual pieces of arrays and objects with less code. 

//

// Longhand to imports

var useState = require('react');
var useRef = require('react');

const loading = this.props.loading;
const errors = this.props.errors;

// Shorthand imports

import { useState, useRef } from 'react';

const { loading, errors } = this.props;

// Destructuring an array

const launguages = ['javascript', 'typescript', 'python'];
const [firstLang, , secondLang] = launguages;
console.log(firstLang);
console.log(secondLang);

// Destructuring the object

// old longer way

var coderGang = {
  gangName: 'Coding Passionates',
  established: '2019',
};

var gangName = coderGang.gangName;
var established = coderGang.established;
console.log(gangName);
console.log(established);

// short modern way
const coderGangNew = {
  gangNameNew: 'Coding Passionates',
  establishedNew: '2019',
};

const { gangName, established } = coderGangNew;
console.log(gangNameNew);
console.log(establishedNew);

// Destructuring an nested object

const programmer = {
  name: 'Ben',
  experience: 10,
  launguages: {
    a: 'Javascript',
    b: 'Typescript',
  },
};
const {
  name,
  launguages: { a },
} = programmer;

console.log(name);
console.log(a);

// Destructuring an array from a function

function addAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, multiply] = addAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
