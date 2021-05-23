// Loops are handy, if you want to run the same code over and over again, each time with a different value.


// Often this is the case when working with arrays.

//

// Working with loops

// older for loop

var launguages = ['javascript', 'typescript', 'python'];
var lang = '';
for (var i = 0; i < launguages.length; i++) {
  lang += launguages[i] + '<br>';
  console.log(lang);
}

// shorthand modern loop

const launguagesNew = ['javascript', 'typescript', 'python'];
for (let language of launguagesNew) {
  console.log(language);
}

// for accessing index in loops

const launguagesIndex = ['javascript', 'typescript', 'python'];
for (let index of launguagesIndex) {
  console.log(index);
}

// acessing object with keys

const launguagesObject = { a: 'javascript', b: 'typescript', c: 'python' };
for (let key in launguagesObject) {
  console.log(key, launguagesObject);
}

// shorthand for Array.forEach

const launguagesArray = ['javascript', 'typescript', 'python'];
launguagesArray.forEach((element, index, array) => {
  console.log(element, index, array);
});

// iterating with .map() HOF

let launguagesMapping = ['javascript', 'typescript', 'python'];
launguagesMapping.map((names) => console.log(names));

let experience = [5, 2, 1];
const coderList = launguagesMapping.map((names, i) => {
  console.log([names, experience[i]]);
});


// cool for loop trick

for (let i = 0; i < 1e2; i++) {
    console.log(i); // 1e2 is 100 and 1e3 is 1000
}