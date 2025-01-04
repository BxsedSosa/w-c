function howManyPairs(numArry) {
  let counter = 0;

  for (let i = 1; i < numArry.length - 1; i++) {
    counter += i % numArry.length;
  }

  return counter;
}

function howManPairsSumToN(numArry, number) {
  let pairCounter = 0;

  for (let i = 0; i < numArry.length - 2; i++) {
    for (let j = 0; j < numArry.length - 1; j++) {
      if (numArry[i] + numArry[j] === number) {
        pairCounter += 1;
      }
    }
  }

  return pairCounter;
}
