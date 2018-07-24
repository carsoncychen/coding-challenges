// BinaryGap

function solution(N) {

  let inputNum = N;
  let counter = -1;
  let max = 0;

  while (inputNum > 0) {
    const digit = inputNum % 2;
    if (digit === 1) {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    } else if (counter >= max) {
      counter ++;
    }

    inputNum = parseInt(inputNum/2);
  }

  return max;
}

solution(100);

// ===========================

// CyclicRotation

function solution(A, K) {

    const inputArray = A;
    const len = inputArray.length;
    const displace = K;
    const result = [];

    if (displace === 0 || len <= 1) {
        return inputArray;
    }

    for (let i = 0; i < len; i ++) {
        const newPost = (i + displace) % len;
        result[newPost] = inputArray[i];
    }

    return result;
}

// ===========================

//
