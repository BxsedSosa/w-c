function secondGreatestNum(arr) {
  let largestNum = -Infinity;
  let secondLargestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargestNum && arr[i] !== largestNum) {
      secondLargestNum = arr[i];
    }
  }

  return secondLargestNum;
}

function arrRandomNumGen(numbersWanted) {
  let min = -100;
  let max = 0;

  return Array(numbersWanted)
    .fill()
    .map((_) => {
      return Math.random() * (max - min + 1) + min;
    });
}

function sortArrayMethod(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let largestNum = arr[arr.length - 1];
  let secondLargestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargestNum && arr[i] !== largestNum) {
      secondLargestNum = arr[i];
    }
  }
  return secondLargestNum;
}

function testFunction(iterations) {
  if (iterations < 2) {
    return true;
  }

  let correctAnswers = [];
  let secondLargestNum = -Infinity;
  for (let i = 2; i < iterations; i++) {
    let randomArr = arrRandomNumGen(i);
    secondLargestNum = secondGreatestNum(randomArr.slice());
    console.log(`Second Largest: ${secondLargestNum}`);

    if (sortArrayMethod(randomArr) === secondLargestNum) {
      correctAnswers.push(true);
    } else {
      correctAnswers.push(false);
    }
  }

  let correctAnswersCount = correctAnswers.reduce((accum, curr) => {
    if (curr === true) {
      return (accum += 1);
    }
  }, 0);

  return correctAnswersCount === iterations - 2;
}

console.log(testFunction(100));
