//! Amina's notes
/*
The reduce() method takes two arguments: a callback function and an optional initial value. If an initial value is provided, reduce() calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, reduce() calls the callback function on each element in the array after the first element.

reduce() returns the value that is returned from the callback function on the final iteration of the array.
*/

// 1- reduce sum
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (total, current) {
  console.log({ total });
  console.log({ current });
  console.log("New total is: ", total + current);
  console.log("----");
  return (total += current);
}, 0);
console.log(sum);
// using arrow function
// const sum = numbers.reduce((total, current) => total += current, 0);
console.log("================");

// 2- reduce product
const nums = [2, 1, 3, 4];
const multiply = nums.reduce(function (total, current) {
  console.log({ total });
  console.log({ current });
  console.log("New total is: ", total * current);
  console.log("----");
  return (total *= current);
}, 1);
// arrow function
// const multiply = nums.reduce((total,current) => total *= current, 1);
// console.log(multiply);
console.log("================");

// reduce max/min value
// max
const vals = [1, 2, 3, 4, 5];
const [initial] = vals;
const maxValue = vals.reduce(function (total, current) {
  console.log({ total });
  console.log({ current });
  console.log({ initial });
  console.log("New max is: ", Math.max(total, current));
  console.log("----");
  return Math.max(total, current);
}, initial);
// using arrow function
// const maxValue = vals.reduce((total, current) => Math.max(total, current), initial);
console.log(maxValue);
console.log("=============");

// min
const minValue = vals.reduce(function (total, current) {
  console.log({ total });
  console.log({ current });
  console.log({ initial });
  console.log("New min is: ", Math.min(total, current));
  console.log("----");
  return Math.min(total, current);
}, initial);
// using arrow function
// const minValue = vals.reduce((total, current) => Math.min(total, current), initial);
console.log(minValue);
console.log("=============");

// reduce average
const grades = [80, 50, 70, 75];
const avg = grades.reduce((total, current, idx, array) => {
  total += current;
  return idx === array.length - 1 ? total / array.length : total;
});
console.log(avg);
console.log("=============");

//reduce Sum of values in an object array
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sumValues = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0
);
console.log(sumValues);
console.log("=============");

// flatten an array of arrays
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);
console.log(flattened);
console.log("=============");

// reduce reverse
const values = ["Alex", "Diana", "Bob", "Nick"];
const reversed = values.reduce((total, current) => [current, ...total], []);
console.log(reversed);
console.log("=============");

// reduce unique values
const myVals = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueValues = myVals.reduce((total, current) => {
  if (total.includes(current)) {
    return total;
  } else {
    return [...total, current];
  }
}, []);
console.log(uniqueValues);
console.log("=============");

// reduce count occurrences

const words = ["sky", "cloud", "rocks", "sky", "cloud", "forest", "sky"];
const tally = words.reduce((total, current) => {
  total[current] = (total[current] || 0) + 1;
  return total;
}, {});
console.log(tally);

// inside function example
function countOccurrences(arr) {
  return arr.reduce(function (acc, curr) {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}
console.log(countOccurrences(["a", "b", "c", "b", "a"]));
// one-liner
// const count = (arr) => arr.reduce((ac,a) => (ac[a] = ac[a] + 1 || 1,ac),{})
// console.log(count(['a', 'b', 'c', 'b', 'a']));

//! JD's notes

//! reduce()
//? reduce is a robust array method
//? it is the declarative version of the accumulator
//? declarative we don't see what's going on under the hood we just declare the method. (for ex. .map)
//? imperative is when we tell the machine what we want it to do. (for ex. for loops)
//? reduce is meant to return one value.

//let's say we want to return the sum of all the numbers

const numArray = [1, 2, 3, 4];

const imperativeSum = (arr) => {
  let accumulator = 0;
  for (let element of arr) {
    accumulator += element;
  }
  return accumulator;
};

const imperativeSum2 = (arr) => {
  let accumulator = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    accumulator += element;
  }
  return accumulator;
};
// console.log(imperativeSum(numArray));
// console.log(imperativeSum2(numArray)); //should log 10 but logging 11

// reduce takes four arguments.
// first is accumulator which auto starts at the first value of the array.
// second is the current value in the loop aka the element.
// third is the index (optional)
// fourth is the array (optional)

//! accumulator initializes with the first value.
//! element begins with the second value.
const declarativeSum = numArray.reduce(
  (accumulator, element) => accumulator + element
);

// console.log(declarativeSum);

const numArray2 = [1, 2, 3, 4];

// find the max number in the array

//!old way

const imperativeMax = (arr) => {
  let accumulator = null;

  for (const element of arr) {
    if (element > accumulator) accumulator = element;
  }
  return accumulator;
};

// console.log(imperativeMax(numArray2))

//! easiest way
const max = Math.max(...numArray2);
// console.log(max);

//* what if you can't use math methods or for loops (interview scenarios)
const declarativeMax = numArray2.reduce((accumulator, element) => {
  if (element > accumulator) accumulator = element;
  return accumulator;
});
console.log(declarativeMax);

//! in reduce the variables for the arguments will often look like this
//? acc is the accumulator
//? curr is the currentValue

const declarativeMax2 = numArray2.reduce((acc, curr) => {
  if (curr > acc) return curr;
  return acc;
});
console.log(declarativeMax2);

let boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

// return the largest object to find the largest object
// multiply width times height

const imperativeBox = (arr) => {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    if (
      element.width * element.height >
      accumulator.width * accumulator.height
    ) {
      accumulator = element;
    }
  }
  return accumulator;
};
// console.log(imperativeBox);

const declarativeBox = boxarts.reduce((accumulator, element) => {
  if (element.width * element.height > accumulator.width * accumulator.height) {
    accumulator = element;
  }
  return accumulator;
});

// console.log(declarativeBox)

//! how can we replace the map method with reduce.

//! let's return a list of URLs
//! map iterates through

const boxMap = boxarts.map((box) => box.url);
// console.log(boxMap);
const boxMap2 = boxarts.map(({ url }) => url);
// console.log(boxMap2);

// reduce takes four arguments.
// first is accumulator which auto starts at the first value of the array.
// second is the initial value.

const boxMapReduce = boxarts.reduce((accumulator, box) => {
  // console.log(accumulator);
  accumulator.push(box.url);
  return accumulator;
}, []);

// console.log(boxMapReduce);

const boxMapReduce2 = boxarts.reduce(
  (accumulator, { url }) => [...accumulator, url],
  []
);
// console.log(boxMapReduce2);

//! imperative is replacing instead of pushing
const tryNonMutate = (arr) => {
  let accumulator = [];
  for (const element of arr) {
    accumulator = [...accumulator, element.url];
  }
  return accumulator;
};

// console.log(tryNonMutate(boxarts));

//! how about filter?

// let's say we want to return only items with a width greater than 250;

const boxFilter = boxarts.filter((box) => box.width > 250);
// console.log(boxFilter);

const boxReduceFilter = boxarts.reduce((accumulator, box) => {
  if (box.width > 250) {
    accumulator.push(box);
  }
  return accumulator;
}, []);

// console.log(boxReduceFilter);

const shorterBoxReduceFilter = boxarts.reduce((accumulator, box) => {
  if (box.width > 250) {
    return [...accumulator, box];
  }
  return accumulator;
}, []);

// console.log(shorterBoxReduceFilter);
