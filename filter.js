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
  
//! filter also takes in a callback function. filter will return a new array that "filters" the array for any element that matches the condition we are looking for.
//* filter()
// const moreThan5Seasons = characters.filter((char) => {
//     return char.seasons > 5
// });

//? fancy version: when an arrow function can be expressed in only one line, we can drop the {} and the return keyword is implied
const moreThan5Seasons = characters.filter((char) => char.seasons > 5);

// console.log(moreThan5Seasons);

const liveAction = addRealKey.filter((char) => char.cartoon === false);
console.log(liveAction);

const nums = [12, 15, -15, 10, 100, 63, 2, 6, -3];

const higherThan10 = nums.filter((num) => {
  return num > 10;
});

