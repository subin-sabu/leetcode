/* Q1. From the given random string display chars present in an even index number. */

const randomStr = 'beginning';

let result = ''
for (let i = 0; i < randomStr.length; i++) {
  if (i % 2 === 0) {
    result += randomStr[i];
  }
}

console.log(result); //bgnig

// method: 2
const res = randomStr.split('').filter((_, index) => index % 2 === 0).join('');

console.log(res); //bgnig


/* Q2. Iterate through the first 10 numbers (0 to 9) and, in each iteration, print the sum of the current number and the previous number */

let previous = 0;

for (let current = 0; current < 10; current++) {
  let sum = current + previous; 
  console.log(`current ${current} + previous ${previous} = sum ${sum}`);
  previous = current;
}
