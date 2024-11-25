/* Qn1. From the given random string display chars present in an even index number. */

const randomStr = 'beginning';

let result = ''
for (let i = 0; i < randomStr.length; i++) {
  if (i % 2 === 0) {
    result += randomStr[i];
  }
}

//console.log(result); //bgnig

// method: 2
const res = randomStr.split('').filter((_, index) => index % 2 === 0).join('');

//console.log(res); //bgnig


/* Qn2. Iterate through the first 10 numbers (0 to 9) and, in each iteration, print the sum of the current number and the previous number */

let previous = 0;

for (let current = 0; current < 10; current++) {
  let sum = current + previous; 
  //console.log(`current ${current} + previous ${previous} = sum ${sum}`);
  previous = current;
}


/* Qn3. merge two arrays, taking odd numbers from arr1 and even numbers from arr2 to form a third array  */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const oddFromArr1 = arr1.filter(e => e % 2 !== 0);
const evenFromArr2 = arr2.filter(e => e % 2 === 0);

const newArr = [...oddFromArr1, ...evenFromArr2];

//console.log(newArr);

/* Qn4. a=[2,4,3,6,8,-1,7]
Target=7
Ouput an array of elements which add upto target */

function findPairs(array, target) {
  let result = [];
  // iterating input array for matches
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push([array[i], array[j]]);
      }
    }
  }
  // return resultant array
  return result;
}

const arr = [2, 4, 3, 6, 8, -1, 7];
const target = 7;
//console.log('Result: ', findPairs(arr, target));

/* Qn5. find the number of occurrences of a substring in a string */

const str = "Emma is a good developer. Emma is also a writer.";
const searchStr = "Emma";

let occurances = (str.match(new RegExp(searchStr, "g")) || []).length;

//console.log(`${searchStr} appeared ${occurances} times. `);

////////////////////////////////////////////////////


/* Qn6. Write a JavaScript program that extracts words from a given string which contain both alphabets and numbers.

Input:
A string of words separated by spaces.
Example: "Emma25 is Data scientist50 and AI Expert"

Expected Output:
An array of words that contain both alphabets and numbers.
Example: ["Emma25", "scientist50"]       */


function getMixStrings(input) {
  // split input by space
  const words = input.split(" ");
  // use regex to find if any word contains both letters and numbers
  const mixStrings = words.filter(word => /[a-zA-Z]/.test(word) && /\d/.test(word));

  return mixStrings;
}

const ogString = "Emma25 is Data scientist50 and AI Expert";
const wordsWithNos = getMixStrings(ogString);

console.log("These are words with numbers in them: ", wordsWithNos);




