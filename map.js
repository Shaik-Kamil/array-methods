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


