/* Summary: Given an array of numbers, if the `current number % 2` equals 0.
 * Then add 1 to the counter, once looping is complete return the `counter` */
function evenCount(numArr) {
  // Initalize counter
  let counter = 0;

  // For each number
  for (let i = 0; i < numArr.length; i++) {
    // if it's even
    if (numArr[i] % 2 === 0) {
      // Increment `counter` by 1
      counter += 1;
    }
  }

  return counter;
}

/* Summary: Given a number, loop that many iterations.
 * What the given number is the array returned will have the same length with positive integers counting from 2*/
function firstEvens(evenNumsWanted) {
  // Initalize `evenArr` to an empty Array
  let evenNumArr = [];

  // For each iteration increment the array size by one and add the value `currVal` * 2
  for (let currVal = 1; currVal <= evenNumsWanted; currVal++) {
    evenNumArr.length += 1;
    evenNumArr[evenNumArr.length - 1] = currVal * 2;
  }

  return evenNumArr;
}
