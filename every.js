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

//* every()

//! called on characters object where some cartoons => false;
const all = characters.every((char) => characters.cartoon === false);
// console.log(all);

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


//! called on addRealKey where some cartoons => false;
// const allAreNotCartoons = addRealKey.every((char) => addRealKey.cartoon === false);
const allAreNotCartoons = addRealKey.every(
  ({ cartoon }) => addRealKey.cartoon === false
);
// console.log(allAreNotCartoons);

const liveAction = addRealKey.filter((char) => char.cartoon === false);
//! called on liveAction where all cartoons => true;
const allAreLive = liveAction.every((char) => char.cartoon === false);
// console.log(allAreLive); 