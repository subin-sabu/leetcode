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

//console.log("These are words with numbers in them: ", wordsWithNos);

///////////////////////////////////////////////

/* Qn7. array=[4,3,8,12,7,6,9,11,5]
Find the largest,second largest and third largest elements in the array    */

let inputArray = [4,3,8,12,7,6,9,11,5];

let largest = 0; 
let secondLargest = 0; 
let thirdLargest = 0;

for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] >= largest) {
    thirdLargest = secondLargest;
    secondLargest = largest;
    largest = inputArray[i];
  } else if (inputArray[i] >= secondLargest) {
    thirdLargest = secondLargest;
    secondLargest = inputArray[i];
  } else if (inputArray[i] >= thirdLargest){
    thirdLargest = inputArray[i];
  }
}

//console.log(`largest: ${largest}, second largest: ${secondLargest}, third largest: ${thirdLargest}`);

//////////////////////////////////////////////

/* Qn8. count the frequency of each character in a string */
function countCharFrequency (str) {
  const frequency = {};

  for (const char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

const ans = countCharFrequency("banana");
//console.log(ans);

////////////////////////////////////////

/* Qn9. String Rotation
Write a function to check if one string is a rotation of another.
Example: "abcd" and "dabc" → True */

function isRotation(str1, str2) {
  // check if length === same
  if (str1.length !== str2.length) return false;
  
  // concatenate str1 with itself
  const concatStr = str1 + str1;

  //check if str2 is a substring of concatStr
  return concatStr.includes(str2);
}

//console.log(isRotation("abcd", "dabc"));


/////////////////////////////////////////////


/* Qn10. First Non-Repeating Character
Find the first non-repeating character in a string.
Example: "swiss" → "w"   */

function getFirstNonRepChar(str) {
  const frequency = {};

  // count frequency of each char
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // find first char of frequency one
  for (const char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }
  // return null if no unique chars found
  return null;
}

//console.log(getFirstNonRepChar("swiss"));

//////////////////////////////////////////


/* Qn11. Remove Duplicates
Remove duplicate characters from a string.
Example: "programming" → "progamin"    */

function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

const srcStr = 'programming';
//console.log('The unique elements are: ', removeDuplicates(srcStr));

const indexArr = []
srcStr.split('').forEach((doc, index)=>{
  indexArr.push(doc, index)
})

//console.log(indexArr.join(''))
let a = [1, 2,3 ];
let b = [1, 2,3 ];


//console.log("comparison:", JSON.stringify([1, 2,3 ])== JSON.stringify([1, 2,3 ]))

/* Qn13. Write a function to reverse an array. */

let arrayToBeReversed = [1, 2, 3, 4, 5];

function reverseArray(array) {
  // two pointer technique
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let temp = array[left]; 
    array[left] = array[right];
    array[right] = temp;

    // increment left and decrement right
    left++;
    right--;
  }
  return array;
}

//console.log(reverseArray(arrayToBeReversed));


/* Qn14.  How do you find the maximum and minimum elements in an array?
*/

const minMaxArray = [12, 5, 18, 3, 9, 10];
const max = Math.max(...minMaxArray);
const min = Math.min(...minMaxArray);

//console.log(`Max value: ${max} and Min value: ${min}`);

/* Qn15. Write a program to check if two arrays are equal. */

const identicalArray1 = [1, 2, 3];
const identicalArray2 = [1, 2, 3];

function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//console.log(areArraysEqual(identicalArray1, identicalArray2));
// global.name = 'Subin';
// function print() {console.log(this.name);}

// global.name = 'Sai'
// print()

// console.log(this.name);


let hello = {name: 'Unni', log: function(age, place){console.log(`${this.name} (${this.age}) has left for ${place}`)}}

let obj1 = {name: 'Kuttan', age: 48}
let obj2 = {name: 'Pottan'}
// hello.log(); // Unni

//hello.log.apply(obj2, [34, "Hell"]);

//hello.log.call(obj1, 35, "Heaven");

/* Qn16. Function to write the sum of two numbers. */

function getSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Enter valid numbers");
    return null;
  }
  return a + b;
}

//console.log(getSum(7, 5))

/* Qn17. How do you find the missing number in an array of size n containing numbers from 1 to n+1?
*/

function findMissingNumber(arr) {
  // get n
  const n = arr.length;

  // calculate sum of numbers from 1 to n+1
  const expectedSum = ((n + 1) * (n + 2)) / 2;

  // calculate sum of current elements in arr
  const currentSum = arr.reduce((sum, num) => sum + num, 0);

  // Find difference and you"ll have the missing number
  return expectedSum - currentSum; 
}

const missingNumArray = [1, 2, 3, 5, 6];

 //console.log("Missing Number is:", findMissingNumber(missingNumArray)); 

////////////////////////////////////////////

/* 
Qn18. Find the intersection of two arrays
*/

function findIntersection(arr1, arr2) {
  // Use filter to retain only common elements
  return arr1.filter(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = findIntersection(array1, array2);

console.log("Intersection:", intersection); // [4, 5]


////////////////////////////////////////////


/* Different ways to create an object in JavaScript? */

//Object literals
const obj1 = { key: "value" };

// Constructor function
function Person(name) {
  this.name = name;
}
const obj2 = new Person("Alice");

//Object.create method
const obj3 = Object.create({ key: "value" });

//“new Object()” syntax
const obj4 = new Object();

//ES6 “class” syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const obj5 = new Animal("Dog");