const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squareElement = (ele) => {
  return ele * ele;
};

const greaterThan5 = (ele) => {
  return ele > 5;
};

const sum = (sum, ele) => {
  return sum + ele;
};

const printArray = (ele, index) => {
  console.log(`Element at index ${index} is ${ele}`);
};

Array.prototype.myMap = function (cbF) {
  const context = this;
  const res = [];
  for (let i = 0; i < context.length; i++) {
    res.push(cbF(context[i], i, context));
  }
  return res;
};

Array.prototype.myFilter = function (cbF) {
  const context = this;
  const res = [];
  for (let i = 0; i < context.length; i++) {
    if (cbF(context[i], i, context)) res.push(context[i]);
  }
  return res;
};

Array.prototype.myReduce = function (cbF, acc) {
  const context = this;
  let accumulator = acc;
  for (let i = 0; i < context.length; i++) {
    if (!accumulator) {
      accumulator = context[i];
    } else {
      accumulator = cbF(accumulator, context[i]);
    }
  }
  return accumulator;
};

Array.prototype.myForEach = function (cbF) {
  const context = this;
  for (let i = 0; i < context.length; i++) {
    cbF(context[i]);
  }
};

const sqArray = array.myMap(squareElement);
console.log("sqArray : ", sqArray);

const greaterThan5Elements = array.myFilter(greaterThan5);
console.log("greaterThan5Elements : ", greaterThan5Elements);

const sumOfElements = array.myReduce(sum);
console.log("sumOfElements: ", sumOfElements);

array.myForEach(printArray);
