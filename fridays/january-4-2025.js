function calculateScore(numArry, breakPoint) {
  let counter = 0;

  for (let i = 0; i < numArry.length; i++) {
    if (i < breakPoint && numArry[i] < 0) {
      counter += 1;
    }

    if (i >= breakPoint && numArry[i] > 0) {
      counter += 2;
    }
  }

  return counter;
}

function scoreAfterOptimalSwap(numArry, breakPoint) {
  for (let i = 0; i < breakPoint; i++) {
    if (numArry[i] > 0) {
      for (let k = breakPoint; k < numArry.length; k++) {
        if (numArry[k] < 0) {
          let temp = numArry[i];
          numArry[i] = numArry[k];
          numArry[k] = temp;
        }
      }
    }
  }
  return calculateScore(numArry, breakPoint);
}

function optimalScore(numArry) {
  let highestScore = 0;

  for (let i = 0; i < numArry.length - 1; i++) {
    if (calculateScore(numArry, i) > highestScore) {
      highestScore = calculateScore(numArry, i);
    }
  }

  return highestScore;
}
