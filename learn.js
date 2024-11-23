/* Q1. From the given random string display chars present in an even index number. */

const randomStr = 'beginning';

let result = ''
for (let i = 0; i < randomStr.length; i++) {
  if (i % 2 === 0) {
    result += randomStr[i];
  }
}

console.log(result); //bgnig
