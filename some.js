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

//! will return a boolean based on whether at least one of the elements match the condition we provide, or not
//* some()

const someCartoons = addRealKey.some((char) => (char.cartoon = true));
console.log(someCartoons);
