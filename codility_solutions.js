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

// OddOccurrencesInArray

function solution(A) {
    let result = 0;
    for (let i = 0; i < A.length; i ++) {
        result ^= A[i];
    }
    return result;
}

// ============================

// find missing num

function solution(A) {
    const arr = A;
    let expectSum = 0;
    let realSum = 0;

    for (let i = 0; i <= arr.length; i++) {
        expectSum += i + 1;
        if (arr[i] !== undefined) {
            realSum += arr[i];
        }
    }

    return expectSum - realSum;
};

// ================================

// find diff in tape

function solution(A) {
    const arr = A;
    const len = arr.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }

    let curLeft = 0;
    let curRight = 0;
    let lowest;
    for (let i = 0; i < len; i++) {
        curLeft += arr[i];
        curRight = sum - curLeft;
        const diff = Math.abs(curLeft - curRight);
        if (diff < lowest || lowest === undefined) {
            lowest = diff;
        }
    }

    return lowest;
}

// ===================================

// permutation

function solution(A) {
    const mySet = new Set();
    const arr = A;
    const len = A.length;

    for (let i = 0; i < len; i++) {
        mySet.add(arr[i]);
    }

    for (let i = 0; i < len; i++) {
        if (!mySet.has(i+1)) {
            return 0
        }
    }

    return 1;
}
