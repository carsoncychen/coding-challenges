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

// practice closure and recursion

printTriangle = () => {
  let count = 1; // variable stored in closure
  printNum = (num) => {
    if (count <= num) {
      let printHolder = '';
      for(let i = 0; i < count; i++) {
        printHolder += '#';
      }
      console.log(printHolder);
      count ++;
      printNum(num);
    }
  }
  return printNum;
}

const tester = printTriangle();
tester(10);
console.dir(tester);


// ===============================

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

solution([7,4,6,3,2,1]);
