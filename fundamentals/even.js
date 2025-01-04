/* Summary: Given the number, if `n` modulo `2` has a remainder of `0` then it is even, return true. Otherwise, return false because the number is odd. */
function even(n) {
  // if `n` modulo `2` has a remainder of `0` the input is even, return true.
  if (n % 2 === 0) {
    return true;
    // Otherwise, return false.
  } else {
    return false;
  }
}

/* Summary: Given the array of numbers, loop through each individual number if `n` modulo `2` is equal to `1` then return false. Otherwise, after the loop is finished return true. */
function allEven(numArr) {
  // Loop through each number within the array
  for (let i = 0; i < numArr.length; i++) {
    // if `n` modulo `2` has a remainder of `1` the input is odd, return false. This will end the loop early if any number is odd
    if (numArr[i] % 2 === 1) {
      return false;
    }
  }

  // If the `for` loop ends that means none of the numbers in the array are odd, return true.
  return true;
}
