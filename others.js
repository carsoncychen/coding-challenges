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
