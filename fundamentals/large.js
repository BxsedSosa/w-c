/* Summary: Taken a number see if the number is greater than 10 */

function large(number) {
  // Check if the input `number` is greater than 10
  if (number > 10) {
    // returing a boolean value to clarify that `number` is greater than 10
    return true;
    // Otherwise:
  } else {
    // returning the boolean value `false` to showcase that the `number` input is NOT greater than 10
    return false;
  }
}

/* Summary: Given two numbers, return the largest number of the two numbers */

function larger(numberOne, numberTwo) {
  // Check if `numberOne` is equal to`numberTwo`
  if (numberOne === numberTwo) {
    // returning either number in this case would work since they would be the same exact number
    return numberOne;
  }

  // Check if `numberOne` is greater than `numberTwo`
  if (numberOne > numberTwo) {
    // return `numberOne` since it is greater than `numberTwo`
    return numberOne;
    // Otherwise:
  } else {
    // return `numberTwo` since the `if` condition is `falsy` telling us that `numberOne` is NOT greater than `numberTwo`
    return numberTwo;
  }
}

/* Summary: Given three numbers, return the largest number of the three numbers */

function largest(numberOne, numberTwo, numberThree) {
  // Initalize a variable `largestNumber` equal to the first parameter `numberOne`. This creates the case if the first argument is greater than the other 2 inputs it will be returned as the largest number
  let largestNumber = numberOne;

  // Check if `numberTwo` is greater than `largestNumber`
  if (numberTwo > largestNumber) {
    // reassign `largestNumber`to the value of `numberTwo`
    largestNumber = numberTwo;
  }

  // Check if `numberThree` is greater than `largestNumber`
  if (numberThree > largestNumber) {
    // reassign largestNumber to the value of `numberThree`
    largestNumber = numberThree;
  }

  // return the variable `largestNumber` which will be the value of the largest number out of all the 3 inputs to the function
  return largestNumber;
}
