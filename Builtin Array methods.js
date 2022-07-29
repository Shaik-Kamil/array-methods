const characters = [
  {
    name: "Daenerys Targaryen",
    show: "Game of Thrones",
    seasons: 8,
  },
  {
    name: "Dolores Abarnathy",
    show: "West World",
    seasons: 4,
  },
  {
    name: "Don Draper",
    show: "Mad Men",
    seasons: 7,
  },
  {
    name: "Thomas Shelby",
    show: "Peaky Blinders",
    seasons: 6,
  },
  {
    name: "Rick Sanchez",
    show: "Rick & Morty",
    seasons: 4,
  },
  {
    name: "Jeff Probst",
    show: "Survivor",
    seasons: 43,
  },
  {
    name: "Charlotte Hale",
    show: "West World",
    seasons: 4,
  },
];
//? All of these methods take a callback function as an argument
//? A callback function is a function that is passed to another function as an argument
//* forEach()
//! This method will replace a regular for loop to iterate over an array and modify it (if you want to) or not.
//! The callback function's first argument will represent each element as we iterate through the array.

characters.forEach((char) => {
  // console.log(char);
  //   console.log(char.name)
  return char.name;
});
// console.log(characters);

//! We can also modify each element in the array by using the second argument in the forEach()
//! char is representing the entire single element as we iterate through
//! i is the index of each element as we iterate through.

// characters.forEach((char, i) => {
//   characters[i] = "something else";
// });
// console.log(characters);

// characters/forEach((char, i) => {
//   if (char.name === "Don Draper") {
// characters[i] = "something else";
//   }
// });
// console.log(characters);

// characters.forEach((char, i) => {
//   if (i % 2 === 0) {
//     characters[i] = "something else";
//   }
// });
// console.log(characters);

//! This method will create a new array of elements based on what the callback function returns as we iterate over each element.
//* map()
// const addRealKey = characters.map((char) => {
//   const person = char;
//   person.real = false;
//   if (person.name === "Jeff Probst") {
//     person.real = true;
//   }
//   person.name === "Jeff Probst" ? (person.real = true) : (person.real = false);
//   return person;
// });
const addRealKey = characters.map((char) => {
  char.real = false;
  char.cartoon = false;

  if (char.name === "Jeff Probst") {
    char.real = true;
  }
  if (char.name === "Rick Sanchez") {
    char.cartoon = true;
  }
  // char.name === "Jeff Probst" ? (char.real = true) : (char.real = false);
  return char;
});
// console.log(addRealKey);

// const isAnimated = characters.map((char) => {
//   const animation = char;
//   animation.cartoon = false;
//   if (animation.name === "Rick Sanchez") {
//     animation.cartoon = true;
//   }
//   return animation;
// });

// console.log(isAnimated)

const nums = [12, 15, -15, 10, 100, 63, 2, 6, -3];

//? the below function is using find() where if the array[i] is not there it will return undefined
const foundNums = nums.find((num) => num === 87);
// console.log(foundNums)

// This will return an array with elements that are undefined because it returns a value for each element.
const greaterThan10 = nums.map((num) => {
  if (num > 10) {
    return num;
  }
});
const higherThan10 = nums.filter((num) => {
  return num > 10;
});
// console.log(greaterThan10)
// console.log(higherThan10)

//! filter also takes in a callback function. filter will return a new array that "filters" the array for any element that matches the condition we are looking for.
//* filter()
// const moreThan5Seasons = characters.filter((char) => {
//     return char.seasons > 5
// });

//? fancy version: when an arrow function can be expressed in only one line, we can drop the {} and the return keyword is implied
const moreThan5Seasons = characters.filter((char) => char.seasons > 5);

// console.log(moreThan5Seasons);

const liveAction = addRealKey.filter((char) => char.cartoon === false);
// console.log(liveAction);

//* every()

//! called on characters object where some cartoons => false;
const all = characters.every((char) => characters.cartoon === false);
// console.log(all);

//! called on addRealKey where some cartoons => false;
// const allAreNotCartoons = addRealKey.every((char) => addRealKey.cartoon === false);
const allAreNotCartoons = addRealKey.every(
  ({ cartoon }) => addRealKey.cartoon === false
);
// console.log(allAreNotCartoons);

//! called on liveAction where all cartoons => true;
const allAreLive = liveAction.every((char) => char.cartoon === false);
// console.log(allAreLive);

//! will return a boolean based on whether at least one of the elements match the condition we provide, or not
//* some()

const someCartoons = addRealKey.some((char) => (char.cartoon = true));
// console.log(someCartoons);

//! will help us find the FIRST element that matches the condition we provided. similar to a filter but will only return one element.
//* find()

// const thomas = characters.find((char) => {
//   return char.name === "Thomas Shelby";
// });

//* concise version where return is implied
// const thomas = characters.find((char) =>  char.name === "Thomas Shelby");
// console.log(thomas);

//* Destructuring the char passed to the callback function, in which we only grab the "name" key
const hale = characters.find(({ name }) => name === "Charlotte Hale");

// console.log(hale);

//* sort()
const letters = ["r", "b", "o", "a", "q"];
//*take a look at basic sort with string
const sortedLetters = letters.sort();
// console.log(sortedLetters);

//! sort works by converting the value to a string and checking the unicode number of the character

//*lets try it with numbers

const sortedNums1 = [2, 100, 7, 4];
const sortedNumbers1 = sortedNums1.sort();
// console.log(sortedNumbers1);
//! this doesn't work because the computer is looking at the first character in the string.
//! and compares it to the first character in each item

//* check the unicode number for each character *** lexicographical comparison
sortedNums1.forEach((num) =>
  console.log(`{num}: ${String(num).charCodeAt(0)}`)
);

//! sort comes with a comparator function that allows us to return a number
//! its a callback function and in the function we compare two unicodes to see which one is greater
const sortedNums2 = [2, 100, 7, 4];
const sortedCompareNumbers = sortedNums2.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

// console.log(sortedCompareNumbers);

// lets break it down

// 2   < 100 [2, 100, 7, 4]
// 100 >  7  [2, 7, 100, 4]
// 100 >  4  [2, 7, 4, 100]
// 2   <  7  [2, 7, 4, 100]
// 7   <  4  [2, 4, 7, 100]
// 4   <  7  [2, 4, 7, 100]

//* this still looks for a negative or positive or 0;
const shortSort = sortedNums2.sort((a, b) => a - b);

// console.log(shortSort);

const cars = [
  { make: `mercedes`, price: 82000 },
  { make: `jeep`, price: 27000 },
  { make: `cadillac`, price: 80000 },
  { make: `toyota`, price: 35000 },
];

//* lets see how it works with numbers in an object
//! we have to remember to key into the value inside the object.
const sortByPrice = cars.sort((a, b) => a.price - b.price);
const badSortByMake = cars.sort((a, b) => a.make < b.make);
const goodSortByMake = cars.sort((a, b) => {
  if (a.make < b.make) return -1;
  if (a.make > b.make) return 1;
  return 0;
});

// console.log(sortByPrice)
// console.log(badSortByMake);
// console.log(goodSortByMake);

// lexicographical comparison
// i have two works apple and application
// first runs compare a and a -> the same
// second p and p -> the same
// third p and p -> the same
// four l and l -> the same
// five e and i e < i so -> so apple will precede application -1

//if you have uppercase letters the order will change
// uppercase is less than lowercase
// the trend is to .toLowerCase() your value and then compare.
//* apPle will precede apple.

// new and better way to compare
// the function returns a number and its also robust because it not only includes american
//  characters, it includes characters like

const makeSortLex = cars.sort((a, b) => {
  return a.make.localeCompare(b.make);
});
// console.log("make", makeSortLex);

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
