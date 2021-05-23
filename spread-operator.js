// The three dots ...
// The spread operator can be used on iterables like a String or an array and it'll put the contents of the iterable into individual elements.

//

// a. expanding an array
const sentenceOld = new Array('I', 'love', 'coding'); // old way of declaring a variable array
const sentence = ['I', 'love', 'coding']; // shortcut way of declaring a variable array
console.log(...sentence);




// converting string into character list
const someString = 'coders';
console.log([...someString]);




// b. combining arrays

// old way which does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
var launguages = ['typescript', 'javascript'];
var launguageAdd = ['python', 'go'];
var seeLaunguages = launguages.concat(launguageAdd);
console.log(seeLaunguages);




// shorthand way to combine multiple arrays into one array
const languageArray = ['typescript', 'javascript'];
const languageArrayAdd = ['python', 'go'];
console.log([...languageArray, ...languageArrayAdd]); // es8 way of doing this which returns new array

languageArray.push(...languageArrayAdd);
console.log(languageArray); // mutates original array




// shorthand way to combine multiple objects into one object

const launguageObject = { a: 'typescript', b: 'javascript' };
const launguageObjectAdd = { c: 'python', d: 'go', ...launguageObject }; // also can use object.assign ES6 rather object destructuring with spread operator ES8
console.log(launguageObjectAdd);






// c. copying arrays and objects

const words = ['coding', 'is', 'fun'];
const wordsNew = [...words];
console.log(wordsNew);
const wordsNewer = [...words, 'really'];
// const wordsNewer = words.push(wordsNew);
console.log(wordsNew);
console.log(wordsNewer);
console.log(words);
