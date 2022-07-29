//! Amina's notes

const array = [3, 1, 4, 1, 5, 9, 20, -1, 5, 0, 100];

/* 
If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.
*/
const compareEqual = (a, b) => a === b;
console.log(array.sort(compareEqual)); // [3, 1, 4, 1, 5, 9, 20, -1, 5, 0, 100];
/*
If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
*/
const comparedDescending = (a, b) => (a > b ? -1 : 0);
console.log(array.sort(comparedDescending)); // descending order

/*
If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
*/
const comparedAscending = (a, b) => (a < b ? -1 : 1); // ascending order
console.log(array.sort(comparedAscending));

/*
To fix the issue of sorting the number, use the following syntax:
*/

array.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

// Or shorthand
array.sort((a, b) => a - b); // ascending order
array.sort((a, b) => b - a); // descending order

console.log(array);

const arrayFloat = ["12.4", "1.62", "3.35"];
const sortedFloat = ["12.4", "1.62", "3.35"].sort(
  (a, b) => parseFloat(a) - parseFloat(b)
);
console.log(sortedFloat);

//=============================================================================

const animals = ["cat", "dog", "elephant", "bee", "ant"];

/*
To sort the elements of the animals array in ascending order alphabetically, you use the sort() method without passing the compare function as shown in the following example:
*/

animals.sort();
console.log(animals); // [ 'ant', 'bee', 'cat', 'dog', 'elephant' ];

/*
To sort the animals array in descending order, you need to change the logic of the compare function and pass it to the sort() method as the following example.
*/

animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(animals); // [ 'elephant', 'dog', 'cat', 'bee', 'ant' ];

/*
Suppose you have an array that contains elements in both uppercase and lowercase as follows:
*/
// sorting array with mixed cases
const mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];
/*
To sort this array alphabetically, you need to use a custom compare function to convert all elements to the same case e.g., uppercase for comparison and pass that function to the sort() method.
*/

mixedCaseAnimals.sort((a, b) => {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals); // [ 'ant', 'bee', 'Cat', 'dog', 'Elephant' ];

//======================================================================

const employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// sort by numeric property: salary from lowest to highest
employees.sort((x, y) => {
  return x.salary - y.salary;
});
console.table(employees);
/*
┌─────────┬─────────┬────────┬─────────────────────┐
│ (index) │  name   │ salary │      hireDate       │
├─────────┼─────────┼────────┼─────────────────────┤
│    0    │ 'David' │ 75000  │  'August 15, 2009'  │
│    1    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    2    │ 'John'  │ 90000  │   'July 1, 2010'    │
└─────────┴─────────┴────────┴─────────────────────┘
This example is similar to the example of sorting an array of numbers in ascending order. The difference is that it compares the salary property of two objects instead.
*/

// sorting by string property: names
employees.sort((x, y) => {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees);
/*
┌─────────┬─────────┬────────┬─────────────────────┐
│ (index) │  name   │ salary │      hireDate       │
├─────────┼─────────┼────────┼─────────────────────┤
│    0    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    1    │ 'David' │ 75000  │  'August 15, 2009'  │
│    2    │ 'John'  │ 90000  │   'July 1, 2010'    │
└─────────┴─────────┴────────┴─────────────────────┘
*/

// sorting by date property: hireDate
/*
The hire date data is stored in the hireDate property of the employee object. However, it is just a string that represents a valid date, not the Date object. 
Therefore, to sort employees by hire date, you first have to create a valid Date object from the date string, and then compare two dates, which is the same as comparing two numbers.
*/
employees.sort((x, y) => {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate);
  return a - b;
});

console.table(employees);
/*
┌─────────┬─────────┬────────┬─────────────────────┐
│ (index) │  name   │ salary │      hireDate       │
├─────────┼─────────┼────────┼─────────────────────┤
│    0    │ 'David' │ 75000  │  'August 15, 2009'  │
│    1    │ 'John'  │ 90000  │   'July 1, 2010'    │
│    2    │  'Ana'  │ 80000  │ 'December 12, 2011' │
└─────────┴─────────┴────────┴─────────────────────┘
*/

// const numbers = [3, 1, 4, 1, 5];
// console.log(numbers);
// const sorted = numbers.sort((a, b) => a - b);
// // numbers and sorted are both [1, 1, 3, 4, 5]
// console.log(sorted);
// sorted[0] = 10;
// console.log(numbers[0]); // 10
// console.log(numbers);

// const numbers = [3, 1, 4, 1, 5];
// // [...numbers] creates a shallow copy, so sort() does not mutate the original
// const sorted = [...numbers].sort((a, b) => a - b);
// console.log(sorted);
// sorted[0] = 10;
// console.log(numbers[0]); // 3
// console.log(numbers);

const arr = [3, 1, 4, 1, 5, 9];
// const compare = (a, b) => a > b ? 1 : 0;
// console.log(arr.sort(compare));

// const sortWithSpread = [...arr].sort((a,b) => a - b);
// console.log(sortWithSpread);

//! Class notes

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

console.log(sortedCompareNumbers);

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
